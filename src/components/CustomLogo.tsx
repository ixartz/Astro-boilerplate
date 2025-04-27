import type { ReactNode } from 'react';
import React from 'react';

interface ILogoProps {
  icon: ReactNode;
  name: string;
  textColor?: string; // Added color prop
}

const CustomLogo = (props: ILogoProps) => (
  <div className="flex items-center">
    {props.icon}
    <div
      className={`text-xl font-extrabold uppercase ${
        props.textColor || 'text-emerald-500'
      }`}
    >
      {props.name}
    </div>
  </div>
);

export { CustomLogo };
