import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Optional basic fields
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Docs-specific fields
    order: z.number().optional(),
    section: z.string().optional(),

    // Optional basic fields (shared with blog)
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
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

export const collections = { blog, docs, practiceAreas };
