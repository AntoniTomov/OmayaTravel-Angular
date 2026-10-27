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
import { TourRoute } from '../../../shared/content/tour-routes';

/** One marker per place: a route that returns to a city merges both visits. */
interface MapPlace {
  name: string;
  lat: number;
  lng: number;
  isVia: boolean;
}

// OpenFreeMap is free and keyless; its vector tiles carry every place name in many languages.
const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';
const FIT_PADDING = { top: 50, bottom: 50, left: 50, right: 50 };
const PLACE_LAYERS = ['tour-places-dot', 'tour-places-label'];

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

    this.map.fitBounds(this.routeBounds(this.maplibre), { padding: FIT_PADDING, duration: 600 });
  }

  private fitControl(): HTMLElement {
    const group = document.createElement('div');
    const button = document.createElement('button');

    group.className = 'maplibregl-ctrl maplibregl-ctrl-group';
    button.type = 'button';
    button.className = 'tour-map__fit';
    button.title = this.fitLabel();
    button.setAttribute('aria-label', this.fitLabel());
    // Four corner arrows: "show everything".
    button.innerHTML =
      '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
      'd="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>';
    button.addEventListener('click', () => this.fitRoute());
    group.append(button);

    return group;
  }

  private routeBounds(maplibre: typeof MapLibre): MapLibre.LngLatBounds {
    const bounds = new maplibre.LngLatBounds();

    for (const place of this.places()) {
      bounds.extend([place.lng, place.lat]);
    }

    return bounds;
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

    this.maplibre = maplibre;
    const map = new maplibre.Map({
      container: frame,
      bounds: this.routeBounds(maplibre),
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
    // A map control rather than a button laid over the map, so MapLibre keeps it clear of the
    // attribution and the other controls at every width.
    map.addControl(
      {
        onAdd: () => this.fitControl(),
        onRemove: () => undefined,
      },
      'top-left',
    );

    // The wheel scrolls the page until the reader clicks into the map, so a page scroll passing
    // over it is not caught as a zoom; leaving the map hands the wheel back to the page.
    map.on('click', () => map.scrollZoom.enable());
    frame.addEventListener('mouseleave', () => map.scrollZoom.disable());

    // Relabelled before the first frame is drawn, so local-script names never flash up.
    map.setStyle(MAP_STYLE, { transformStyle: (_, style) => this.localiseLabels(style) });
    map.on('load', () => {
      const theme = getComputedStyle(frame);
      const colour = (name: string, fallback: string) =>
        theme.getPropertyValue(name).trim() || fallback;

      this.addRouteLine(map, colour('--omaya-color-accent', '#f5a800'));
      this.addPlaces(map, {
        accent: colour('--omaya-color-accent', '#f5a800'),
        muted: colour('--omaya-color-muted', '#777777'),
        heading: colour('--omaya-color-heading', '#1a1a1a'),
      });
      this.hidePlacesWhenFar(map);
    });
    // The compact attribution opens itself as the tiles arrive, covering the bottom of a
    // phone-sized map; close it once the map has settled. It stays one tap away on the (i) button.
    map.once('idle', () =>
      frame.querySelector('.maplibregl-ctrl-attrib')?.classList.remove('maplibregl-compact-show'),
    );
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
    // Side trips are out and back from an overnight stop, so the line runs past them.
    const stops = this.route().filter((stop) => !stop.sideTrip);
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

    const paint = { 'line-color': colour, 'line-width': 3, 'line-opacity': 0.85 };

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

  /**
   * Stops are drawn as map layers rather than page elements, so MapLibre places their names
   * itself: each name tries the sides of its dot in turn, and where none is free it is left out
   * rather than drawn over another. Overnight stops are placed before pass-through ones, and both
   * before the base map's own labels, which give way to them.
   */
  private addPlaces(
    map: MapLibre.Map,
    colours: { accent: string; muted: string; heading: string },
  ): void {
    map.addSource('tour-places', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: this.places().map((place) => ({
          type: 'Feature' as const,
          properties: { name: place.name, via: place.isVia },
          geometry: { type: 'Point' as const, coordinates: [place.lng, place.lat] },
        })),
      },
    });

    map.addLayer({
      id: 'tour-places-dot',
      type: 'circle',
      source: 'tour-places',
      paint: {
        'circle-radius': ['case', ['get', 'via'], 4, 6.5],
        'circle-color': ['case', ['get', 'via'], colours.muted, colours.accent],
        'circle-stroke-color': '#ffffff',
        'circle-stroke-width': 2,
      },
    });

    map.addLayer({
      id: 'tour-places-label',
      type: 'symbol',
      source: 'tour-places',
      layout: {
        'text-field': ['get', 'name'],
        'text-font': [
          'case',
          ['get', 'via'],
          ['literal', ['Noto Sans Regular']],
          ['literal', ['Noto Sans Bold']],
        ],
        'text-size': ['case', ['get', 'via'], 11.5, 13.5],
        'text-variable-anchor': ['bottom', 'top', 'left', 'right'],
        'text-radial-offset': 0.75,
        'text-justify': 'auto',
        'symbol-sort-key': ['case', ['get', 'via'], 1, 0],
      },
      paint: {
        'text-color': ['case', ['get', 'via'], colours.muted, colours.heading],
        'text-halo-color': '#ffffff',
        'text-halo-width': 2,
      },
    });
  }

  /**
   * Zoomed well out from the fitted route, the stops crowd into one blur, so only the route line
   * is left. Measured from the fitted zoom, as routes differ greatly in size.
   */
  private hidePlacesWhenFar(map: MapLibre.Map): void {
    const fittedZoom = map.getZoom();
    const update = () => {
      const visibility = map.getZoom() < fittedZoom - 1.5 ? 'none' : 'visible';

      for (const layer of PLACE_LAYERS) {
        map.setLayoutProperty(layer, 'visibility', visibility);
      }
    };

    map.on('zoom', update);
  }
}
