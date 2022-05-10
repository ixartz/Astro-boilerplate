import type { FrontmatterPage } from '@/types/IFrontmatter';

type IPaginationProps = {
  page: FrontmatterPage;
};

const Pagination = (props: IPaginationProps) => (
  <div className="flex justify-between">
    {props.page.url.prev && <a href={props.page.url.prev}>Newer Posts</a>}
    {props.page.url.next && <a href={props.page.url.next}>Older Posts</a>}
  </div>
);

export { Pagination };
