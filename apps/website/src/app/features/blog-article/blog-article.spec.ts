import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { BlogArticle } from './blog-article';

describe('BlogArticle discovery links', () => {
  const cases = [
    {
      article: 'morocco-casablanca-marrakech-route-guide',
      country: 'morocco',
      tours: [
        'morocco-tour',
        'tour-item-morocco-solo-travellers-tour',
        'tour-item-morocco-women-only-tour',
      ],
    },
    {
      article: 'women-only-kyrgyzstan-what-to-expect',
      country: 'kyrgyzstan',
      tours: ['kyrgyzstan-tour', 'women-only-tour-kyrgyzstan'],
    },
    {
      article: 'song-kul-yurt-stay-packing-guide',
      country: 'kyrgyzstan',
      tours: ['kyrgyzstan-tour', 'women-only-tour-kyrgyzstan'],
    },
    {
      article: 'bulgaria-classic-women-only-tour-comparison',
      country: 'bulgaria',
      tours: ['bulgaria-beyond-the-ordinary', 'women-only-tour-bulgaria'],
    },
    {
      article: '10-unmissable-places-to-visit-on-your-bulgaria-trip',
      country: 'bulgaria',
      tours: ['bulgaria-beyond-the-ordinary', 'women-only-tour-bulgaria'],
    },
    {
      article: 'the-complete-visitor-guide-to-rila-monastery',
      country: 'bulgaria',
      tours: ['bulgaria-beyond-the-ordinary', 'women-only-tour-bulgaria'],
    },
    {
      article: 'how-to-visit-song-kul-lake-in-kyrgyzstan',
      country: 'kyrgyzstan',
      tours: ['kyrgyzstan-tour', 'women-only-tour-kyrgyzstan'],
    },
    {
      article: 'tassili-najjer-national-park-algeria-guide',
      country: 'algeria',
      tours: ['algeria-desert-expedition-tadrart-rouge'],
    },
  ];

  it('links each article to its country and relevant tours without suggesting itself', async () => {
    const routeData = new BehaviorSubject({ articleSlug: cases[0].article });
    TestBed.configureTestingModule({
      imports: [BlogArticle],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { data: routeData, snapshot: { data: routeData.value } },
        },
      ],
    });
    const fixture = TestBed.createComponent(BlogArticle);

    for (const item of cases) {
      routeData.next({ articleSlug: item.article });
      fixture.detectChanges();
      await fixture.whenStable();
      const page = fixture.nativeElement as HTMLElement;
      const links = Array.from(page.querySelectorAll('.blog-article__journeys a'));
      expect(links.map((link) => link.getAttribute('href'))).toEqual([
        `/destinations/${item.country}/`,
        ...item.tours.map((slug) => `/tour-item/${slug}/`),
      ]);
      expect(links.every((link) => !!link.textContent?.trim())).toBe(true);
      const suggestions = Array.from(page.querySelectorAll('.blog-article__suggestion'));
      expect(suggestions).toHaveLength(3);
      expect(suggestions.map((link) => link.getAttribute('href'))).not.toContain(
        `/${item.article}`,
      );
      expect(page.querySelector('h1')).toBeTruthy();
      expect(page.querySelectorAll('h1')).toHaveLength(1);
      if (item.article === 'the-complete-visitor-guide-to-rila-monastery') {
        expect(suggestions[0].getAttribute('href')).toBe(
          '/bulgaria-classic-women-only-tour-comparison',
        );
      }
    }

    routeData.next({ articleSlug: 'not-an-article' });
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.blog-article__journeys')).toBeNull();
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toBe('Article not found');
  });
});
