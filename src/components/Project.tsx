import type { ReactNode } from 'react';

type IProjectProps = {
  img: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link: string;
  category: ReactNode;
};

const Project = (props: IProjectProps) => (
  <div className="flex items-center gap-8 bg-slate-800">
    <div className="shrink-0">
      <a href={props.link}>
        <img
          className="h-36 w-36 hover:translate-y-1"
          src={props.img.src}
          alt={props.img.alt}
          loading="lazy"
        />
      </a>
    </div>

    <div>
      <div className="flex items-center">
        <a className="hover:text-cyan-400" href={props.link}>
          <div className="text-xl font-semibold">{props.name}</div>
        </a>

        <div className="ml-3 flex gap-2">{props.category}</div>
      </div>

      <p className="mt-3 text-gray-400">{props.description}</p>
    </div>
  </div>
);

export { Project };
