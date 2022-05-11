import { Logo } from '@/components/Logo';
import { NavMenu } from '@/components/NavMenu';

const LandingPage = () => (
  <div className="mx-auto flex max-w-screen-lg items-center justify-between px-3 py-5">
    <Logo
      icon={
        <svg
          className="mr-1 h-10 w-10 stroke-cyan-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none"></path>
          <rect x="3" y="12" width="6" height="8" rx="1"></rect>
          <rect x="9" y="8" width="6" height="12" rx="1"></rect>
          <rect x="15" y="4" width="6" height="16" rx="1"></rect>
          <path d="M4 20h14"></path>
        </svg>
      }
      name="Ixartz's Blog"
    />

    <NavMenu />
  </div>
);

export { LandingPage };
