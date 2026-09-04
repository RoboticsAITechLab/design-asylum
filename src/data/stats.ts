export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export const STATS: StatItem[] = [
  {
    id: 'projects',
    value: 150,
    suffix: '+',
    label: 'Global Projects Delivered',
    sublabel: 'Across 14 timezones from seed to IPO'
  },
  {
    id: 'years',
    value: 12,
    suffix: '+',
    label: 'Years of Craft & Mastery',
    sublabel: 'Founded in Bengaluru, shipping globally'
  },
  {
    id: 'awards',
    value: 18,
    suffix: '',
    label: 'Industry Recognitions',
    sublabel: 'Awwwards, FWA, Red Dot, & Design Week'
  },
  {
    id: 'referrals',
    value: 94,
    suffix: '%',
    label: 'Client Referrals & Retention',
    sublabel: 'Long-term product growth partnerships'
  }
];
