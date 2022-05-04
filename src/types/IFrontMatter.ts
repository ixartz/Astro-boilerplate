export interface IFrontmatter {
  title: string;
  description: string;
  publishDate: string;
}

export type Page<T> = import('astro').Page<T>;
export type MarkdownInstance<T> = import('astro').MarkdownInstance<T>;

export type FrontmatterPage = Page<MarkdownInstance<IFrontmatter>>;
