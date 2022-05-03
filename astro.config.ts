import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://example.com/', // Use to generate your sitemap and canonical URLs in your final build.
  integrations: [react(), tailwind({})],
});
