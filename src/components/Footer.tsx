import React from 'react';

export const Footer: React.FC = () => {
  const socials = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-facebook-f', href: '#' },
    { icon: 'fab fa-linkedin-in', href: '#' },
    { icon: 'fab fa-instagram', href: '#' },
  ];

  return (
    <footer className="bg-primary text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-11 h-11 rounded-full bg-white text-dark hover:text-primary hover:shadow-lg flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 mb-4 text-sm font-medium">
          <a href="#" className="hover:underline text-white">
            Privacy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline text-white">
            Terms
          </a>
          <span>|</span>
          <a href="#" className="hover:underline text-white">
            FAQs
          </a>
          <span>|</span>
          <a href="#" className="hover:underline text-white">
            Help
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm font-light text-white/95">
          &copy;{' '}
          <a href="#" className="font-bold underline hover:text-white">
            Domain Name
          </a>
          . All Rights Reserved. Designed by{' '}
          <a
            href="https://htmlcodex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-white"
          >
            HTML Codex
          </a>
        </p>
      </div>
    </footer>
  );
};
