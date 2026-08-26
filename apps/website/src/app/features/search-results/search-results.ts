import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ActiveSite } from '../../../sites/active-site';
import { SearchIndexItem } from '../../shared/content/homepage-content';
import { buildMediaImageAttributes } from '../../shared/media';

@Component({
  selector: 'app-search-results',
  imports: [RouterLink, MatIconModule],
  templateUrl: './search-results.html',
  styleUrl: './search-results.scss',
})
export class SearchResults {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly activeSite = inject(ActiveSite);

  protected readonly query = signal(this.route.snapshot.queryParamMap.get('s')?.trim() ?? '');
  protected readonly draftQuery = signal(this.query());
  protected readonly error = signal('');
  protected readonly results = computed(() => {
    const query = this.query().toLowerCase();

    if (!query) {
      return [];
    }

    return this.activeSite
      .site()
      .content.searchIndex.filter((item) =>
        [item.title, item.type, item.excerpt].some((value) => value.toLowerCase().includes(query)),
      );
  });

  protected readonly title = computed(() =>
    this.query() ? `Search results for: ${this.query()}` : 'Search Omaya Travel',
  );

  protected updateDraftQuery(value: string): void {
    this.draftQuery.set(value);
    this.error.set('');
  }

  protected submitSearch(): void {
    const query = this.draftQuery().trim();

    if (!query) {
      this.error.set('Type a search term.');
      return;
    }

    this.query.set(query);
    void this.router.navigate(['/search'], {
      queryParams: {
        s: query,
      },
      replaceUrl: true,
    });
  }

  protected thumbnailSrc(item: SearchIndexItem): string | null {
    if (!item.thumbnail) {
      return null;
    }

    return buildMediaImageAttributes(item.thumbnail, {
      use: 'thumbnail',
      sizes: '96px',
    }).src;
  }
}
