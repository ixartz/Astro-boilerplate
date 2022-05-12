import { HeroAvatar } from '@/components/HeroAvatar';
import { HeroSocial } from '@/components/HeroSocial';
import { Section } from '@/components/Section';
import facebookIcon from '@/images/facebook-icon.png';
import linkedinIcon from '@/images/linkedin-icon.png';
import avatar from '@/images/photo-avatar.svg';
import twitterIcon from '@/images/twitter-icon.png';
import youtubeIcon from '@/images/youtube-icon.png';

const Hero = () => (
  <Section>
    <HeroAvatar
      title="Hi there, I'm Ixartz 👋"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore."
      avatar={<img className="h-80 w-72" src={avatar} alt="Avatar image" />}
      socialButtons={
        <>
          <HeroSocial src={twitterIcon} alt="Twitter icon" />
          <HeroSocial src={facebookIcon} alt="Facebook icon" />
          <HeroSocial src={linkedinIcon} alt="Linkedin icon" />
          <HeroSocial src={youtubeIcon} alt="Youtube icon" />
        </>
      }
    />
  </Section>
);

export { Hero };
