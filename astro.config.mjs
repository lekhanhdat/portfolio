// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Unicode ranges copied from @fontsource-variable/geist index.css.
const LATIN =
  'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
const LATIN_EXT =
  'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF';

// Served as a GitHub Pages project site: https://lekhanhdat.github.io/portfolio/
export default defineConfig({
  site: 'https://lekhanhdat.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  output: 'static',
  build: {
    format: 'directory',
    // The whole stylesheet is ~7 KB gzipped: inlining saves a render-blocking request (LCP).
    inlineStylesheets: 'always',
  },
  // Self-hosted woff2 files from the installed @fontsource-variable packages (latin + latin-ext
  // only): no network at build or runtime. The `local` provider avoids file:// fetches that
  // the npm provider cannot perform on Windows.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Geist',
      cssVariable: '--font-geist',
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/geist/files/geist-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [LATIN],
          },
          {
            src: ['@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [LATIN_EXT],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [LATIN],
          },
          {
            src: ['@fontsource-variable/geist-mono/files/geist-mono-latin-ext-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
            unicodeRange: [LATIN_EXT],
          },
        ],
      },
    },
  ],
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
