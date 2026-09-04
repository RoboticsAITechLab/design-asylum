export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  deliverables: string[];
  year: string;
  summary: string;
  aspectRatio: 'wide' | 'portrait' | 'tall' | 'square';
  bgColor: string;
  accentColor: string;
  textColor: string;
  image: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'sunroof',
    title: 'SUNROOF',
    client: 'Sunroof Studio',
    category: 'Brand Identity & Web Flagship',
    deliverables: ['Brand Architecture', 'Motion System', 'Next.js Flagship'],
    year: '2025',
    summary: 'A solar-forward sustainable fashion identity celebrating tactile warmth and unapologetic optimism in nature.',
    aspectRatio: 'wide',
    bgColor: '#E5A93C',
    accentColor: '#F5C86C',
    textColor: '#1A1813',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sustainable Luxury', 'Creative Direction', 'E-Commerce'],
    metrics: { label: 'Conversion Lift', value: '+142%' }
  },
  {
    id: 'direct-meds',
    title: 'direct meds',
    client: 'Direct Meds Health Inc.',
    category: 'Telehealth UX & Mobile Ecosystem',
    deliverables: ['Design System', 'iOS & Android App', 'Patient Portal'],
    year: '2025',
    summary: 'Reinventing prescription fulfillment and on-demand clinical consultation with a serene, human-first digital clinic.',
    aspectRatio: 'wide',
    bgColor: '#3A6B5C',
    accentColor: '#59B194',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['HealthTech', 'Design Systems', 'Mobile App'],
    metrics: { label: 'Onboarding Drop-off', value: '-48%' }
  },
  {
    id: 'puma-legacy',
    title: 'PUMA',
    client: 'Puma Global Running',
    category: 'The Legacy Portal • Interactive Campaign',
    deliverables: ['3D Web Experience', 'Micro-Interactions', 'Global Campaign'],
    year: '2024',
    summary: 'High-octane interactive celebration of athletic endurance, biomechanical telemetry, and the iconic sprint legacy.',
    aspectRatio: 'wide',
    bgColor: '#D91E18',
    accentColor: '#FF4D4D',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Sportswear', 'Interactive 3D', 'WebGL'],
    metrics: { label: 'Average Session Time', value: '4m 18s' }
  },
  {
    id: 'creativity-for-life',
    title: 'CREATIVE LABS',
    client: 'Google Creative Ecosystem',
    category: 'Outdoor Digital & Spatial Campaign',
    deliverables: ['Creative Tech', 'Generative OOH', 'Interactive Billboards'],
    year: '2024',
    summary: 'Bridging physical urban public spaces with responsive generative typography, celebrating human imagination across cities.',
    aspectRatio: 'wide',
    bgColor: '#7C3AED',
    accentColor: '#A78BFA',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Generative Art', 'OOH Display', 'Creative Tech'],
    metrics: { label: 'Public Impressions', value: '18.4M' }
  },
  {
    id: 'magppie',
    title: 'MAGPPIE',
    client: 'Magppie Architectural Living',
    category: 'Luxury Architecture & Digital Living',
    deliverables: ['Digital Flagship', 'Virtual Showroom', '3D Configurator'],
    year: '2025',
    summary: 'Harmonizing bespoke stone, precision engineering, and spatial calmness into an uncompromising digital residence experience.',
    aspectRatio: 'wide',
    bgColor: '#58624E',
    accentColor: '#889878',
    textColor: '#F5F5F0',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Interior Architecture', 'Luxury Living', 'Bespoke UI'],
    metrics: { label: 'High-Ticket Inquiries', value: '+210%' }
  },
  {
    id: 'aura-spatial',
    title: 'AURA',
    client: 'Aura Sound Technologies',
    category: 'Spatial Audio Interface & Hardware Companion',
    deliverables: ['Hardware Companion App', 'Acoustic UI', 'Haptic Systems'],
    year: '2024',
    summary: 'Sensory acoustic software designed to translate next-generation spatial soundscapes into intuitive fingertip gestures.',
    aspectRatio: 'wide',
    bgColor: '#4C1D41',
    accentColor: '#9333EA',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
    tags: ['Audio Tech', 'Hardware Companion', 'Spatial Design'],
    metrics: { label: 'App Store Rating', value: '4.9 ★' }
  },
  {
    id: 'vital-labs',
    title: 'VITAL LABS',
    client: 'Vital Labs Cosmeceuticals',
    category: 'Botanical Clinical E-Commerce',
    deliverables: ['Packaging Art Direction', 'Shopify Plus Custom', 'Product Renderings'],
    year: '2024',
    summary: 'Bridging clinical cellular science and pure botanical extracts through organic fluid macro-motion and high-converting checkout flows.',
    aspectRatio: 'wide',
    bgColor: '#16281E',
    accentColor: '#34D399',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1608248597359-bb5c7b39ea30?auto=format&fit=crop&w=1200&q=80',
    tags: ['Cosmeceuticals', 'Macro Visuals', 'D2C Flagship'],
    metrics: { label: 'Repeat Customer Rate', value: '38.6%' }
  },
  {
    id: 'kor-klub',
    title: 'KorKlub',
    client: 'KorKlub Sanctuary',
    category: 'Movement, Reformer & Sanctuary Platform',
    deliverables: ['Membership Web Platform', 'Class Booking UX', 'Studio Branding'],
    year: '2024',
    summary: 'An architectural digital sanctum for pilates, breathwork, and mindful biomechanics with fluid booking cadence.',
    aspectRatio: 'wide',
    bgColor: '#D8C7B5',
    accentColor: '#8C6D58',
    textColor: '#2E2620',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    tags: ['Wellness Studio', 'Membership Platform', 'Editorial Brand'],
    metrics: { label: 'Membership Capacity', value: '100% Sold Out' }
  },
  {
    id: 'nexus-vault',
    title: 'NEXUS',
    client: 'Nexus Financial Cryptography',
    category: 'Fintech Protocol & Digital Asset Terminal',
    deliverables: ['Terminal Interface', 'Real-time Telemetry', 'Security Architecture'],
    year: '2025',
    summary: 'Ultra-low latency institutional cryptocurrency custody platform built for hedge desks, featuring bespoke neon dark UI.',
    aspectRatio: 'wide',
    bgColor: '#1A0B2E',
    accentColor: '#A855F7',
    textColor: '#E9D5FF',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fintech Terminal', 'Web3 Custody', 'Dark Mode UI'],
    metrics: { label: 'Secured Volume', value: '$2.8B+' }
  },
  {
    id: 'strata-streetwear',
    title: 'STRATA',
    client: 'Strata Technical Garments',
    category: 'Avant-Garde Technical Fashion D2C',
    deliverables: ['Editorial Lookbook', 'Global Commerce', 'Interactive Sizing Guide'],
    year: '2024',
    summary: 'Exploring modular utilitarian outerwear through brutalist typography, dynamic runway grids, and fluid mobile interactions.',
    aspectRatio: 'wide',
    bgColor: '#1E232A',
    accentColor: '#E2E8F0',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Technical Fashion', 'Editorial D2C', 'Headless Commerce'],
    metrics: { label: 'Drop Sellout Time', value: '3.5 Minutes' }
  },
  {
    id: 'radar-gear',
    title: 'RADAR PACKS',
    client: 'Radar Expeditionary Systems',
    category: 'Technical Outdoor Hardware & Digital Companion',
    deliverables: ['Brand Storytelling', 'Product Walkthrough', 'Materials Explorer'],
    year: '2024',
    summary: 'Industrial durability meets digital telemetry for ultralight alpine and desert traversal gear.',
    aspectRatio: 'wide',
    bgColor: '#2D3748',
    accentColor: '#38BDF8',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80',
    tags: ['Industrial Design', 'Outdoor Gear', 'Materials Explorer'],
    metrics: { label: 'Global Retail Expansion', value: '14 Countries' }
  },
  {
    id: 'hyper-carrier',
    title: 'HYPER CARRIER',
    client: 'Hyper Logistics Technologies',
    category: 'Next-Gen Instant Commerce & Rider UI',
    deliverables: ['Customer Mobile App', 'Courier Telemetry', 'Dispatch Dashboard'],
    year: '2025',
    summary: 'Sub-15 minute grocery distribution network with predictive cart intelligence and playful micro-delights.',
    aspectRatio: 'wide',
    bgColor: '#E25E3E',
    accentColor: '#F6A89E',
    textColor: '#FFFFFF',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
    tags: ['Quick Commerce', 'Fleet Telemetry', 'Mobile App'],
    metrics: { label: 'Daily Dispatches', value: '65,000+' }
  },
  {
    id: 'neo-urban',
    title: 'NEO URBAN',
    client: 'Neo Urban Retail Group',
    category: 'Interactive Architectural Retail Ecosystem',
    deliverables: ['In-Store Touchscreens', 'Omnichannel Identity', 'Spatial Signage'],
    year: '2024',
    summary: 'A futuristic dialogue between physical brick-and-mortar storefronts and smart mobile personalization.',
    aspectRatio: 'wide',
    bgColor: '#171D1A',
    accentColor: '#10B981',
    textColor: '#ECFDF5',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Retail Ecosystem', 'Spatial Signage', 'Omnichannel'],
    metrics: { label: 'Foot Traffic Uplift', value: '+34%' }
  },
  {
    id: 'valo-ev',
    title: 'VALO MOBILITY',
    client: 'Valo Motors Europe',
    category: 'Electric Vehicle In-Cockpit OS & HMI',
    deliverables: ['Cockpit Cluster Design', 'Center Display UX', 'Companion Mobile OS'],
    year: '2025',
    summary: 'Human-centric automotive ergonomics, seamless heads-up heads-down transition, and zero-distraction ambient clarity.',
    aspectRatio: 'wide',
    bgColor: '#0B0F14',
    accentColor: '#38BDF8',
    textColor: '#F1F5F9',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    tags: ['Automotive HMI', 'Cockpit OS', 'Electric Mobility'],
    metrics: { label: 'Driver Task Speed', value: '2.1x Faster' }
  }
];
