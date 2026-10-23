import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const platform = z.enum(['Web', 'Mobile', 'API', 'AI']);
const schematic = z.enum(['dashboard-grid', 'data-table-workflow', 'mobile-web-pair']);

/*
 * Fields shared by both collections (PLAN §7.2). The entry id is the file name and doubles as
 * the URL slug. There is deliberately no period field: projects never show their own dates.
 */
const projectFields = {
  title: z.string(),
  summary: z.string(),
  /** Display order inside the collection (C1 → C4 for company projects). */
  order: z.number().int(),
  platforms: z.array(platform).min(1),
  myRole: z.string(),
  domain: z.string(),
  stack: z.array(z.string()).min(1),
  /** Missing or unconfirmed content keeps the entry in draft (CLAUDE.md §2.2). */
  draft: z.boolean().default(true),
};

const companyProjects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/company-projects' }),
  schema: z.object({
    ...projectFields,
    company: z.enum(['AvePoint', 'MIND Technology']),
    visibility: z.literal('confidential'),
    schematic,
  }),
});

const personalProjects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/personal-projects' }),
  schema: ({ image }) =>
    z.object({
      ...projectFields,
      tagline: z.string(),
      surfaces: z.array(z.object({ name: z.string(), description: z.string() })).min(1),
      links: z.object({
        repos: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
        demo: z.object({ label: z.string(), url: z.url(), note: z.string().optional() }).optional(),
      }),
      /** Screens shown as placeholders until the real captures arrive (Phase 6). */
      gallery: z
        .array(
          z.object({
            surface: z.enum(['dashboard', 'mobile']),
            label: z.string(),
            alt: z.string(),
            image: image().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = {
  'company-projects': companyProjects,
  'personal-projects': personalProjects,
};
