export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'partnerships',
    question: 'What types of companies do you typically partner with?',
    answer: 'We partner with ambitious early-stage founders preparing for hypergrowth, venture-backed Series A–C scaleups demanding world-class UI/UX, and heritage global enterprises (such as PUMA and Tata) looking to pioneer experimental digital touchpoints.',
    category: 'Engagement'
  },
  {
    id: 'sprints',
    question: 'What is your typical project timeline and sprint cadence?',
    answer: 'Brand strategy & identity sprints typically run 4–6 weeks. Comprehensive digital product design (web/mobile UI/UX with bespoke design system) spans 6–10 weeks. Full end-to-end design engineering (Next.js/React frontend with custom motion) ranges from 8–14 weeks depending on scope.',
    category: 'Process'
  },
  {
    id: 'collaboration',
    question: 'How do you handle global cross-timezone collaboration?',
    answer: 'With core creative hubs in Bengaluru, Dubai, and London, our teams work asynchronously with daily video standup summaries, weekly sprint demos in Figma & staging URLs, and private Slack/Linear channels directly with senior partners.',
    category: 'Operations'
  },
  {
    id: 'engineering',
    question: 'Do you offer production frontend engineering or only Figma designs?',
    answer: 'We are both creative directors and frontend architects. We build in production Next.js, React, TypeScript, and custom CSS/GSAP motion systems. Every interaction you experience is engineered to deploy seamlessly with zero drop-off in aesthetic fidelity.',
    category: 'Technical'
  },
  {
    id: 'retainers',
    question: 'Do you offer post-launch design retainers & ongoing optimization?',
    answer: 'Yes. Over 70% of our clients transition into ongoing quarterly innovation retainers where we act as their fractional executive design team, continuously running A/B experiments, designing new features, and scaling their design systems.',
    category: 'Engagement'
  }
];
