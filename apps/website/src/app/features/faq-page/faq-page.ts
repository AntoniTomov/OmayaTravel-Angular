import { Component } from '@angular/core';

interface FaqRule {
  period: string;
  policy: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: readonly string[];
  rules?: readonly FaqRule[];
  notes?: readonly string[];
}

const FAQ_PAGE = {
  title: 'Frequently Asked Questions',
  intro: {
    heading: 'Your Journey, Simplified.',
    text: 'Got questions about your upcoming adventure? Our FAQ section covers the essentials: booking confirmations, cancellation policies, visa requirements, and packing essentials. Find the quick answers you need to get your bags packed and your itinerary set.',
  },
  items: [
    {
      id: 'why-travel-with-omaya',
      question: 'Why should I travel with Omaya?',
      answer: [
        'At Omaya, we believe that memorable travel rarely happens by accident. Exceptional journeys come from thoughtful planning, a balance of experiences, and the people who bring your trip to life - from the first email exchange to the local guides who show you the heart of each destination.',
        "We design trips with care, blending the iconic places you've always dreamed of visiting with meaningful experiences that let you understand a destination on a deeper level. With Omaya, travel isn't just about seeing the world - it's about truly experiencing it.",
      ],
    },
    {
      id: 'accreditation',
      question: 'What accreditation does Omaya have?',
      answer: [
        'Omaya Travel is a professionally registered travel company (License PK-18706), operating under applicable Bulgarian and EU travel regulations. We work with accredited local partners and suppliers across all our destinations to ensure the highest standards of service, safety, and authenticity.',
      ],
    },
    {
      id: 'tour-leaders',
      question: 'Who runs your tours and are they experts in their fields?',
      answer: [
        'Our tours are led by carefully selected local guides and travel specialists who are experts in their fields. Each guide brings deep knowledge, personal experience, and a passion for their region, ensuring that every journey is informative, engaging, and authentic. At Omaya, we believe the people behind your trip make all the difference - and our team is dedicated to bringing each destination to life.',
      ],
    },
    {
      id: 'authentic-cultural-experiences',
      question: 'How do you ensure authentic cultural experiences?',
      answer: [
        'At Omaya, authenticity is at the heart of every journey. We partner with local experts, artisans, and communities to create experiences that go beyond typical sightseeing. From hands-on workshops and home visits to guided tours led by knowledgeable locals, we design trips that let you truly connect with the culture, traditions, and stories of each destination.',
      ],
    },
    {
      id: 'traveller-type',
      question: 'What type of traveller can join the tours?',
      answer: [
        "Omaya welcomes travellers of all ages and interests who are curious, open-minded, and eager to explore. Our tours are designed to balance comfort, adventure, and cultural immersion, so whether you're seeking a relaxed journey or an active experience, there's a trip that's right for you.",
      ],
    },
    {
      id: 'age-range',
      question: 'What is the typical age range of an Omaya traveller?',
      answer: [
        "We welcome anyone 16 and older - there's no upper age limit. If you have curiosity and a love for exploring, you'll fit right in on an Omaya journey.",
      ],
    },
    {
      id: 'booking-in-advance',
      question: 'How far in advance do I need to book my trip?',
      answer: [
        'We recommend booking at least 2-3 months in advance to secure your preferred dates and accommodations. For peak travel seasons or custom journeys, earlier bookings are ideal to ensure availability and a seamless planning experience.',
      ],
    },
    {
      id: 'cancellation-refund-policy',
      question: 'What are the cancellation and refund policies?',
      answer: [
        'If you need to cancel your trip, the following policy applies. Cancellation terms may vary slightly by destination and will be confirmed at the time of reservation.',
      ],
      rules: [
        {
          period: 'More than 45 days before departure',
          policy:
            'Your deposit will not be refunded as cash, but will be issued as a travel credit valid for 12 months from the date of cancellation. A 100 EUR administration fee applies.',
        },
        {
          period: '45-30 days before departure',
          policy:
            'You will receive a full refund minus the deposit, returned via your original payment method. The deposit is forfeited.',
        },
        {
          period: '29-20 days before departure',
          policy:
            '30% of the total trip cost will be refunded via your original payment method. The remaining 70%, including the deposit, is forfeited.',
        },
        {
          period: 'Less than 14 days before departure',
          policy: 'No refund or travel credit will be issued.',
        },
      ],
      notes: [
        'Please note that the deposit is non-refundable under all circumstances. It covers the processing, confirmation, and consultation services provided at the time of booking, which are delivered immediately upon confirmation. In eligible cases, it is returned as credit toward a future Omaya trip only, valid for 12 months.',
        'We strongly recommend purchasing comprehensive travel insurance at the time of paying your deposit. A good policy will cover cancellations due to illness, injury, and other unforeseen events, protecting you in situations where our standard policy cannot provide a refund.',
      ],
    },
    {
      id: 'extra-hotel-nights',
      question: 'Can I book extra nights of hotel accommodation before or after my tour?',
      answer: [
        "Yes. We can help arrange additional nights at your hotel before and/or after your tour so you can explore at your own pace or simply relax. Just let us know when booking, and we'll take care of the details.",
      ],
    },
    {
      id: 'alternative-dates',
      question: 'Can you run a tour on alternative dates?',
      answer: [
        "Yes. We can arrange a private tour on alternative dates to fit your schedule. Just let us know your preferred timing, and we'll design a personalized experience just for you.",
      ],
    },
    {
      id: 'private-tour',
      question: 'What is a private tour?',
      answer: [
        "A private tour is a journey designed just for you and your group. You'll enjoy a fully personalized itinerary, flexible schedule, and the attention of your own guide, ensuring a more intimate, comfortable, and tailored travel experience.",
      ],
    },
    {
      id: 'international-airfare',
      question: 'Do your tours include international airfare?',
      answer: [
        'Our tours do not include international flights by default. However, if you would like, we can assist with purchasing your flight tickets to make your travel planning easier.',
      ],
    },
    {
      id: 'airport-transfers',
      question: 'Are airport transfers included?',
      answer: [
        'Yes. Airport transfers are included on the first and last day of your tour, so you can start and finish your journey stress-free.',
      ],
    },
    {
      id: 'transportation',
      question: 'What sort of transportation is used on the tours?',
      answer: [
        "We use comfortable, modern vehicles suited to the size of your group and the itinerary. Whether it's a small van for intimate tours or a larger coach for bigger groups, our transportation is safe, reliable, and designed to make your journey smooth and enjoyable.",
      ],
    },
    {
      id: 'visa',
      question: 'Will I need a visa for my destination, and do you provide assistance?',
      answer: [
        'You are responsible for obtaining any required visas for your destination. Your passport must have sufficient validity, and your passport name must match your airline ticket. We recommend consulting the relevant embassy or consulate well in advance. If you need specialist assistance, we recommend engaging a dedicated visa service. We accept no responsibility for issues arising from incorrect or insufficient travel documentation.',
      ],
    },
    {
      id: 'dietary-requirements',
      question: 'Can you accommodate specific dietary requirements or allergies?',
      answer: [
        'Please communicate any dietary requirements or allergies within seven days of your booking confirmation. We will do our best to inform our suppliers, but we cannot guarantee that all requests will be accommodated, particularly in remote destinations. You remain responsible for ensuring that meals and beverages do not contain allergens that affect you.',
      ],
    },
    {
      id: 'group-size',
      question: 'On your group tours, what is the maximum group size?',
      answer: [
        'Our group tours are intimate, with a maximum of 8 people, allowing for a personal, relaxed, and immersive travel experience.',
      ],
    },
    {
      id: 'single-supplement',
      question: "I'm a single traveller, will I be charged a single supplement?",
      answer: [
        'Single supplements apply for solo travellers who require their own room. However, we offer a room-sharing matching service for solo travellers willing to share twin accommodation - matches are arranged between travellers of the same sex only. There is no guarantee that a match will be found, and we do not warrant the compatibility of matched individuals. If you are matched and later decide to switch to a single room, availability cannot be guaranteed.',
      ],
    },
    {
      id: 'physical-demand',
      question: 'How physically demanding are your tours?',
      answer: [
        'Our tours are moderately active, designed for the average traveller. You can always skip or modify the more challenging parts of any itinerary, so you can enjoy the experience at your own pace.',
      ],
    },
    {
      id: 'remote-destination-safety',
      question: 'How safe are the tours to remote destinations?',
      answer: [
        'Safety is our top priority. Even in remote areas, our tours are carefully planned with experienced local guides, reliable transportation, and well-vetted accommodations. We also provide safety briefings and support throughout your journey, so you can explore with confidence.',
      ],
    },
  ] satisfies readonly FaqItem[],
};

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.scss',
})
export class FaqPage {
  protected readonly content = FAQ_PAGE;
}
