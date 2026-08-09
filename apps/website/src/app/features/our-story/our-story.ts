import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface StoryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  source?: string;
}

interface TeamMember {
  id: string;
  name: string;
  heading: string;
  image: StoryImage;
  paragraphs: readonly string[];
}

const OUR_STORY = {
  id: 'our-story',
  slug: 'our-story',
  title: 'Who we are',
  hero: {
    image: {
      src: '/assets/images/our-story/Our-story-16.webp',
      source: 'https://omayatravel.com/wp-content/uploads/2026/05/Our-story-16.webp',
      alt: 'Omaya Travel founders',
      width: 1600,
      height: 630,
    },
  },
  story: {
    heading: 'Our story',
    lead: "The story of Omaya didn't begin with a business plan. It began with a shared car ride sometime in 2010.",
    paragraphs: [
      'We were both on our way to high school, living in the same neighbourhood and commuting to class each morning. Sharing that ride quickly turned into sharing conversations, ideas, and a growing friendship. Before long, we discovered we had something important in common - a deep curiosity about the world and a desire to explore it.',
      "In our early twenties, that curiosity turned into travel. Not the kind with luxury hotels or big budgets, but the kind where the adventure comes from the journey itself. The trips where you don't need to go far to feel the thrill of discovering something new. Where the plans are simple, the days are spontaneous, and somehow those are the moments you remember most. Those were the trips where we realised just how much travel can shape the way you see the world.",
      'As the years passed, we both found our way into the travel industry, working in different areas and gaining experience from different perspectives. Eventually our paths crossed professionally as well, and we had the chance to work together for a while. That is when we realised that beyond our friendship and love of travel, we also shared the same work ethic and the same vision for how travel should be done - thoughtfully designed journeys, local experiences, and the time to truly enjoy each place.',
      'After years of learning, travelling, and gaining insight into the industry, we remained close friends. So when the idea of creating something of our own began to take shape, it felt like the most natural next step.',
      "And that's how Omaya Travel came to life - built on friendship, shared values, and a love for the kind of travel that stays with you long after the journey ends.",
    ],
  },
  team: {
    heading: 'The Faces Behind the Story',
    members: [
      {
        id: 'vesislava',
        name: 'Vesislava',
        heading: 'Meet Vesislava',
        image: {
          src: '/assets/images/our-story/Vesi.jpg',
          source:
            'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/04/20230305_124001-scaled-500x500.jpg',
          alt: 'Vesislava',
          width: 300,
          height: 300,
        },
        paragraphs: [
          'I hold a degree in Tourism and have spent the past 10+ years working in travel planning and logistics for both leisure and business trips.',
          "I've had the opportunity to organise journeys for travellers from all over the world, making sure every detail is carefully arranged and each trip runs as smoothly as possible.",
          'At Omaya, I bring that same attention to detail into designing journeys that feel seamless for the traveller.',
        ],
      },
      {
        id: 'nesi',
        name: 'Nesi',
        heading: 'Meet Nesi',
        image: {
          src: '/assets/images/our-story/Nesi.webp',
          source: 'https://i0.wp.com/omayatravel.com/wp-content/uploads/2026/03/nesi-500x500.png',
          alt: 'Nesi',
          width: 300,
          height: 300,
        },
        paragraphs: [
          "I've spent years working across different parts of the travel industry - from travel media and hospitality to guiding city tours and organising journeys around the world.",
          "Along the way, I've had the chance to design and lead trips to off-the-beaten-path destinations in the Middle East, West Africa, and South America.",
          'Those experiences shaped the way I believe travel should be done.',
        ],
      },
    ] satisfies readonly TeamMember[],
  },
  tagline: 'See the World. Meet Its People.',
  contact: {
    phoneNumbers: ['+359 88 973 5274', '+359 87 996 5946'],
    email: 'info@omayatravel.com',
  },
  seo: {
    title: 'Our story - Omaya Travel',
  },
  source: {
    legacyUrl: 'https://omayatravel.com/our-story/',
  },
};

@Component({
  selector: 'app-our-story',
  imports: [RouterLink],
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss',
})
export class OurStory {
  protected readonly story = OUR_STORY;
}
