export interface Insight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export const INSIGHTS: Insight[] = [
  {
    id: 'neuromarketing-luxury',
    title: 'The Neuromarketing of Minimalist E-Commerce Design',
    category: 'Product & Conversion Psychology',
    readTime: '6 min read',
    date: 'August 2025',
    excerpt: 'How extreme whitespace, deliberate micro-friction, and high-fidelity typography paradoxically accelerate luxury purchase confidence.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    slug: 'neuromarketing-minimalist-ecommerce'
  },
  {
    id: 'spatial-ui-era',
    title: 'Spatial UI & The Next Decade of Immersive Interfaces',
    category: 'Design Systems & Hardware',
    readTime: '8 min read',
    date: 'July 2025',
    excerpt: 'Moving beyond flat rectangular viewports: spatial audio feedback, depth stratification, and glanceable ambient HUDs.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    slug: 'spatial-ui-next-decade'
  },
  {
    id: 'ai-creative-director',
    title: 'How Generative AI is Reshaping High-End Agency Workflows',
    category: 'Creative Tech & Engineering',
    readTime: '5 min read',
    date: 'June 2025',
    excerpt: 'Why the future belongs to hybrid creative technologists who master parametric generation without losing human editorial judgment.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    slug: 'generative-ai-agency-workflows'
  }
];
