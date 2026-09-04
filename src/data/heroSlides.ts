export interface HeroSlide {
  id: string;
  clientName: string;
  category: string;
  headline: string;
  themeColor: string;
  glowColor: string;
  accentColor: string;
  isDarkTheme: boolean;
  bgGradient: string;
  image: string;
  tagline: string;
  metric: string;
  metricLabel: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'asylum-core',
    clientName: 'DESIGN ASYLUM',
    category: 'STUDIO FLAGSHIP',
    headline: 'Design Partners for scaling companies in India and the Middle East',
    themeColor: '#8B5CF6',
    glowColor: 'rgba(139, 92, 246, 0.42)',
    accentColor: '#C084FC',
    isDarkTheme: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(139, 92, 246, 0.38) 0%, rgba(7, 7, 9, 0.95) 70%)',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=85',
    tagline: 'CREATIVE DIRECTION // ELECTRIC GUITARIST ICON',
    metric: '150+',
    metricLabel: 'Global Deliveries'
  },
  {
    id: 'korklub',
    clientName: 'KOR KLUB',
    category: 'WELLNESS & SANCTUARY',
    headline: 'Architecting mindful movement & high-retention digital memberships',
    themeColor: '#C8B097',
    glowColor: 'rgba(200, 176, 151, 0.45)',
    accentColor: '#8C6D58',
    isDarkTheme: false,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(235, 226, 215, 0.95) 0%, rgba(216, 199, 181, 0.85) 60%, #E8DFD5 100%)',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85',
    tagline: 'REFORMER & MOVEMENT // SCULPTURAL BIOMECHANICS',
    metric: '100%',
    metricLabel: 'Studio Capacity'
  },
  {
    id: 'puma',
    clientName: 'PUMA',
    category: 'SPORTSWEAR & PERFORMANCE',
    headline: 'High-octane WebGL athletic portal for global sprint telemetry',
    themeColor: '#EF4444',
    glowColor: 'rgba(239, 68, 68, 0.42)',
    accentColor: '#F87171',
    isDarkTheme: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(220, 38, 38, 0.38) 0%, rgba(15, 7, 7, 0.95) 70%)',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1000&q=85',
    tagline: 'THE LEGACY PORTAL // HIGH-CONVERSION COMMERCE',
    metric: '+240%',
    metricLabel: 'Dwell Time Lift'
  },
  {
    id: 'direct-meds',
    clientName: 'DIRECT MEDS',
    category: 'TELEHEALTH & CLINICAL UX',
    headline: 'Serene prescription fulfillment untangling healthcare complexity',
    themeColor: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.38)',
    accentColor: '#34D399',
    isDarkTheme: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(16, 185, 129, 0.32) 0%, rgba(6, 18, 14, 0.95) 70%)',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85',
    tagline: 'PATIENT-FIRST ONBOARDING // FRICTIONLESS CLINIC',
    metric: '-48%',
    metricLabel: 'Drop-off Reduction'
  },
  {
    id: 'sunroof',
    clientName: 'SUNROOF',
    category: 'SUSTAINABLE LUXURY',
    headline: 'Solar-forward digital flagship celebrating unapologetic optimism',
    themeColor: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.42)',
    accentColor: '#FBBF24',
    isDarkTheme: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(245, 158, 11, 0.36) 0%, rgba(18, 14, 7, 0.95) 70%)',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    tagline: 'TACTILE WARMTH // EDITORIAL D2C COMMERCE',
    metric: '+142%',
    metricLabel: 'Checkout Conversion'
  },
  {
    id: 'magppie',
    clientName: 'MAGPPIE',
    category: 'ARCHITECTURAL LIVING',
    headline: 'Sculptural stone and precision Italian modular living spaces',
    themeColor: '#84CC16',
    glowColor: 'rgba(132, 204, 22, 0.35)',
    accentColor: '#A3E635',
    isDarkTheme: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(132, 204, 22, 0.28) 0%, rgba(12, 16, 10, 0.95) 70%)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
    tagline: 'BESPOKE DIGITAL RESIDENCE // VIRTUAL SHOWROOM',
    metric: '3.1x',
    metricLabel: 'High-Ticket Inquiries'
  },
  {
    id: 'google-labs',
    clientName: 'GOOGLE LABS',
    category: 'GENERATIVE CREATIVE TECH',
    headline: 'Outdoor spatial generative typography across global capitals',
    themeColor: '#6366F1',
    glowColor: 'rgba(99, 102, 241, 0.45)',
    accentColor: '#818CF8',
    isDarkTheme: true,
    bgGradient: 'radial-gradient(circle at 50% 35%, rgba(99, 102, 241, 0.38) 0%, rgba(8, 8, 20, 0.95) 70%)',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=85',
    tagline: 'CREATIVITY IS FOR LIFE // INTERACTIVE BILLBOARDS',
    metric: '18.4M',
    metricLabel: 'Urban Impressions'
  }
];
