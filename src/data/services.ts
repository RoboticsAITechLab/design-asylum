export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  deliverables: string[];
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy & Identity',
    subtitle: 'Defining distinct, unignorable market positioning.',
    deliverables: ['Brand Architecture', 'Visual Language System', 'Typography & Voice', 'Packaging & Collateral'],
    description: 'We construct deep brand foundations that turn category contenders into undisputed market authorities with long-lasting emotional resonance.'
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX & Product Design',
    subtitle: 'Crafted digital interfaces built for conversion & retention.',
    deliverables: ['UX Research & Audits', 'Design Systems (Figma/Tokens)', 'Complex Web Applications', 'Native iOS & Android Apps'],
    description: 'Eliminating friction through obsessively tuned micro-interactions, systematic typography hierarchies, and scalable modular component architectures.'
  },
  {
    id: 'creative-tech',
    number: '03',
    title: 'Web & Mobile Engineering',
    subtitle: 'Lightning-fast, production-grade frontend architectures.',
    deliverables: ['Next.js / Turbopack Ecosystems', 'Fluid Custom CSS / GSAP Motion', 'Headless E-Commerce (Shopify)', 'Accessible WCAG Standards'],
    description: 'We translate design intent into pixel-perfect, 60fps codebases engineered for enterprise scale, sub-second load times, and effortless SEO dominance.'
  },
  {
    id: 'ai-creative',
    number: '04',
    title: 'AI Integration & Creative Tech',
    subtitle: 'Next-generation spatial, generative, and adaptive tools.',
    deliverables: ['Generative Visual Pipelines', 'Conversational AI UI', '3D WebGL / Three.js Experiments', 'Dynamic Personalization Engines'],
    description: 'Infusing intelligent AI layers and cinematic interactive WebGL mechanics to create bespoke digital experiences that mesmerize users.'
  },
  {
    id: 'content-motion',
    number: '05',
    title: 'Motion Systems & Art Direction',
    subtitle: 'Kinetic storytelling that commands instant attention.',
    deliverables: ['3D Specular Renders', 'Fluid Micro-Interactions', 'Video Art Direction', 'Social & Interactive Campaigns'],
    description: 'Motion is not an afterthought; it is our primary design language. Every scroll skew, card reveal, and pointer tracking behavior is tuned for maximum dopamine.'
  },
  {
    id: 'growth-scale',
    number: '06',
    title: 'Growth Strategy & Design Retainers',
    subtitle: 'Continuous iteration and quarterly sprint cadence.',
    deliverables: ['Conversion Rate Optimization', 'Feature Sprint Roadmaps', 'A/B Testing Frameworks', 'Dedicated Fractional Design Lead'],
    description: 'Partnering long-term with venture-backed series A-to-IPO companies to continually sharpen conversion metrics and product velocity.'
  }
];
