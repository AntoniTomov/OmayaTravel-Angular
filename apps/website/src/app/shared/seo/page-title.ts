/** Keep article metadata and validation on the same title formatting rule. */
export function articlePageTitle(title: string, brand: string): string {
  const branded = `${title} | ${brand}`;
  return branded.length <= 60 ? branded : title;
}
