import type { FrontmatterPage } from '@/types/IFrontMatter';

type IPaginationProps = {
  page: FrontmatterPage
};

const Pagination = (props: IPaginationProps) => (
  <div>{props.page.currentPage}</div>
);

export { Pagination };
