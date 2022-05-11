import { Section } from '@/components/Section';
import facebookIcon from '@/images/facebook-icon.png';
import linkedinIcon from '@/images/linkedin-icon.png';
import avatar from '@/images/photo-avatar.svg';
import twitterIcon from '@/images/twitter-icon.png';
import youtubeIcon from '@/images/youtube-icon.png';

import { Navbar } from './Navbar';

const LandingPage = () => (
  <>
    <Navbar />

    <Section>
      <div className="flex items-center gap-24">
        <div>
          <h1 className="text-3xl font-bold">Hi there, I'm Ixartz 👋</h1>

          <p className="mt-6 text-xl leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>

          <div className="mt-3 flex gap-1">
            <img className="h-12 w-12" src={twitterIcon} alt="Twitter icon" />
            <img className="h-12 w-12" src={facebookIcon} alt="Facebook icon" />
            <img className="h-12 w-12" src={linkedinIcon} alt="Linkedin icon" />
            <img className="h-12 w-12" src={youtubeIcon} alt="Youtube icon" />
          </div>
        </div>

        <div className="shrink-0">
          <img className="h-80 w-72" src={avatar} alt="Avatar image" />
        </div>
      </div>
    </Section>
  </>
);

export { LandingPage };
