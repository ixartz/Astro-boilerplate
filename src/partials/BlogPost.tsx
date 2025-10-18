import type { ReactNode } from 'react';

import { PostContent } from '@/components/PostContent';
import { PostHeader } from '@/components/PostHeader';
import { Section } from '@/components/Section';
import type { IFrontMatter } from '@/types/IFrontMatter';
import { AppConfig } from '@/utils/AppConfig';

type IBlogPostProps = {
  frontmatter: IFrontMatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
