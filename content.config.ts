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
  },
});
