import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FlipCard {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  paragraphs: readonly string[];
}

const WHY_BOOK_WITH_US = {
  title: 'Why book with us?',
  hero: {
    image: {
      src: '/assets/images/why-book-with-us/background.webp',
      alt: 'Small group of travellers standing on a vehicle at sunset',
      width: 1600,
      height: 768,
    },
  },
  introduction: [
    'We believe that good travel rarely happens by accident.',
    "It's the result of thoughtful planning, the right balance of experiences, and the people behind your trip - from the first email exchange to the local guides who bring each place to life.",
    "At Omaya, we design journeys with care, combining the places you've always wanted to see with experiences that help you understand a destination more deeply.",
  ],
  cards: [
    {
      id: 'small-groups',
      title: 'Small Groups, Better Experiences',
      image: {
        src: '/assets/images/why-book-with-us/card-1.webp',
        alt: 'Small group listening to a guide in the mountains',
        width: 462,
        height: 308,
      },
      paragraphs: [
        'All our journeys are designed for small groups. This creates a more personal and relaxed travel experience and allows for meaningful interactions with the places and people you encounter.',
        "Smaller groups also make it possible to visit places that larger tours simply can't - from family-run restaurants to small cultural workshops and local homes.",
      ],
    },
    {
      id: 'itineraries',
      title: 'Thoughtfully Designed Itineraries',
      image: {
        src: '/assets/images/why-book-with-us/card-2.webp',
        alt: 'Travel planning with a map and packed bags',
        width: 462,
        height: 308,
      },
      paragraphs: [
        "A good journey isn't about seeing as many places as possible in a day. It's about creating the right balance.",
        'Our itineraries combine iconic landmarks with lesser-known experiences, giving you a deeper understanding of the destination while still visiting the places that make it special.',
      ],
    },
    {
      id: 'experience',
      title: 'Experience You Can Rely On',
      image: {
        src: '/assets/images/why-book-with-us/card-3.webp',
        alt: 'Travel specialists reviewing a planned itinerary',
        width: 462,
        height: 308,
      },
      paragraphs: [
        'Our team has 12+ years working in the travel industry, organising journeys in destinations around the world and working with travellers from many different countries.',
        'This experience has shaped how we design our trips today - with attention to detail, reliable local partners, and a deep understanding of what makes a journey both smooth and memorable.',
      ],
    },
    {
      id: 'people',
      title: 'The People Behind Your Journey',
      image: {
        src: '/assets/images/why-book-with-us/card-4.webp',
        alt: 'Local guide speaking to travellers in a forest',
        width: 462,
        height: 308,
      },
      paragraphs: [
        'Travel is shaped by the people who make it happen.',
        'From your first conversation with us to the local guides who welcome you at each destination, we work with passionate professionals who take pride in sharing their culture and knowledge.',
      ],
    },
  ] satisfies readonly FlipCard[],
  closing: "If that sounds like your kind of journey, we'd love to travel with you.",
};

@Component({
  selector: 'app-why-book-with-us',
  imports: [RouterLink],
  templateUrl: './why-book-with-us.html',
  styleUrl: './why-book-with-us.scss',
})
export class WhyBookWithUs {
  protected readonly content = WHY_BOOK_WITH_US;
}
