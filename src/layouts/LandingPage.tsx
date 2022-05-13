import { Section } from '@/components/Section';
import imagePost from '@/images/image-post.jpeg';

import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { ProjectList } from './ProjectList';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <ProjectList />

    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>Recent Posts</div>

          <div className="text-sm">View all Posts →</div>
        </div>
      }
    >
      <div className="grid grid-cols-3 gap-3">
        <div className="overflow-hidden rounded-md bg-slate-800">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="h-full w-full object-cover object-center"
              src={imagePost}
              alt="alt text"
            />
          </div>

          <div className="px-3 pt-4 pb-6 text-center">
            <h2 className="text-xl font-semibold">Lorem ipsum dolor</h2>

            <div className="mt-1 text-xs text-gray-400">April 24, 2022</div>

            <div className="mt-2 text-sm">
              Nunc non posuere consectetur, justo erat semper enim, non
              hendrerit dui odio id enim.
            </div>
          </div>
        </div>
      </div>
    </Section>
  </>
);

export { LandingPage };
