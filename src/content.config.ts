import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Retain the template's empty generic collections because DocsLayout and other
// reusable template code refer to their generated types.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    section: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const routedContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  canonicalUrl: z.string().url(),
  showHero: z.boolean().default(false),
  heroTitle: z.string().default(''),
  contentTitle: z.string().default(''),
  afterFaqHtml: z.string().default(''),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).default([]),
  statsVariant: z.enum(['article', 'bar']).default('bar'),
  formVariant: z.enum(['article', 'home']).default('article'),
  testimonialsVariant: z.enum(['article', 'home']).default('article'),
  mapVariant: z.enum(['article', 'location', 'none']).default('none'),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: routedContentSchema,
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: routedContentSchema.extend({
    serviceArea: z.string(),
    serviceTopic: z.string(),
    practiceArea: z.string().default(''),
  }),
});

const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/service-areas' }),
  schema: routedContentSchema.extend({
    areaName: z.string(),
  }),
});

const practiceAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/practice-areas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroEyebrow: z.string(),
    heroDescription: z.string(),
    heroImage: z.string(),
    heroImageSrcset: z.array(z.string()).default([]),
    heroImageAlt: z.string(),
    canonicalUrl: z.string().url(),
    ctaHeadline: z.string().default(''),
    ctaText: z.string().default(''),
    ctaButtonText: z.string().default(''),
    ctaButtonLink: z.string().default(''),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroEyebrow: z.string().default(''),
    heroDescription: z.string(),
    heroPracticeArea: z.string(),
    heroImage: z.string(),
    heroImageSrcset: z.array(z.string()).default([]),
    heroImageAlt: z.string(),
    canonicalUrl: z.string().url(),
    excerpt: z.string(),
    cardImage: z.string(),
    ctaHeadline: z.string().default(''),
    ctaText: z.string().default(''),
    ctaButtonText: z.string().default(''),
    ctaButtonLink: z.string().default(''),
    featuredOrder: z.number().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    statsVariant: z.enum(['article', 'bar']).default('bar'),
    formVariant: z.enum(['article', 'home']).default('article'),
    testimonialsVariant: z.enum(['article', 'home']).default('article'),
    mapVariant: z.enum(['article', 'location', 'none']).default('none'),
  }),
});

const attorneys = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/attorneys' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    canonicalUrl: z.string().url(),
    heroTitle: z.string(),
    heroDescription: z.string(),
    profileVariant: z.enum(['article', 'detailed']),
    education: z.array(z.object({
      school: z.string(),
      details: z.string(),
    })).default([]),
    barAdmissions: z.array(z.string()).default([]),
    professionalAssociations: z.array(z.string()).default([]),
    representativeCases: z.array(z.string()).default([]),
    classesAndSeminars: z.array(z.string()).default([]),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  schema: z.object({
    name: z.string(),
    text: z.string(),
    date: z.string(),
    rating: z.number().int().min(1).max(5).default(5),
    order: z.number().int().positive(),
  }),
});

const verdicts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/verdicts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    amount: z.string(),
    order: z.number().int().positive(),
  }),
});

export const collections = {
  blog,
  docs,
  posts,
  services,
  serviceAreas,
  practiceAreas,
  articles,
  attorneys,
  reviews,
  verdicts,
};
