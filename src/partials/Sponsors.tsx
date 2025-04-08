import { Section } from 'astro-boilerplate-components';

import arcjetLogo from '../../public/assets/images/arcjet-dark.svg';
import clerkLogo from '../../public/assets/images/clerk-logo-white.png';
import codeRabbitLogo from '../../public/assets/images/coderabbit-logo-dark.svg';
import crowdinLogo from '../../public/assets/images/crowdin-white.png';
import nextjsBoilerplateLogo from '../../public/assets/images/nextjs-boilerplate-saas.png';
import sentryLogo from '../../public/assets/images/sentry-white.png';

const Sponsors = () => (
  <Section title="Sponsors">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate"
              target="_blank"
            >
              <img
                src={clerkLogo.src}
                alt="Clerk – Authentication & User Management for Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025"
              target="_blank"
            >
              <img
                src={codeRabbitLogo.src}
                alt="CodeRabbit"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <img src={sentryLogo.src} alt="Sentry" width={260} height={224} />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://launch.arcjet.com/Q6eLbRE" target="_blank">
              <img src={arcjetLogo.src} alt="Arcjet" width={260} height={224} />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://l.crowdin.com/next-js" target="_blank">
              <img
                src={crowdinLogo.src}
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://nextjs-boilerplate.com/pro-saas-starter-kit"
              target="_blank"
            >
              <img
                src={nextjsBoilerplateLogo.src}
                alt="Next.js Boilerpalte SaaS"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
