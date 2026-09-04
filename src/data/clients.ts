export interface Client {
  id: string;
  name: string;
  industry: string;
  region: string;
  tickerText: string;
}

export const CLIENTS: Client[] = [
  { id: 'puma', name: 'PUMA', industry: 'Sportswear & Performance', region: 'Global', tickerText: 'PUMA' },
  { id: 'direct-meds', name: 'direct meds', industry: 'Telehealth & Pharmacy', region: 'North America', tickerText: 'DIRECT MEDS' },
  { id: 'sunroof', name: 'SUNROOF', industry: 'Clean Luxury & Lifestyle', region: 'Europe / UAE', tickerText: 'SUNROOF' },
  { id: 'magppie', name: 'MAGPPIE', industry: 'Architectural Kitchens & Stone', region: 'Global', tickerText: 'MAGPPIE' },
  { id: 'korklub', name: 'KorKlub', industry: 'Reformer & Wellness Studios', region: 'India / Singapore', tickerText: 'KOR KLUB' },
  { id: 'tata', name: 'TATA MOTORS', industry: 'Automotive & EV Innovation', region: 'Global', tickerText: 'TATA MOTORS' },
  { id: 'google', name: 'GOOGLE', industry: 'Digital Ecosystems & OOH', region: 'Global', tickerText: 'GOOGLE LABS' },
  { id: 'razorpay', name: 'RAZORPAY', industry: 'Fintech Payments Infrastructure', region: 'India / SEA', tickerText: 'RAZORPAY' },
  { id: 'cultfit', name: 'CULT.FIT', industry: 'Consumer Health & Fitness', region: 'India', tickerText: 'CULT FIT' },
  { id: 'cred', name: 'CRED', industry: 'Premium Financial Rewards', region: 'India', tickerText: 'CRED' }
];
