import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { BlogGallery, Section } from 'astro-boilerplate-components';
import React from 'react';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <div className="flex min-h-screen flex-col justify-center" id="posts-section">
    <Section>
      <div className="mb-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl font-bold">
            Recent{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Posts
            </span>
          </h2>

          <div className="text-sm">
            <a
              href="/posts/"
              className="text-emerald-400 transition-colors duration-200 hover:text-emerald-300"
            >
              View all Posts →
            </a>
          </div>
        </div>
      </div>

      {/* We're keeping BlogGallery because replacing it would require more work */}
      <BlogGallery postList={props.postList} />

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2  animate-bounce md:flex">
        <button
          onClick={() => {
            const element = document.getElementById('hero-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="rounded-full bg-gray-700 bg-opacity-50 p-2 transition-all duration-200 hover:bg-opacity-70"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </Section>
  </div>
);

export { RecentPosts };
