export const SITE = {
  name: 'Redwood Summit',
  domain: 'redwoodsummit.nz',
  url: 'https://redwoodsummit.nz',
  tagline: 'The Luxury Hub for Rotorua Mountain Biking',
  subTagline: 'Premium Mountain Bike Lodge next to the Redwood Forest',
  description:
    'Redwood Summit is a premium short-term rental lodge in Rotorua, New Zealand — built for mountain bikers, directly next to the Whakarewarewa Redwoods trail network. Secure bike vault, wash station, hot spa recovery, forest views, sleeps 8+. Opening 2027.',
  mailto: 'hello@redwoodsummit.nz',
  location: {
    locality: 'Rotorua',
    region: 'Bay of Plenty',
    country: 'NZ',
    // Approximate Whakarewarewa Forest coords — update with real property coords once surveyed
    lat: -38.1595,
    lng: 176.2666,
  },
  gaMeasurementId: 'G-CNBMJG5T1L',
  // Opening window — update as construction progresses
  openingYear: 2027,
};

export const PROPERTIES = [
  {
    slug: 'the-lodge',
    name: 'Redwood Summit Lodge',
    tier: 'Premium',
    tagline: 'Built for mountain bike crews, pro riders, and teams.',
    sleeps: '8+',
    summary:
      'The flagship residence at Redwood Summit. Designed around the ride — secure bike vault, workshop-grade wash bay, hot spa recovery lounge, and forest-framed living spaces that sleep a full crew in comfort.',
    audience: 'MTB enthusiasts, teams, crews of friends',
  },
  {
    slug: 'the-cottage',
    name: 'Redwood Summit Cottage',
    tier: 'Family',
    tagline: 'A calmer retreat for families visiting the Redwoods.',
    sleeps: '4-6',
    summary:
      'Our second property at Redwood Summit — a more family-oriented residence with the same direct forest access, designed for relaxed stays and shared time in one of New Zealand’s most iconic forests.',
    audience: 'Families and smaller groups',
  },
] as const;
