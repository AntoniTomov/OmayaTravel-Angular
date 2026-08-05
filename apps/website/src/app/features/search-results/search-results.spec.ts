import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter, Router } from '@angular/router';

import { SearchResults } from './search-results';

describe('SearchResults', () => {
  it('renders static search results for a query', async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResults],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({ s: 'kyr' }),
            },
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(SearchResults);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Search results for: kyr');
    expect(fixture.nativeElement.textContent).toContain('Kyrgyzstan Discovery Tour');
  });

  it('keeps empty submissions in place with the approved error', async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResults],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({}),
            },
          },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(SearchResults);
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Type a search term.');
  });

  it('submits non-empty trimmed queries to the static search route', async () => {
    await TestBed.configureTestingModule({
      imports: [SearchResults],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({}),
            },
          },
        },
      ],
    }).compileComponents();

    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(SearchResults);
    const component = fixture.componentInstance;

    component['updateDraftQuery']('  morocco  ');
    component['submitSearch']();

    expect(navigate).toHaveBeenCalledWith(['/search'], {
      queryParams: {
        s: 'morocco',
      },
      replaceUrl: true,
    });
  });
});
