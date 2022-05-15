import { format } from 'date-fns';
import type { ReactNode } from 'react';

import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontMatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

    <div className="mt-2 text-center text-sm text-gray-400">
      By {AppConfig.author} on{' '}
      {format(new Date(props.content.publishDate), 'LLL d, yyyy')}
    </div>

    <div className="mx-auto mt-5 max-w-prose">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="h-full w-full rounded-lg object-cover object-center"
          src={props.content.imgSrc}
          alt={props.content.imgAlt}
          loading="lazy"
        />
      </div>

      <div className="prose prose-invert mt-8 prose-img:rounded-lg">
        {props.children}
      </div>
    </div>
  </Section>
);

export { BlogPost };
