import type { ReactNode } from 'react';

type ISectionProps = {
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div className="mx-auto max-w-screen-lg px-3 py-5">{props.children}</div>
);

export { Section };
