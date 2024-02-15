import { Section } from 'astro-boilerplate-components';

import betterStackLogo from '../../public/assets/images/better-stack-white.png';
import clerkLogo from '../../public/assets/images/clerk.png';
import crowdinLogo from '../../public/assets/images/crowdin-white.png';
import nextlessLogo from '../../public/assets/images/nextlessjs.png';
import sentryLogo from '../../public/assets/images/sentry-white.png';
import tursoLogo from '../../public/assets/images/turso.png';

const Sponsors = () => (
  <Section title="Sponsors">
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo"
              target="_blank"
            >
              <img src={sentryLogo.src} alt="Sentry" width={260} height={224} />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a
              href="https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=next-js-boilerplate"
              target="_blank"
            >
              <img
                src={betterStackLogo.src}
                alt="Better Stack"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextlessjs.com">
              <img
                src={nextlessLogo.src}
                alt="React SaaS Boilerplate Next.js"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
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
              href="https://turso.tech/?utm_source=nextjsstarterbp"
              target="_blank"
            >
              <img
                src={tursoLogo.src}
                alt="SQLite Developer Experience"
                width={260}
                height={224}
              />
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
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
