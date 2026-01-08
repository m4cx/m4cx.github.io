// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  content: {
    experimental: { nativeSqlite: true },
  },
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  }
});
