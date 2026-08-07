import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { PublicHeader } from './public-header';

describe('PublicHeader', () => {
  let fixture: ComponentFixture<PublicHeader>;
  let component: PublicHeader;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicHeader],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicHeader);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('renders approved primary navigation labels', () => {
    fixture.detectChanges();

    const text = fixture.nativeElement.textContent as string;

    expect(text).toContain('Destinations');
    expect(text).toContain('Tours');
    expect(text).toContain('About Us');
    expect(text).toContain('Inspiring Stories');
    expect(text).toContain('Enquire Now');
  });

  it('renders an image-ready logo from the media contract', () => {
    fixture.detectChanges();

    const logo = fixture.nativeElement.querySelector(
      '.public-header__logo img',
    ) as HTMLImageElement;

    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toBe(
      '/assets/images/home-page/company-logo/Omaya-Travel-Logo-e1780484928941.webp',
    );
    expect(logo.getAttribute('srcset')).toBe(
      '/assets/images/home-page/company-logo/Omaya-Travel-Logo-e1780484928941.webp 150w',
    );
    expect(logo.getAttribute('alt')).toBe('Omaya Travel');
    expect(logo.getAttribute('width')).toBe('150');
    expect(logo.getAttribute('height')).toBe('84');
  });

  it('switches to the dark current-site logo in the scrolled header state', () => {
    fixture.detectChanges();

    component['isScrolled'].set(true);
    fixture.detectChanges();

    const logo = fixture.nativeElement.querySelector(
      '.public-header__logo img',
    ) as HTMLImageElement;

    expect(logo.getAttribute('src')).toBe(
      '/assets/images/home-page/company-logo/Black_logo-e1781169999413.webp',
    );
  });

  it('opens the site search and validates empty submit', () => {
    component['openSearch']();
    fixture.detectChanges();

    component['submitSearch']();
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Type a search term.');
  });

  it('submits header search to the static search route', () => {
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);

    component['updateSearchQuery']('  song kul  ');
    component['submitSearch']();

    expect(navigate).toHaveBeenCalledWith(['/search'], {
      queryParams: {
        s: 'song kul',
      },
    });
  });
});
