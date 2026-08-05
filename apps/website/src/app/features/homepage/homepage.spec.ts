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
      'https://omayatravel.com/wp-content/uploads/2026/04/HomePageCoverPhoto-5.webp',
    );
    expect(image.getAttribute('srcset')).toBe(
      'https://omayatravel.com/wp-content/uploads/2026/04/HomePageCoverPhoto-5.webp 1920w',
    );
    expect(image.getAttribute('sizes')).toBe('100vw');
    expect(image.getAttribute('width')).toBe('1920');
    expect(image.getAttribute('height')).toBe('1080');
    expect(image.getAttribute('loading')).toBe('eager');
    expect(image.getAttribute('fetchpriority')).toBe('high');
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
