import { format } from 'date-fns';
import type { ReactNode } from 'react';

import { Section } from '@/components/Section';
import type { IFrontmatter } from '@/types/IFrontmatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

    <div className="mt-5 text-sm text-gray-400">
      By {AppConfig.author} on{' '}
      {format(new Date(props.content.publishDate), 'LLL d, yyyy')}
    </div>

    {props.children}
  </Section>
);

export { BlogPost };
