import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { ActiveSite } from '../../../sites/active-site';
import { GoogleAnalytics, consentState, toGa4SafeParams } from './google-analytics';

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

describe('consentState', () => {
  it('moves all four Consent Mode v2 signals together', () => {
    expect(consentState(true)).toEqual({
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });
    expect(consentState(false)).toEqual({
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  });
});

describe('GoogleAnalytics consent signalling', () => {
  let calls: unknown[][];
  let analytics: GoogleAnalytics;

  beforeEach(() => {
    calls = [];
    window.gtag = ((...args: unknown[]) => calls.push(args)) as Window['gtag'];
    window.dataLayer = [];
    document.getElementById('google-analytics-gtag')?.remove();

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActiveSite,
          useValue: { site: () => ({ analytics: { gaMeasurementId: 'G-TEST' } }) },
        },
      ],
    });
    analytics = TestBed.inject(GoogleAnalytics);
  });

  afterEach(() => {
    window.gtag = undefined;
    document.getElementById('google-analytics-gtag')?.remove();
  });

  const consentCalls = () => calls.filter(([command]) => command === 'consent');

  it('sends nothing to gtag until an event is tracked', () => {
    analytics.setConsent(true);

    expect(calls).toEqual([]);
  });

  it('declares consent as denied, then granted, before config', () => {
    analytics.trackEvent('select_item', { source: 'header' });

    const commands = calls.map(([command, target]) => `${command}:${String(target)}`);

    expect(commands.slice(0, 4)).toEqual([
      'js:' + String(calls[0][1]),
      'consent:default',
      'consent:update',
      'config:G-TEST',
    ]);
    expect(consentCalls()[0][2]).toEqual(consentState(false));
    expect(consentCalls()[1][2]).toEqual(consentState(true));
  });

  it('denies all signals when consent is withdrawn and grants them again on re-accept', () => {
    analytics.trackEvent('select_item');
    analytics.setConsent(false);
    analytics.setConsent(true);

    const updates = consentCalls().filter(([, target]) => target === 'update');

    expect(updates.map(([, , state]) => state)).toEqual([
      consentState(true),
      consentState(false),
      consentState(true),
    ]);
  });

  it('does not repeat an update that changes nothing', () => {
    analytics.trackEvent('select_item');
    analytics.setConsent(true);

    expect(consentCalls().filter(([, target]) => target === 'update').length).toBe(1);
  });
});
