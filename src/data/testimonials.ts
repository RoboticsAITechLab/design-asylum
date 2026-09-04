export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  companyLogoText: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'puma',
    quote: 'The Asylum team completely reinvented our flagship digital engagement portal. They didn’t just meet the brief—they challenged our assumptions and delivered a dynamic athletic experience that lifted dwell times by 240% across key European markets.',
    author: 'Vikram Malhotra',
    role: 'Head of Digital Strategy & Brand Commerce',
    company: 'PUMA Global Running',
    companyLogoText: 'PUMA',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  },
  {
    id: 'direct-meds',
    quote: 'Healthcare UX is notoriously plagued by regulatory clunkiness. Design Asylum untangled our patient journey into a breathtaking, calm interface. Patient onboarding drop-offs dropped 48% in the first sprint alone. Pure genius.',
    author: 'Elena Rostova',
    role: 'Co-Founder & Chief Medical Officer',
    company: 'Direct Meds Health Inc.',
    companyLogoText: 'DIRECT MEDS',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  },
  {
    id: 'magppie',
    quote: 'When dealing with ultra-luxury architecture, standard web templates are an insult to the craft. Asylum built a spatial, sculptural digital flagship for Magppie that feels like walking through a private gallery in Milan. Our qualified commercial inquiries tripled.',
    author: 'Sameer Bansal',
    role: 'Managing Director & Principal Architect',
    company: 'Magppie Architectural Living',
    companyLogoText: 'MAGPPIE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5
  }
];
