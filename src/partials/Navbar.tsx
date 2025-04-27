import React, { useEffect, useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { CiSun } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';
import { PiMoonStarsLight } from 'react-icons/pi';

// Import your custom logo component
import { CustomLogo } from '../components/CustomLogo';

const Navbar = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0  top-0 z-50 border-neutral-800 transition ease-in-out ${
          isScrolled
            ? 'border-b bg-neutral-900/95 backdrop-blur-md'
            : 'border-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <CustomLogo
                textColor="from-emerald-500 to-emerald-500 bg-gradient-to-r bg-clip-text text-transparent"
                icon={
                  // <svg
                  //   className="mr-1.5 mt-1 h-8 w-8 fill-current text-emerald-500 transition-colors duration-200 hover:text-emerald-600"
                  //   xmlns="http://www.w3.org/2000/svg"
                  //   viewBox="0 0 24 24"
                  // >
                  //   <path d="M8.5 3.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm4 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm6 2a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm-2 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm-6 3a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                  //   <path d="M16.4 16.1c-.6.6-1.4 1-2.3 1.1-.9.1-1.8-.1-2.6-.6l-6.7-4.2c-.4-.3-.7-.6-.9-1-.3-.5-.4-1.1-.2-1.6.1-.6.5-1.1 1-1.4l6.8-4.2c.8-.5 1.7-.7 2.6-.6.9.1 1.7.5 2.3 1.1l.7.7-1.2 1.2-.7-.7c-.4-.4-.8-.6-1.3-.7-.5 0-1 .1-1.4.3L6.7 11c-.2.1-.3.3-.3.4v.2l6.7 4.2c.4.3.9.3 1.4.3.5 0 1-.3 1.3-.7l.7-.7 1.2 1.2-.7.7-.6-.5z" />
                  // </svg>
                  <img
                    className="mr-2.5 h-6 w-6 rounded-full border border-emerald-700/75 bg-neutral-700/80 object-cover object-center opacity-100 ring-1 ring-neutral-700 transition duration-300 hover:ring-2"
                    src="/assets/images/portrait_nobg.png"
                    alt="Avatar image"
                    loading="lazy"
                  />
                }
                name="Binyam Mamo"
              />
            </a>

            {/* Contact Button */}
            <button
              onClick={toggleContactModal}
              className="hidden items-center gap-2 rounded-lg border border-neutral-900 bg-emerald-600 px-4 py-2 text-white ring-0 ring-emerald-800 transition ease-in-out hover:bg-emerald-700 hover:ring-2 md:flex"
            >
              <BiMessageDetail className="mt-0.5 text-xl" />
              <span>Contact Me</span>
            </button>
            <BiMessageDetail
              onClick={toggleContactModal}
              className="flex text-2xl text-emerald-500 md:hidden"
            />
          </div>
        </div>
      </nav>

      {/* Floating Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 rounded-full border border-neutral-700/50 bg-neutral-800/50 p-3 shadow-lg transition-all duration-200 hover:border-emerald-700/50 hover:bg-neutral-700/50"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? (
          <CiSun className="h-5 w-5" />
        ) : (
          <PiMoonStarsLight className="h-5 w-5" />
        )}
      </button>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-all duration-300">
          <div className="w-full max-w-md rounded-xl border border-neutral-700 bg-neutral-800 p-6 shadow-xl transition-all duration-300">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
              <button
                onClick={toggleContactModal}
                className="rounded-full p-2 transition-colors duration-200 hover:bg-neutral-700/50"
              >
                <FaTimes className="h-5 w-5 text-neutral-400 hover:text-white" />
              </button>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium text-neutral-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-all duration-200 placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-neutral-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-all duration-200 placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-white transition-all duration-200 placeholder:text-neutral-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 px-4 py-3 font-medium text-white transition ease-in-out hover:from-emerald-600 hover:to-emerald-800 hover:opacity-90"
                >
                  <BiMessageDetail className="mt-0.5 text-xl" />
                  <span>Send Message</span>
                </button>
                <button
                  type="button"
                  onClick={toggleContactModal}
                  className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 font-medium text-white transition-all duration-200 hover:bg-neutral-700 sm:w-auto"
                >
                  Cancel
                </button>
              </div>

              <div className="mt-4 text-center text-sm text-neutral-400">
                I'll get back to you as soon as possible!
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export { Navbar };
