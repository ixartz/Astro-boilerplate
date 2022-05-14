import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '@/types/IFrontmatter';

import { BlogCard } from './BlogCard';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-3 gap-6">
    {props.postList.map((elt) => (
      <BlogCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
