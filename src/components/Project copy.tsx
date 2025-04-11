import React from 'react';

const Project = ({ name, description, link, img, category }) => {
  return (
    <>
      <div className='flex flex-row w-full gap-4'>
        <div className='project-img w-24'>
          <img className='w-24' src={img.src} alt={img.alt} />
        </div>
        <div className='flex-grow'>
          <div className='project-img text-xl font-bold pb-2'>{name}</div>
          <div className='flex flex-row flex-wrap gap-1 pb-2'>{category}</div>
          <div className=''>{description}</div>
          <div className='text-right text-teal-500'>
            {/* <a href={link}>Open</a> */}
            <span>samples</span>
          </div>
        </div>
      </div>

      <div className='pl-24 flex gap-8' style={{ width: '100%' }}>
				<img className='w-24' src={img.src} alt={img.alt} />
				<img className='w-24' src={img.src} alt={img.alt} />
				<img className='w-24' src={img.src} alt={img.alt} />
			</div>
    </>
  );
};

export default Project;
