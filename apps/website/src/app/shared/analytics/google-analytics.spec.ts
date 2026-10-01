import { describe, expect, it } from 'vitest';

import { toGa4SafeParams } from './google-analytics';

describe('toGa4SafeParams', () => {
  it('renames source to click_location and keeps the value', () => {
    expect(toGa4SafeParams({ item_id: 'a', source: 'featured_trips' })).toEqual({
      item_id: 'a',
      click_location: 'featured_trips',
    });
  });

  it('prefixes the other reserved traffic-source names', () => {
    const reserved = [
      'medium',
      'campaign',
      'term',
      'content',
      'campaign_id',
      'campaign_source',
      'campaign_medium',
      'campaign_name',
      'campaign_term',
      'campaign_content',
    ];

    for (const key of reserved) {
      expect(toGa4SafeParams({ [key]: 'x' })).toEqual({ [`ui_${key}`]: 'x' });
    }
  });

  it('leaves other params, including search_term, untouched', () => {
    const params = { form_type: 'enquiry', search_term: 'peru', value: 3 };

    expect(toGa4SafeParams(params)).toEqual(params);
  });

  it('does not mutate the input, so Meta Pixel still sees source', () => {
    const params = { source: 'header' };

    toGa4SafeParams(params);

    expect(params).toEqual({ source: 'header' });
  });
});
