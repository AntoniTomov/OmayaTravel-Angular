import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface PublicBreadcrumb {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-public-breadcrumbs',
  imports: [RouterLink],
  template: `
    <nav aria-label="Breadcrumb">
      <ol>
        @for (entry of entries(); track $index; let last = $last) {
          <li>
            @if (entry.path && !last) {
              <a [routerLink]="entry.path">{{ entry.label }}</a>
            } @else {
              <span [attr.aria-current]="last ? 'page' : null">{{ entry.label }}</span>
            }
          </li>
        }
      </ol>
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    ol {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 0.875rem;
      line-height: 1.6;
    }
    li {
      display: inline;
      overflow-wrap: anywhere;
    }
    li + li::before {
      content: '/';
      margin-right: 0.5rem;
      opacity: 0.55;
    }
    a {
      color: inherit;
      text-underline-offset: 0.2em;
    }
  `,
})
export class PublicBreadcrumbs {
  readonly entries = input.required<readonly PublicBreadcrumb[]>();
}
