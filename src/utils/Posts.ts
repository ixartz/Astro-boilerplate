import type { IFrontMatter, MarkdownInstance } from '@/types/IFrontMatter';

export const sortByDate = (posts: MarkdownInstance<IFrontMatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
