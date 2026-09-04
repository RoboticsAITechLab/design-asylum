export interface Client {
  id: string;
  name: string;
  industry: string;
  region: string;
  tickerText: string;
}

export const CLIENTS: Client[] = [
  { id: 'saama', name: 'Saama', industry: 'AI Clinical Analytics', region: 'Global', tickerText: 'SAAMA' },
  { id: 'axis-bank', name: 'Axis Bank', industry: 'Banking & Financial Services', region: 'India', tickerText: 'AXIS BANK' },
  { id: 'godrej', name: 'Godrej', industry: 'Consumer Products & Real Estate', region: 'India / Global', tickerText: 'GODREJ' },
  { id: 'wild-city', name: 'Wild City', industry: 'Music & Creative Culture', region: 'India', tickerText: 'WILD CITY' },
  { id: 'michelin', name: 'Michelin', industry: 'Automotive & Mobility', region: 'Global', tickerText: 'MICHELIN' },
  { id: 'kia', name: 'Kia', industry: 'Automotive & EV Design', region: 'Global', tickerText: 'KIA' },
  { id: 'makers-asylum', name: 'Makers Asylum', industry: 'Maker Space & Innovation Lab', region: 'India / France', tickerText: "MAKER'S ASYLUM" },
  { id: 'abbott', name: 'Abbott', industry: 'Healthcare & Lifesciences', region: 'Global', tickerText: 'ABBOTT' },
  { id: 'sakal', name: 'Sakal Media Group', industry: 'Publishing & Digital Media', region: 'India', tickerText: 'SAKĀL MEDIA' },
  { id: 'sun-stellar', name: 'Sun Stellar', industry: 'Clean Energy & Solar', region: 'India', tickerText: 'SUN STELLAR' },
  { id: 'percept', name: 'Percept', industry: 'Entertainment & Media', region: 'Global', tickerText: 'PERCEPT' },
];
