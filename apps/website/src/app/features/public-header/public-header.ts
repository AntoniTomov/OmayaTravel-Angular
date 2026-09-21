import { DOCUMENT, NgClass, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
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
import { ActiveSite } from '../../../sites/active-site';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { NavigationGroup } from '../../shared/content/homepage-content';
import { LOGO_SRCSETS } from '../../shared/content/tour-web-images';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';
import { registerSocialIcons } from '../../shared/icons/social-icons';

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
  '/omaya-travel-license',
  '/calendar-2027/september',
]);

// The dropdown hangs below a fixed header, so it is capped at the space left under the header and
// scrolls inside itself rather than running off the bottom of a short screen. The gap keeps its
// last item clear of the viewport edge; the floor keeps a few rows reachable on very short screens.
const DROPDOWN_VIEWPORT_GAP = 16;
const DROPDOWN_MIN_HEIGHT = 160;

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
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly activeSite = inject(ActiveSite);
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
  protected readonly navigationGroups = computed(
    () => this.activeSite.site().content.navigationGroups,
  );
  protected readonly navigationLinks = computed(
    () => this.activeSite.site().content.navigationLinks,
  );
  protected readonly contact = computed(() => this.activeSite.site().contact);
  protected readonly searchTitle = computed(
    () => `${this.i18n.t('header.searchTitlePrefix')} ${this.activeSite.site().brand.name}`,
  );
  protected readonly socialLinks = computed(() => this.activeSite.site().socialLinks);
  protected readonly hasTopBarLinks = computed(
    () => this.contact().phoneNumbers.length > 0 || this.socialLinks().length > 0,
  );
  protected readonly logo = computed(() => {
    const brand = this.activeSite.site().brand;
    const solid = this.isSolidHeader() || this.isMobileMenuOpen();
    const visualSrc = solid ? brand.solidLogoSrc : brand.logoSrc;
    const size = solid ? brand.solidLogoSize : brand.logoSize;

    // The logo is 5.8rem wide unless the brand's theme says otherwise, and each pixel ratio picks a
    // lossless copy at its width. The srcset used to describe both logos as 150px wide, when the
    // white file was 100px and the black 400px, and sizes was never bound, so phones stretched the
    // white file. width and height declare the logo file's own shape, which differs between brands
    // and between a brand's two logos.
    return {
      src: visualSrc,
      srcset: LOGO_SRCSETS[visualSrc] ?? visualSrc,
      sizes: brand.headerLogoWidth ?? '5.8rem',
      width: size.width,
      height: size.height,
      alt: brand.logoAlt,
      homeLabel: brand.homeLabel,
      loading: 'eager',
      fetchPriority: 'high',
    };
  });
  protected readonly activeDropdown = signal<string | null>(null);
  protected readonly activeSubmenu = signal<string | null>(null);
  protected readonly isSearchOpen = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly headerClasses = computed(() => ({
    'public-header--scrolled': this.isSolidHeader(),
    'public-header--menu-open': this.isMobileMenuOpen(),
    'public-header--search-open': this.isSearchOpen(),
  }));

  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  private readonly headerElement = viewChild<ElementRef<HTMLElement>>('headerElement');
  private lastFocusedElement: HTMLElement | null = null;

  constructor() {
    this.iconRegistry.addSvgIconLiteral(
      'search',
      this.sanitizer.bypassSecurityTrustHtml(SEARCH_ICON_SVG),
    );
    registerSocialIcons(this.iconRegistry, this.sanitizer);
  }

  ngAfterViewInit(): void {
    this.updateDropdownMaxHeight();
    this.updateScrolledState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrolledState();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateDropdownMaxHeight();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (
      this.isSearchOpen() &&
      !target?.closest('.public-header__search-panel') &&
      !target?.closest('.public-header__search-button')
    ) {
      this.closeSearch();
      return;
    }

    if (!this.host.nativeElement.contains(event.target as Node)) {
      this.activeDropdown.set(null);
      this.activeSubmenu.set(null);
      this.isMobileMenuOpen.set(false);
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

  protected openDropdownOnHover(event: PointerEvent, label: string): void {
    if (event.pointerType !== 'mouse') {
      return;
    }

    this.openDropdown(label);
  }

  protected closeDropdownOnHover(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      return;
    }

    this.closeDropdown();
  }

  private openDropdown(label: string): void {
    this.updateDropdownMaxHeight();

    setTimeout(() => {
      if (this.activeDropdown() !== label) {
        this.activeSubmenu.set(null);
      }

      this.activeDropdown.set(label);
    }, 0);
  }

  private closeDropdown(): void {
    this.activeDropdown.set(null);
    this.activeSubmenu.set(null);
  }

  protected toggleDropdown(label: string): void {
    this.updateDropdownMaxHeight();

    this.activeDropdown.update((activeLabel) => {
      const nextLabel = activeLabel === label ? null : label;

      if (nextLabel !== label) {
        this.activeSubmenu.set(null);
      }

      return nextLabel;
    });
  }

  // Asked per group by the template: a dropdown whose items fly a submenu out sideways must not
  // become a scroll container, or the flyout is clipped at its edge.
  protected hasFlyoutSubmenu(group: NavigationGroup): boolean {
    return group.links.some((link) => (link.children?.length ?? 0) > 0);
  }

  protected openSubmenuOnHover(event: PointerEvent, label: string): void {
    if (event.pointerType !== 'mouse') {
      return;
    }

    this.openSubmenu(label);
  }

  protected closeSubmenuOnHover(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      return;
    }

    this.closeSubmenu();
  }

  private openSubmenu(label: string): void {
    this.activeSubmenu.set(label);
  }

  private closeSubmenu(): void {
    this.activeSubmenu.set(null);
  }

  protected toggleSubmenu(label: string, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.activeSubmenu.update((activeLabel) => (activeLabel === label ? null : label));
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
    this.closeMenus();
    this.isSearchOpen.set(true);
    this.analytics.trackEvent('open_search', {
      source: 'header',
    });

    queueMicrotask(() => this.searchInput()?.nativeElement.focus());
  }

  protected closeSearch(): void {
    this.isSearchOpen.set(false);
    this.lastFocusedElement?.focus();
  }

  protected updateSearchQuery(value: string): void {
    this.searchQuery.set(value);
  }

  protected submitSearch(): void {
    const query = this.searchQuery().trim();

    if (query.length === 0) {
      this.closeSearch();
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

  private updateDropdownMaxHeight(): void {
    const view = this.document.defaultView;
    const header = this.headerElement()?.nativeElement;

    if (!this.isBrowser || !view || !header) {
      return;
    }

    const spaceBelowHeader =
      view.innerHeight - header.getBoundingClientRect().bottom - DROPDOWN_VIEWPORT_GAP;

    if (!Number.isFinite(spaceBelowHeader)) {
      return;
    }

    header.style.setProperty(
      '--public-header-dropdown-max-height',
      `${Math.max(spaceBelowHeader, DROPDOWN_MIN_HEIGHT)}px`,
    );
  }

  private normalizedPath(url: string): string {
    const path = url.split(/[?#]/)[0]?.replace(/\/+$/, '') || '/';

    return path === '' ? '/' : path;
  }

  protected phoneHref(phoneNumber: string): string {
    return `tel:${phoneNumber.replace(/[^\d+]/g, '')}`;
  }
}
