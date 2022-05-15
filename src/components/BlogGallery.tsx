import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '@/types/IFrontMatter';

import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
