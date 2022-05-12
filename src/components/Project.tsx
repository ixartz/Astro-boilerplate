import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex items-center gap-8">
    <div className="shrink-0">
      <img className="h-56 w-56" src={props.img.src} alt={props.img.alt} />
    </div>

    <div>
      <div className="flex items-center">
        <div className="text-xl font-semibold">{props.name}</div>

        <div className="ml-3">{props.category}</div>
      </div>

      <p className="mt-3 text-gray-400">{props.description}</p>
    </div>
  </div>
);

export { Project };
