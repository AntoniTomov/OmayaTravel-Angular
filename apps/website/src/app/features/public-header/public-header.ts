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
import { Router, RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {
  PUBLIC_NAVIGATION_GROUPS,
  PUBLIC_NAVIGATION_LINKS,
  PUBLIC_HEADER_LOGO,
  PUBLIC_HEADER_LOGO_SCROLLED_VISUAL_SRC,
  PUBLIC_HEADER_LOGO_VISUAL_SRC,
} from '../../shared/content/homepage-content';
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

  protected readonly isScrolled = signal(false);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly navigationGroups = PUBLIC_NAVIGATION_GROUPS;
  protected readonly navigationLinks = PUBLIC_NAVIGATION_LINKS;
  protected readonly logo = computed(() => {
    const visualSrc =
      this.isScrolled() || this.isMobileMenuOpen()
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
  protected readonly isSearchOpen = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly searchError = signal('');
  protected readonly headerClasses = computed(() => ({
    'public-header--scrolled': this.isScrolled(),
    'public-header--menu-open': this.isMobileMenuOpen(),
  }));

  private readonly searchInput = viewChild<ElementRef<HTMLInputElement>>('searchInput');
  private lastFocusedElement: HTMLElement | null = null;

  constructor() {
    this.iconRegistry.addSvgIconLiteral(
      'search',
      this.sanitizer.bypassSecurityTrustHtml(SEARCH_ICON_SVG),
    );
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
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isSearchOpen()) {
      this.closeSearch();
      return;
    }

    this.activeDropdown.set(null);
    this.isMobileMenuOpen.set(false);
  }

  protected openDropdown(label: string): void {
    this.activeDropdown.set(label);
  }

  protected toggleDropdown(label: string): void {
    this.activeDropdown.update((activeLabel) => (activeLabel === label ? null : label));
  }

  protected closeMenus(): void {
    this.activeDropdown.set(null);
    this.isMobileMenuOpen.set(false);
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
    this.activeDropdown.set(null);
  }

  protected openSearch(): void {
    this.lastFocusedElement = this.document.activeElement as HTMLElement | null;
    this.isSearchOpen.set(true);
    this.searchError.set('');

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
      this.searchError.set('Type a search term.');
      return;
    }

    this.isSearchOpen.set(false);
    void this.router.navigate(['/search'], {
      queryParams: {
        s: query,
      },
    });
  }

  private updateScrolledState(): void {
    this.isScrolled.set(this.document.defaultView?.scrollY !== 0);
  }
}
