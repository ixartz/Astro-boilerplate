import type { ReactNode } from 'react';

type INavbarProps = {
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
    {props.children}
  </div>
);

export { NavbarTwoColumns };
