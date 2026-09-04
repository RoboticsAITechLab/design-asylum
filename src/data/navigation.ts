export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface StudioLocation {
  city: string;
  country: string;
  timezone: string;
  address: string;
  status: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Work', href: '#work' },
  { label: 'Our Story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'Insights', href: '#insights' },
];

export const STUDIO_LOCATIONS: StudioLocation[] = [
  {
    city: 'Bengaluru',
    country: 'India',
    timezone: 'Asia/Kolkata',
    address: 'Indiranagar Creative Quarters, 100ft Road',
    status: 'Studio HQ'
  },
  {
    city: 'Dubai',
    country: 'UAE',
    timezone: 'Asia/Dubai',
    address: 'D3 Dubai Design District, Building 07',
    status: 'MENA Hub'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    timezone: 'Europe/London',
    address: 'Shoreditch Tech Yards, EC2A',
    status: 'European Desk'
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com', handle: '@designasylum.studio' },
  { name: 'LinkedIn', href: 'https://linkedin.com', handle: 'Design Asylum' },
  { name: 'Twitter / X', href: 'https://x.com', handle: '@design_asylum' },
  { name: 'Dribbble', href: 'https://dribbble.com', handle: 'designasylum' },
  { name: 'Awwwards', href: 'https://awwwards.com', handle: 'design-asylum' }
];
