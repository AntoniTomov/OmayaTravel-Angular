import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const SOCIAL_INSTAGRAM_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141Zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7Zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8Zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8ZM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1Z"/>
  </svg>
`;

const SOCIAL_FACEBOOK_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
    <path d="M279.14 288 292 205.8h-78.9v-53.4c0-22.5 11-44.4 46.3-44.4H296V38.1S263.1 32 231.7 32c-65.5 0-108.3 39.7-108.3 111.6v62.2H50.7V288h72.7v192h89.7V288h66Z"/>
  </svg>
`;

const SOCIAL_LINKEDIN_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88V448ZM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3ZM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448Z"/>
  </svg>
`;

export function registerSocialIcons(
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer,
): void {
  iconRegistry.addSvgIconLiteral(
    'social-instagram',
    sanitizer.bypassSecurityTrustHtml(SOCIAL_INSTAGRAM_SVG),
  );
  iconRegistry.addSvgIconLiteral(
    'social-facebook',
    sanitizer.bypassSecurityTrustHtml(SOCIAL_FACEBOOK_SVG),
  );
  iconRegistry.addSvgIconLiteral(
    'social-linkedin',
    sanitizer.bypassSecurityTrustHtml(SOCIAL_LINKEDIN_SVG),
  );
}
