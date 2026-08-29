export const SITE = {
  name: 'Logeman & Iafrate, P.C.',
  title: 'Ann Arbor, Michigan Injury Lawyers | Logeman & Iafrate, P.C.',
  description: 'Michigan personal injury attorneys with 45+ years of experience. We take cases others won’t and prepare every case for trial. Free consultations available.',
  lang: 'en',
  // Keep search signals on the live Webflow domain during the PageSmith pilot.
  // Change isStaging only as part of an authorized production cutover.
  url: 'https://www.logeman.com',
  isStaging: true,
  twitterHandle: '@logemanlaw',
  socials: {
    linkedin: 'https://www.linkedin.com/company/logeman-iafrate-pc',
  },
} as const;

export type SiteConfig = typeof SITE;
