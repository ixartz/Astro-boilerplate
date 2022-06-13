import rss from '@astrojs/rss';

import { AppConfig } from '@/utils/AppConfig';

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: AppConfig.title,
    // `<description>` field in output xml
    description: AppConfig.description,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./**/*.md'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
