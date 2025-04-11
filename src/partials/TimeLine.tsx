import React from 'react';

const TimeLine: React.FC = () => {
  return (
    <section className='my-24'>
      <div className='container max-w-5xl px-4 py-12 mx-auto'>
        <div className='grid gap-4 mx-4 sm:grid-cols-12'>
          <div className='col-span-12 sm:col-span-3'>
            <div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-yellow-600'>
              <h3 className='text-3xl font-semibold'>Education</h3>
              <span className='text-sm pt-2 font-bold tracking-wider uppercase dark:text-gray-600'>
                Aug 18, 2024
              </span>
            </div>
          </div>
          <div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
            <div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300'>
              <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-yellow-600'>
                <h3 className='text-xl font-semibold tracking-wide'>
                  University of Dubai{' '}
                </h3>
                <time className='text-xs pt-1 tracking-wide uppercase dark:text-gray-600'>
                  Aug 2023 - June 2027
                </time>
                <p className='mt-3'>
                  BSc in Computer Engineering<br/>
									<i>
										Currently Learning
									</i>
                </p>
              </div>
              <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-slate-600'>
                <h3 className='text-xl font-semibold tracking-wide'>
                  ALX SWE
                </h3>
                <time className='text-xs tracking-wide uppercase dark:text-gray-600'>
                  Nov 8, 2022 - July 30, 2024
                </time>
                <p className='mt-3'>
									Software Engineering | Backend<br/>
									<i>
										Completed
									</i>
                </p>
              </div>
              <div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-slate-600'>
                <h3 className='text-xl font-semibold tracking-wide'>
                  Addis Ababa University
                </h3>
                <time className='text-xs tracking-wide uppercase dark:text-gray-600'>
                  Jan 2022 - 
                </time>
                <p className='mt-3'>
                  BSc in Computer Science.<br/>
									<i>
										Stopped when I got scholarship at the univesrity of Dubai
									</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {TimeLine};
