import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex items-center justify-between">{props.children}</div>
);

export { NavbarTwoColumns };
