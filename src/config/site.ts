export const SITE = {
  name: 'Logeman & Iafrate, P.C.',
  title: 'Ann Arbor, Michigan Injury Lawyers | Logeman & Iafrate, P.C.',
  description: 'Michigan personal injury attorneys with 45+ years of experience. We take cases others won’t and prepare every case for trial. Free consultations available.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://www.logeman.com',
  twitterHandle: '@logemanlaw',
  socials: {
    linkedin: 'https://www.linkedin.com/company/logeman-iafrate-pc',
  },
} as const;

export type SiteConfig = typeof SITE;
