import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    authors: defineCollection({
      type: "data",
      source: "authors/*.yml",
      schema: z.object({
        name: z.string(),
        "github-url": z.string().optional(),
      }),
    }),
    content: defineCollection({
      type: "page",
      source: "**",
    }),
    pagesContent: defineCollection({
      type: "page",
      source: "pages-content/**",
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/**",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        githubUrl: z.string().optional(),
        date: z.string().refine((date) => !isNaN(Date.parse(date)), {
          message: "Invalid date format",
        }),
    }),
    }),
  },  
});
