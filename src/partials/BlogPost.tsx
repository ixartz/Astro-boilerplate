import type { IFrontmatter } from 'astro-boilerplate-components';
import { Section } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => {
  const { frontmatter } = props;

  // Format the publication date
  const pubDate = new Date(frontmatter.pubDate);
  const formattedDate = pubDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Estimate reading time (rough calculation)
  const readingTime = Math.max(
    1,
    Math.round(frontmatter.description.split(' ').length / 200)
  );

  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        {/* Post Header */}
        <header className="mb-8">
          {/* Featured Image */}
          {frontmatter.imgSrc && (
            <div className="mb-6 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-emerald-800/20">
              <img
                src={frontmatter.imgSrc}
                alt={frontmatter.imgAlt || frontmatter.title}
                className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl">
            {frontmatter.title}
          </h1>

          {/* Meta Information */}
          <div className="mb-4 flex flex-wrap items-center text-sm text-gray-400">
            <div className="mb-2 mr-6 flex items-center">
              <FaUser className="mr-2 text-emerald-500" />
              <span>{AppConfig.author}</span>
            </div>

            <div className="mb-2 mr-6 flex items-center">
              <FaCalendarAlt className="mr-2 text-emerald-500" />
              <time dateTime={frontmatter.pubDate}>{formattedDate}</time>
            </div>

            <div className="mb-2 flex items-center">
              <FaClock className="mr-2 text-emerald-500" />
              <span>{readingTime} min read</span>
            </div>
          </div>

          {/* Description */}
          {frontmatter.description && (
            <p className="text-xl leading-relaxed text-gray-300">
              {frontmatter.description}
            </p>
          )}
        </header>

        {/* Post Content */}
        <div className="prose prose-lg prose-emerald prose-invert max-w-none">
          {props.children}
        </div>
      </article>
    </Section>
  );
};

export { BlogPost };
