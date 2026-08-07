import { Component } from '@angular/core';

interface TravelMatchFeature {
  icon: 'people' | 'globe' | 'luggage' | 'guide';
  title: string;
  description: string;
}

@Component({
  selector: 'app-travel-match',
  templateUrl: './travel-match.html',
  styleUrl: './travel-match.scss',
})
export class TravelMatch {
  protected readonly features: readonly TravelMatchFeature[] = [
    {
      icon: 'people',
      title: 'Travel with people your age',
      description: 'People in their 20-45s who are genuinely curious about where they are.',
    },
    {
      icon: 'globe',
      title: 'Carefully Crafted Journeys',
      description:
        'Each itinerary is designed to blend iconic highlights with cultural local experiences.',
    },
    {
      icon: 'luggage',
      title: 'Small groups',
      description:
        'With intentionally small groups, our journeys allow for better connections with people and places',
    },
    {
      icon: 'guide',
      title: 'Experienced team',
      description:
        'From booking to the journey itself, our experienced team and local guides ensure everything runs smoothly.',
    },
  ];
}
