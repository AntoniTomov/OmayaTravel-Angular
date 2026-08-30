import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

const DMC_PAGE = {
  intro: {
    image: {
      src: '/assets/images/dmc-partner-bulgaria/Bring-us-the-idea-image.webp',
      alt: 'Travellers entering Belogradchik Fortress in Bulgaria',
      width: 638,
      height: 638,
    },
    heading: "Bring us the idea. We'll bring it to life in Bulgaria.",
    text: 'Omaya Travel is your DMC partner in Bulgaria - a licensed operator building fully custom itineraries for tour operators, travel agencies, and companies bringing groups to Bulgaria, from tightly-themed niche trips to complex, multi-region routes. Behind our own small-group journeys is a team that genuinely loves solving the puzzle of a great itinerary, no matter how specific or ambitious the brief. If you can imagine it, we want the challenge of building it.',
  },
  benefits: [
    {
      icon: 'extension',
      title: 'Fully custom, every time',
      text: "No fixed templates - each itinerary is built from scratch around your group's brief.",
    },
    {
      icon: 'shield',
      title: 'Licensed & fully insured',
      text: 'Registered Bulgarian tour operator (PK-01-8706), EU-compliant travel insurance - your trusted DMC partner in Bulgaria.',
    },
    {
      icon: 'public',
      title: 'Local knowledge, deeply rooted',
      text: "Years of building our own tours across Bulgaria's cities, mountains, and villages.",
    },
  ],
  faq: [
    {
      question: 'How unusual or specific can our request be?',
      answer:
        "Omaya designs fully custom itineraries, so your request can be as specific as you like. We'd genuinely rather hear an ambitious or unusual brief than a generic one - niche interests, tight themes, or unconventional routes are exactly the kind of challenge we enjoy working through.",
    },
    {
      question: 'Do you work from set packages, or build from scratch?',
      answer:
        "We build every itinerary from scratch rather than working from a fixed catalogue. Each one is designed around your group's brief, interests, and timeline.",
    },
    {
      question: "What if we're not sure exactly what we want yet?",
      answer:
        "That's a completely normal starting point, and Omaya can help shape a loose idea into a concrete itinerary. Bring us the feeling or theme you're going for, and we'll work out the details with you.",
    },
    {
      question: 'Is Omaya a licensed tour operator?',
      answer:
        'Yes, Omaya Travel is a fully registered and licensed tour operator in Bulgaria (license PK-01-8706), holding full travel insurance in compliance with EU travel regulations - which is exactly why tour operators and agencies choose us as their DMC partner in Bulgaria.',
    },
    {
      question: 'Which regions can you cover?',
      answer:
        "Our core focus is Bulgaria and the wider Balkans, with local knowledge built through years of running our own tours across the country's cities, mountains, and villages.",
    },
  ],
};

@Component({
  selector: 'app-dmc-partner-bulgaria',
  imports: [RouterLink, MatIconModule],
  templateUrl: './dmc-partner-bulgaria.html',
  styleUrl: './dmc-partner-bulgaria.scss',
})
export class DmcPartnerBulgaria {
  protected readonly content = DMC_PAGE;
  protected readonly openFaqIndex = signal<number | null>(null);

  protected toggleFaq(index: number, event: Event): void {
    const details = event.currentTarget as HTMLDetailsElement;

    this.openFaqIndex.set(
      details.open ? index : this.openFaqIndex() === index ? null : this.openFaqIndex(),
    );
  }
}
