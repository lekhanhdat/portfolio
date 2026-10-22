// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Served as a GitHub Pages project site: https://lekhanhdat.github.io/portfolio/
export default defineConfig({
  site: 'https://lekhanhdat.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/styleguide/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
