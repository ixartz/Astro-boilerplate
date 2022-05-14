import type { MarkdownInstance } from 'astro';

import { BlogGallery } from '@/components/BlogGallery';
import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontmatter';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
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
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
