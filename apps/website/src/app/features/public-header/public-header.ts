import { DOCUMENT, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { filter, map, startWith } from 'rxjs';
import {
  PUBLIC_HEADER_LOGO,
  PUBLIC_HEADER_LOGO_SCROLLED_VISUAL_SRC,
  PUBLIC_HEADER_LOGO_VISUAL_SRC,
} from '../../shared/content/homepage-content';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';
import { registerSocialIcons } from '../../shared/icons/social-icons';
import { buildMediaImageAttributes } from '../../shared/media';

const SEARCH_ICON_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path
      d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;

const SOLID_HEADER_PATHS = new Set([
  '/our-story',
  '/your-dmc-partner-in-bulgaria',
  '/contact',
  '/private-tours-your-trip-your-rules/describe',
]);

@Component({
  selector: 'app-public-header',
  imports: [NgClass, RouterLink, MatIconModule],
  templateUrl: './public-header.html',
  styleUrl: './public-header.scss',
})
export class PublicHeader implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly analytics = inject(OmayaAnalytics);
  protected readonly i18n = inject(OmayaI18n);

  protected readonly isScrolled = signal(false);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
  );
  private readonly shouldUseSolidHeader = computed(() =>
    SOLID_HEADER_PATHS.has(this.normalizedPath(this.currentUrl() ?? '/')),
  );
  private readonly isSolidHeader = computed(() => this.isScrolled() || this.shouldUseSolidHeader());
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly navigationGroups = computed(() => this.i18n.navigationGroups());
  protected readonly navigationLinks = computed(() => this.i18n.navigationLinks());
  protected readonly logo = computed(() => {
    const visualSrc =
      this.isSolidHeader() || this.isMobileMenuOpen()
        ? PUBLIC_HEADER_LOGO_SCROLLED_VISUAL_SRC
        : PUBLIC_HEADER_LOGO_VISUAL_SRC;

    return {
      ...buildMediaImageAttributes(PUBLIC_HEADER_LOGO, {
        use: 'thumbnail',
        sizes: '92px',
        widths: [320],
      }),
      src: visualSrc,
      srcset: `${visualSrc} ${PUBLIC_HEADER_LOGO.width}w`,
    };
  });
  protected readonly activeDropdown = signal<string | null>(null);
  protected readonly activeSubmenu = signal<string | null>(null);
  protected readonly isSearchOpen = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly searchError = signal('');
  protected readonly headerClasses = computed(() => ({
    'public-header--scrolled': this.isSolidHeader(),
    'public-header--menu-open': this.isMobileMenuOpen(),
  }));

  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  private lastFocusedElement: HTMLElement | null = null;

  constructor() {
    this.iconRegistry.addSvgIconLiteral(
      'search',
      this.sanitizer.bypassSecurityTrustHtml(SEARCH_ICON_SVG),
    );
    registerSocialIcons(this.iconRegistry, this.sanitizer);
  }

  ngAfterViewInit(): void {
    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrolledState();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.activeDropdown.set(null);
      this.activeSubmenu.set(null);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isSearchOpen()) {
      this.closeSearch();
      return;
    }

    this.activeDropdown.set(null);
    this.activeSubmenu.set(null);
    this.isMobileMenuOpen.set(false);
  }

  protected openDropdown(label: string): void {
    setTimeout(() => this.activeDropdown.set(label), 0);
  }

  protected toggleDropdown(label: string): void {
    this.activeDropdown.update((activeLabel) => {
      const nextLabel = activeLabel === label ? null : label;

      if (nextLabel !== label) {
        this.activeSubmenu.set(null);
      }

      return nextLabel;
    });
  }

  protected openSubmenu(label: string): void {
    this.activeSubmenu.set(label);
  }

  protected ignoreSubmenuClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  protected closeMenus(): void {
    this.activeDropdown.set(null);
    this.activeSubmenu.set(null);
    this.isMobileMenuOpen.set(false);
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
    this.activeDropdown.set(null);
    this.activeSubmenu.set(null);
  }

  protected openSearch(): void {
    this.lastFocusedElement = this.document.activeElement as HTMLElement | null;
    this.isSearchOpen.set(true);
    this.searchError.set('');
    this.analytics.trackEvent('open_search', {
      source: 'header',
    });

    queueMicrotask(() => this.searchInput()?.nativeElement.focus());
  }

  protected closeSearch(): void {
    this.isSearchOpen.set(false);
    this.searchError.set('');
    this.lastFocusedElement?.focus();
  }

  protected updateSearchQuery(value: string): void {
    this.searchQuery.set(value);
    this.searchError.set('');
  }

  protected submitSearch(): void {
    const query = this.searchQuery().trim();

    if (query.length === 0) {
      this.searchError.set(this.i18n.t('header.emptySearch'));
      return;
    }

    this.isSearchOpen.set(false);
    this.analytics.trackEvent('search', {
      search_term: query,
      source: 'header',
    });
    void this.router.navigate(['/search'], {
      queryParams: {
        s: query,
      },
    });
  }

  protected trackContactClick(type: 'phone' | 'social', label: string): void {
    this.analytics.trackEvent(type === 'phone' ? 'click_phone' : 'click_social', {
      label,
      source: 'header',
    });
  }

  private updateScrolledState(): void {
    this.isScrolled.set((this.document.defaultView?.scrollY ?? 0) !== 0);
  }

  private normalizedPath(url: string): string {
    const path = url.split(/[?#]/)[0]?.replace(/\/+$/, '') || '/';

    return path === '' ? '/' : path;
  }
}
