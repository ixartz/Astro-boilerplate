import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-neutral-800 bg-neutral-900 pt-5">
      <div className="text-center text-sm text-gray-400">
        <div className="mb-2">
          &copy; {currentYear} {AppConfig.site_name}. All rights reserved.
        </div>
        <div>
          Built with <span className="text-emerald-500">♥</span> using Astro &
          React
        </div>
      </div>
    </div>
  );
};

export { Footer };
