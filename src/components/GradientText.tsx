import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
    {props.children}
  </span>
);

export { GradientText };
