import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ActiveSite } from '../../../../sites/active-site';
import { AMELIA_SITE_CONFIG } from '../../../../sites/amelia/site.config';
import { FeaturedTrips } from './featured-trips';

describe('FeaturedTrips', () => {
  let fixture: ComponentFixture<FeaturedTrips>;
  let carousel: HTMLElement;
  let captured: number[];
  let released: number[];

  function pointer(type: string, clientX: number): PointerEvent {
    const event = new MouseEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX,
      button: 0,
    }) as PointerEvent;

    Object.defineProperty(event, 'pointerId', { value: 1 });

    return event;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTrips],
      providers: [
        provideRouter([]),
        {
          provide: ActiveSite,
          useValue: {
            site: () => AMELIA_SITE_CONFIG,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedTrips);
    fixture.detectChanges();

    carousel = fixture.nativeElement.querySelector('.featured-trips__carousel') as HTMLElement;
    captured = [];
    released = [];
    carousel.setPointerCapture = (pointerId: number) => captured.push(pointerId);
    carousel.releasePointerCapture = (pointerId: number) => released.push(pointerId);
    carousel.hasPointerCapture = (pointerId: number) =>
      captured.includes(pointerId) && !released.includes(pointerId);
  });

  it('links every featured card to its tour page', () => {
    // The test router serializes without the trailing slash the route tables keep.
    const targets = AMELIA_SITE_CONFIG.content.featuredTours.map((tour) =>
      tour.target.replace(/\/$/, ''),
    );
    const hrefs = Array.from(fixture.nativeElement.querySelectorAll('.featured-trips__card a')).map(
      (link) => (link as HTMLAnchorElement).getAttribute('href'),
    );

    for (const target of targets) {
      expect(hrefs).toContain(target);
    }
  });

  // Capturing the pointer on pointerdown retargets the follow-up click to the carousel, so a tap
  // on a card never reached the card's link and the tour page never opened.
  it('leaves a tap uncaptured so the card link still receives the click', () => {
    carousel.dispatchEvent(pointer('pointerdown', 200));
    carousel.dispatchEvent(pointer('pointermove', 202));
    carousel.dispatchEvent(pointer('pointerup', 202));

    expect(captured).toEqual([]);
  });

  it('captures the pointer once a drag passes the movement threshold', () => {
    carousel.dispatchEvent(pointer('pointerdown', 200));
    carousel.dispatchEvent(pointer('pointermove', 120));
    carousel.dispatchEvent(pointer('pointermove', 60));

    expect(captured).toEqual([1]);

    carousel.dispatchEvent(pointer('pointerup', 60));

    expect(released).toEqual([1]);
  });
});
