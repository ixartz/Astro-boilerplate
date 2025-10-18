import type {
  MarkdownInstance as AstroMarkdownInstance,
  Page as AstroPage,
} from 'astro';

export interface IFrontMatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
  draft: boolean;
}

// Workaround to import Astro type. Otherwise, it'll have some compilation errors
export type Page<T> = AstroPage<T>;
export type MarkdownInstance<T extends Record<string, any>> =
  AstroMarkdownInstance<T>;

export type FrontmatterPage = Page<MarkdownInstance<IFrontMatter>>;
