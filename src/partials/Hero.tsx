import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <div className=''>
    <Section>
      <HeroAvatar
        title={
          <>
            Hi there, I'm <GradientText>Binyam</GradientText> 👋
          </>
        }
        description={
          <>
            <b>Backend Developer</b> certified by{' '}
            <a className='text-cyan-400 hover:underline' href='/'>
              ALX SWE
            </a>{' '}
            , currently learning <b>Computer Engineering</b> at the{' '}
            <a className='text-cyan-400 hover:underline' href='/'>
              University of Dubai
            </a>{' '}
            , passionate about integrating AI into our day to day life.
          </>
        }
        avatar={
          <>
            <img
              className='h-80 my-2 flex-grow pt-2 w-64 rounded-full opacity-75'
              src='/assets/images/profile_no_bg.png'
              alt='Avatar image'
              loading='lazy'
            />
          </>
        }
        socialButtons={
          <>
            <a href='/'>
              <HeroSocial
                src='/assets/images/twitter-icon.png'
                alt='Twitter icon'
              />
            </a>
            <a href='/'>
              <HeroSocial
                src='/assets/images/facebook-icon.png'
                alt='Facebook icon'
              />
            </a>
            <a href='/'>
              <HeroSocial
                src='/assets/images/linkedin-icon.png'
                alt='Linkedin icon'
              />
            </a>
            <a href='/'>
              <HeroSocial
                src='/assets/images/youtube-icon.png'
                alt='Youtube icon'
              />
            </a>
          </>
        }
      />
    </Section>
  </div>
);

export { Hero };
