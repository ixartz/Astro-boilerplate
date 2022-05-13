import type { MarkdownInstance } from 'astro';
import { format } from 'date-fns';

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
        <a key={elt.url} href={elt.url}>
          <div className="overflow-hidden rounded-md bg-slate-800">
            <div className="aspect-w-3 aspect-h-2">
              <img
                className="h-full w-full object-cover object-center"
                src={elt.frontmatter.imgSrc}
                alt={elt.frontmatter.imgAlt}
                loading="lazy"
              />
            </div>

            <div className="px-3 pt-4 pb-6 text-center">
              <h2 className="text-xl font-semibold">{elt.frontmatter.title}</h2>

              <div className="mt-1 text-xs text-gray-400">
                {format(new Date(elt.frontmatter.publishDate), 'LLL d, yyyy')}
              </div>

              <div className="mt-2 text-sm">{elt.frontmatter.description}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  </Section>
);

export { BlogGallery };
