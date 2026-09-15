import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, RouterLink, UrlSerializer } from '@angular/router';

import { appConfig } from '../../app.config';
import { TrailingSlashUrlSerializer } from './trailing-slash-url-serializer';

@Component({
  template: `
    <a routerLink="/tours-list/">Slashed</a>
    <a routerLink="/destinations/bulgaria">Unslashed</a>
    <a routerLink="/destinations/bulgaria" fragment="destination-tours">Fragment</a>
    <a routerLink="/search" [queryParams]="{ q: 'rila' }">Query</a>
    <a routerLink="/">Home</a>
  `,
  imports: [RouterLink],
})
class LinksHost {}

@Component({ template: '' })
class Blank {}

describe('TrailingSlashUrlSerializer', () => {
  it('writes public URLs out with the trailing slash the server treats as canonical', () => {
    const serializer = new TrailingSlashUrlSerializer();
    const urls = [
      '/',
      '/destinations/bulgaria',
      '/destinations/bulgaria/',
      '/search?q=rila',
      '/destinations/bulgaria#destination-tours',
      '/robots.txt',
      '/api/newsletter',
    ];

    expect(urls.map((url) => serializer.serialize(serializer.parse(url)))).toEqual([
      '/',
      '/destinations/bulgaria/',
      '/destinations/bulgaria/',
      '/search/?q=rila',
      '/destinations/bulgaria/#destination-tours',
      '/robots.txt',
      '/api/newsletter',
    ]);
  });

  it('renders every internal link on its canonical URL', () => {
    TestBed.configureTestingModule({
      imports: [LinksHost],
      providers: [
        provideRouter([]),
        { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer },
      ],
    });
    const fixture = TestBed.createComponent(LinksHost);
    fixture.detectChanges();

    const hrefs = [...fixture.nativeElement.querySelectorAll('a')].map((link: HTMLAnchorElement) =>
      link.getAttribute('href'),
    );

    expect(hrefs).toEqual([
      '/tours-list/',
      '/destinations/bulgaria/',
      '/destinations/bulgaria/#destination-tours',
      '/search/?q=rila',
      '/',
    ]);
  });

  it('keeps the slash in the address after navigating', async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', component: Blank }]),
        { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer },
      ],
    });
    const router = TestBed.inject(Router);
    // Location.path() strips trailing slashes when it reads, so read what was written to history.
    const history = TestBed.inject(LocationStrategy);
    const paths: string[][] = [];

    await router.navigateByUrl('/destinations/bulgaria/');
    paths.push([router.url, history.path()]);
    await router.navigateByUrl('/tour-item/bulgaria-beyond-the-ordinary');
    paths.push([router.url, history.path()]);

    expect(paths).toEqual([
      ['/destinations/bulgaria/', '/destinations/bulgaria/'],
      ['/tour-item/bulgaria-beyond-the-ordinary/', '/tour-item/bulgaria-beyond-the-ordinary/'],
    ]);
  });

  it('is the serializer the app provides', () => {
    const provided = appConfig.providers.some(
      (provider) =>
        typeof provider === 'object' &&
        provider !== null &&
        'provide' in provider &&
        provider.provide === UrlSerializer &&
        'useClass' in provider &&
        provider.useClass === TrailingSlashUrlSerializer,
    );

    expect(provided).toBe(true);
  });
});
