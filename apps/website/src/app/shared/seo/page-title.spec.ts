import { articlePageTitle } from './page-title';

describe('article page titles', () => {
  it('includes the brand when it fits and preserves longer authored headlines', () => {
    expect(articlePageTitle('Bulgaria guide', 'Omaya Travel')).toBe(
      'Bulgaria guide | Omaya Travel',
    );
    const headline = 'A'.repeat(46);
    expect(articlePageTitle(headline, 'Omaya Travel')).toBe(headline);
    expect(articlePageTitle('A'.repeat(45), 'Omaya Travel')).toHaveLength(60);
  });
});
