import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  ViewEncapsulation,
  afterNextRender,
  computed,
  inject,
  input,
  viewChild,
} from '@angular/core';
import type * as MapLibre from 'maplibre-gl';

import { SiteLocale } from '../../../../sites/site.types';
import { TourRoute, TourRouteLabel } from '../../../shared/content/tour-routes';

/** One marker per place: a route that returns to a city merges both visits. */
interface MapPlace {
  name: string;
  lat: number;
  lng: number;
  isVia: boolean;
  label: TourRouteLabel;
}

// OpenFreeMap is free and keyless; its vector tiles carry every place name in many languages.
const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';
const FIT_PADDING = { top: 40, bottom: 60, left: 60, right: 60 };

/**
 * MapLibre's own stylesheet is ~70 kB, far over the per-component style budget, so angular.json
 * builds it as a separate `maplibre.css` that is not injected; it is linked here the first time a
 * map opens, so no other page pays for it.
 */
function loadMapLibreStyles(): Promise<void> {
  const existing = document.querySelector<HTMLLinkElement>('link[data-maplibre-styles]');

  if (existing) {
    return existing.sheet ? Promise.resolve() : waitForLoad(existing);
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'maplibre.css';
  link.dataset['maplibreStyles'] = '';
  document.head.append(link);

  return waitForLoad(link);
}

// Resolves on error too: an unstyled map still works better than none.
function waitForLoad(link: HTMLLinkElement): Promise<void> {
  return new Promise((resolve) => {
    link.addEventListener('load', () => resolve(), { once: true });
    link.addEventListener('error', () => resolve(), { once: true });
  });
}

/**
 * Interactive route map for a tour. MapLibre needs WebGL and a real DOM, so it is loaded on demand
 * in the browser only; the server renders an empty frame.
 */
@Component({
  selector: 'app-tour-map',
  templateUrl: './tour-map.html',
  styleUrl: './tour-map.scss',
  // MapLibre builds its own DOM inside the frame, which emulated encapsulation cannot reach.
  encapsulation: ViewEncapsulation.None,
})
export class TourMap implements OnDestroy {
  readonly route = input.required<TourRoute>();
  readonly locale = input.required<SiteLocale>();
  readonly fitLabel = input.required<string>();

  private readonly frame = viewChild.required<ElementRef<HTMLElement>>('frame');
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private maplibre?: typeof MapLibre;
  private map?: MapLibre.Map;

  private readonly places = computed<readonly MapPlace[]>(() => {
    const places = new Map<string, MapPlace>();

    for (const stop of this.route()) {
      const name = stop.name[this.locale()];
      const existing = places.get(name);

      places.set(name, {
        name,
        lat: stop.lat,
        lng: stop.lng,
        isVia: (existing?.isVia ?? true) && stop.days.length === 0,
        label: existing?.label ?? stop.label ?? 'top',
      });
    }

    return [...places.values()];
  });

  constructor() {
    afterNextRender(() => void this.initMap());
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  protected fitRoute(): void {
    if (!this.map || !this.maplibre) {
      return;
    }

    const bounds = new this.maplibre.LngLatBounds();

    for (const place of this.places()) {
      bounds.extend([place.lng, place.lat]);
    }

    this.map.fitBounds(bounds, { padding: FIT_PADDING, duration: 600 });
  }

  private async initMap(): Promise<void> {
    if (!this.isBrowser) {
      return;
    }

    const [module] = await Promise.all([import('maplibre-gl'), loadMapLibreStyles()]);
    // MapLibre ships as CommonJS. The development build hands back its exports directly, but the
    // optimised production build wraps them in `default`, so take whichever is there.
    const maplibre = (module as unknown as { default?: typeof MapLibre }).default ?? module;
    const frame = this.frame().nativeElement;
    const bounds = new maplibre.LngLatBounds();

    for (const place of this.places()) {
      bounds.extend([place.lng, place.lat]);
    }

    this.maplibre = maplibre;
    const map = new maplibre.Map({
      container: frame,
      bounds,
      fitBoundsOptions: { padding: FIT_PADDING },
      // A route map has no use for tilting or turning, which only disorients on a phone.
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
      scrollZoom: false,
      attributionControl: { compact: true },
    });

    this.map = map;
    map.touchZoomRotate.disableRotation();
    map.addControl(new maplibre.NavigationControl({ showCompass: false }), 'top-left');

    // The wheel scrolls the page until the reader clicks into the map, so a page scroll passing
    // over it is not caught as a zoom; leaving the map hands the wheel back to the page.
    map.on('click', () => map.scrollZoom.enable());
    frame.addEventListener('mouseleave', () => map.scrollZoom.disable());

    // Zoomed well out from the fitted route, the stops crowd into one blur of names, so only the
    // route line is left. Measured from the fitted zoom, as routes differ greatly in size.
    const fittedZoom = map.getZoom();
    map.on('zoom', () =>
      frame.classList.toggle('tour-map__frame--far', map.getZoom() < fittedZoom - 1.5),
    );

    // Relabelled before the first frame is drawn, so local-script names never flash up.
    map.setStyle(MAP_STYLE, { transformStyle: (_, style) => this.localiseLabels(style) });
    map.on('load', () =>
      this.addRouteLine(map, getComputedStyle(frame).getPropertyValue('--omaya-color-accent')),
    );

    // Markers are HTML rather than map layers, so their colours follow the site theme in CSS.
    for (const place of this.places()) {
      const element = document.createElement('div');
      element.className = `tour-map__place tour-map__place--${place.label}${place.isVia ? ' tour-map__place--via' : ''}`;
      element.innerHTML =
        '<span class="tour-map__dot"></span><span class="tour-map__label"></span>';
      element.querySelector('.tour-map__label')!.textContent = place.name;

      new maplibre.Marker({ element }).setLngLat([place.lng, place.lat]).addTo(map);
    }
  }

  /** Base map place names in the site's language, falling back to Latin script, then local. */
  private localiseLabels(style: MapLibre.StyleSpecification): MapLibre.StyleSpecification {
    const name: MapLibre.ExpressionSpecification = [
      'coalesce',
      ['get', `name:${this.locale()}`],
      ['get', 'name:latin'],
      ['get', 'name'],
    ];

    return {
      ...style,
      layers: style.layers.map((layer) =>
        // Only place-name layers; road shields and the like label with other fields.
        layer.type === 'symbol' &&
        JSON.stringify(layer.layout?.['text-field'] ?? '').includes('name')
          ? { ...layer, layout: { ...layer.layout, 'text-field': name } }
          : layer,
      ),
    };
  }

  private addRouteLine(map: MapLibre.Map, colour: string): void {
    const stops = this.route();
    const legs = stops.slice(0, -1).map((from, index) => {
      const to = stops[index + 1]!;

      return {
        type: 'Feature' as const,
        properties: { flight: from.next === 'flight' },
        geometry: {
          type: 'LineString' as const,
          coordinates: [
            [from.lng, from.lat],
            [to.lng, to.lat],
          ],
        },
      };
    });

    map.addSource('tour-route', {
      type: 'geojson',
      data: { type: 'FeatureCollection', features: legs },
    });

    const paint = {
      'line-color': colour.trim() || '#f5a800',
      'line-width': 3,
      'line-opacity': 0.85,
    };

    map.addLayer({
      id: 'tour-route-road',
      type: 'line',
      source: 'tour-route',
      filter: ['!', ['get', 'flight']],
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint,
    });
    // Line dashes cannot vary per feature, so flights get a layer of their own.
    map.addLayer({
      id: 'tour-route-flight',
      type: 'line',
      source: 'tour-route',
      filter: ['get', 'flight'],
      paint: { ...paint, 'line-dasharray': [2, 2] },
    });
  }
}
