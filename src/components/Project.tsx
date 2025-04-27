import React from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { MdSlowMotionVideo } from 'react-icons/md';
import { VscPreview } from 'react-icons/vsc';

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  repoLink?: string;
  detailLink: string;
  img: {
    src: string;
    alt: string;
  };
  category: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  link,
  repoLink,
  detailLink,
  img,
  category,
}) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-700/50 bg-neutral-800/50 transition-all duration-300 hover:border-emerald-700/50 hover:bg-neutral-800/70 hover:shadow-lg hover:shadow-emerald-900/10">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={img.src}
          alt={img.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 transition-all duration-300 hover:bg-neutral-900/50 group-hover:opacity-100">
          <button
            className="shadow-black transition-all duration-300 hover:scale-105 group-hover:shadow-2xl"
            aria-label="Play demo video"
          >
            <MdSlowMotionVideo className="h-16 w-16 rounded-full text-emerald-400/90 ring-0 ring-emerald-400/50 transition ease-in-out group-hover:text-emerald-400 group-hover:ring-1" />
          </button>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex grow flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-neutral-100 transition-colors duration-300 group-hover:text-emerald-400">
            {name}
          </h3>

          <div className="flex items-center space-x-3">
            <a
              href={link}
              className="group/link relative rounded-full p-2 transition-all duration-200 hover:bg-neutral-700/50"
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              aria-label="View live demo"
            >
              <VscPreview className="h-4 w-4 text-neutral-400 transition-colors group-hover/link:text-emerald-400" />
            </a>
            {repoLink && (
              <a
                href={repoLink}
                className="group/github relative rounded-full p-2 transition-all duration-200 hover:bg-neutral-700/50"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                aria-label="View GitHub repository"
              >
                <FaGithub className="h-4 w-4 text-neutral-400 transition-colors group-hover/github:text-emerald-400" />
              </a>
            )}
          </div>
        </div>

        <div className="mb-4 grow">
          <p className="line-clamp-3 text-neutral-300">{description}</p>
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">{category}</div>

        {/* Learn More Link */}
        <a
          href={detailLink}
          className="group/learn inline-flex items-center text-emerald-400 transition-colors duration-200 hover:text-emerald-300"
        >
          Learn more
          <FaArrowRight className="ml-2 h-3 w-3 transition-transform duration-200 group-hover/learn:translate-x-1" />
        </a>
      </div>

      {/* Decorative border effect */}
      <div className="h-0.5 w-0 bg-gradient-to-r from-emerald-500/25 to-blue-600/25 transition-all duration-300 group-hover:w-full" />
    </div>
  );
};

export default Project;
