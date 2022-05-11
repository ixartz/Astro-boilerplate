import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://example.com/', // Use to generate your sitemap and canonical URLs in your final build.
  // Important!
  // Only official '@astrojs/*' integrations are currently supported by Astro.
  // Add 'experimental.integrations: true' to make 'astro-robots-txt' working
  // with 'astro build' command.
  experimental: {
    integrations: true,
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
  ],
});
