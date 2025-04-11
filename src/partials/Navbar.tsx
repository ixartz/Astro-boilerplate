import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-5 w-5 fill-current text-cyan-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6.35 6.35"
              height="24"
              width="24"
            >
              <path d="m 3.176292,0.52916623 c -0.7275637,0 -1.3245961,0.59496497 -1.3245961,1.32252887 0,0.7275639 0.5970324,1.3245964 1.3245961,1.3245962 0.727564,0 1.3220123,-0.5970323 1.3220123,-1.3245962 0,-0.7275639 -0.5944483,-1.32252887 -1.3220123,-1.32252887 z M 2.1173387,3.4398668 c -0.7943443,0 -1.58817203,0.5292183 -1.58817203,1.3220123 V 5.350014 c 0.05042,0.3308308 0.2646094,0.4713351 0.52973543,0.4708184 H 5.2916149 C 5.5567406,5.8213615 5.731772,5.6000289 5.8208331,5.350014 V 4.7618791 C 5.8213623,3.7044758 5.0275223,3.4398668 4.2326614,3.4398668 Z" />
            </svg>
          }
          name="BinyamMamo"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/connect"> Contact Me</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
