import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  link: string;
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
  img,
  category,
}) => {
  return (
    <div
      className='!w-full hover:translate-y-1 transition-all ease-in-out rounded-md bg-slate-800 overflow-hidden'
      style={{ width: '19.75rem', display: 'flex', flexDirection: 'column' }}
    >
      <div className='aspect-w-3 aspect-h-2 relative'>
        <img
          className='h-full w-full object-cover object-center'
          src={img.src}
          alt={img.alt}
        />
				<div className='absolute inset-0 w-full h-full bg-slate-700 bg-opacity-30 z-20 opacity-0 hover:opacity-100 transition ease-in-out'>
					<i className="text-teal-500 cursor-pointer fa-solid fa-play text-2xl !absolute !left-1/2 !top-1/2"></i>
				</div>
      </div>
      <div className='px-3 pt-4 pb-4 flex-grow'>
        <div className='pb-4 flex justify-between items-baseline text-xl font-bold'>
          <h1 className='text-xl'>{name}</h1>
          <div className='text-base items-baseline space-x-4'>
            <button
              title='preview'
              aria-label='Preview project'
              role='button'
              className='text-indigo-500 fa-solid fa-up-right-from-square cursor-alias'
            />
            <button
              title='repository'
              aria-label='View repository'
              role='button'
              className='text-teal-500 fa-solid fa-code'
            />
          </div>
        </div>

        <div className='flex flex-row flex-wrap gap-1 pb-2'>{category}</div>

        <div className='line-clamp-3 cursor-text hover:line-clamp-none transition-all ease-in-out flex-grow'>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Project;
