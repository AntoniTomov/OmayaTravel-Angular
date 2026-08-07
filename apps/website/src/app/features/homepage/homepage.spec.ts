import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { Homepage } from './homepage';

describe('Homepage', () => {
  let fixture: ComponentFixture<Homepage>;
  let component: Homepage;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Homepage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('renders the approved homepage hero copy and trip search controls', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('See the world. Meet its people');
    expect(compiled.textContent).toContain('Where to?');
    expect(compiled.textContent).toContain('When?');
    expect(compiled.textContent).toContain('Find now');
  });

  it('renders the active hero as a real prioritized image', () => {
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('.homepage__hero-image') as HTMLImageElement;

    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toBe(
      '/assets/images/home-page/carousel/HomePageCoverPhoto-5.webp',
    );
    expect(image.getAttribute('srcset')).toBe(
      '/assets/images/home-page/carousel/HomePageCoverPhoto-5.webp 1920w',
    );
    expect(image.getAttribute('sizes')).toBe('100vw');
    expect(image.getAttribute('width')).toBe('1920');
    expect(image.getAttribute('height')).toBe('1080');
    expect(image.getAttribute('loading')).toBe('eager');
    expect(image.getAttribute('fetchpriority')).toBe('high');
  });

  it('uses real image fallbacks for every carousel slide', () => {
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('.homepage__hero-image') as HTMLImageElement;

    component['setSlide'](1);
    fixture.detectChanges();
    expect(image.getAttribute('src')).toBe(
      '/assets/images/home-page/carousel/HomePageCoverPhoto-2-e1785918980400.webp',
    );

    component['setSlide'](2);
    fixture.detectChanges();
    expect(image.getAttribute('src')).toBe(
      '/assets/images/home-page/carousel/HomePageCoverPhoto-3.webp',
    );
  });

  it('renders featured trip images from local assets', () => {
    fixture.detectChanges();

    const images = [
      ...fixture.nativeElement.querySelectorAll('.featured-trips__image-link img'),
    ] as HTMLImageElement[];

    expect(images.map((image) => image.getAttribute('src'))).toEqual([
      '/assets/images/home-page/trips-carousel/Tour-feature-image-1.webp',
      '/assets/images/home-page/trips-carousel/Tour-feature-image-2.webp',
      '/assets/images/home-page/trips-carousel/Tour-feature-image-3.webp',
    ]);
  });

  it('renders the mission, private tours, and blog sections', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Our mission');
    expect(compiled.textContent).toContain('Private tours');
    expect(compiled.textContent).toContain('Blog Posts');
    expect(compiled.querySelectorAll('.blog-posts__card')).toHaveLength(3);
  });

  it('shows the required error when destination is missing', () => {
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Choose where you want to go.');
  });

  it('shows the required month-only error', () => {
    component['updateMonth']('March');
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Choose a destination to find a trip.');
  });

  it('navigates to the approved destination tour URL', () => {
    const navigateByUrl = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);

    component['updateDestination']('/tour-item/kyrgyzstan-tour/');
    component['submitTripSearch']();

    expect(navigateByUrl).toHaveBeenCalledWith('/tour-item/kyrgyzstan-tour/', {
      state: undefined,
    });
  });
});
