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
      className={`text-3xl font-extrabold uppercase ${
        props.textColor || 'text-emerald-600'
      }`}
      style={{ textShadow: '1px 1px 2px #05966999' }}
    >
      {props.name}
    </div>
  </div>
);

export { CustomLogo };
