import type { MarkdownInstance } from 'astro';

import { BlogCard } from '@/components/BlogCard';
import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontmatter';

type IBlogGalleryPosts = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const BlogGallery = (props: IBlogGalleryPosts) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>Recent Posts</div>

        <div className="text-sm">
          <a href="/posts">View all Posts →</a>
        </div>
      </div>
    }
  >
    <div className="grid grid-cols-3 gap-6">
      {props.postList.map((elt) => (
        <BlogCard key={elt.url} instance={elt} />
      ))}
    </div>
  </Section>
);

export { BlogGallery };
