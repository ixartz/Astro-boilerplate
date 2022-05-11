import { NavMenuItem } from './NavMenuItem';

const NavMenu = () => (
  <nav>
    <ul className="flex gap-x-3 font-medium text-gray-200">
      <NavMenuItem href="/">About</NavMenuItem>
      <NavMenuItem href="/">Blogs</NavMenuItem>
      <NavMenuItem href="/">Newsletter</NavMenuItem>
    </ul>
  </nav>
);

export { NavMenu };
