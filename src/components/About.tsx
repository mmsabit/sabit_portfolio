import React from 'react';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  const details = [
    { label: 'Name', value: 'Kate Winslet' },
    { label: 'Birthday', value: '1 April 1990' },
    { label: 'Degree', value: 'Master' },
    { label: 'Experience', value: '10 Years' },
    { label: 'Phone', value: '+012 345 6789' },
    { label: 'Email', value: 'info@example.com' },
    { label: 'Address', value: '123 Street, New York, USA' },
    { label: 'Freelance', value: 'Available' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader bgTitle="About" frontTitle="About Me" />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-5/12">
            <div className="overflow-hidden rounded shadow-lg">
              <img
                src="/img/about.jpg"
                alt="About Kate Winslet"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>

          {/* Bio Details */}
          <div className="w-full lg:w-7/12 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#343a40] mb-4">
              UI/UX Designer & Web Developer
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
              {details.map((item) => (
                <div key={item.label} className="text-base">
                  <span className="font-bold text-[#343a40]">{item.label}: </span>
                  <span className="text-gray-500">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="border border-[#0BCEAF] text-[#0BCEAF] hover:bg-[#0BCEAF] hover:text-white px-7 py-2.5 rounded-sm font-medium transition-all duration-300"
              >
                Hire Me
              </a>
              <a
                href="#qualification"
                className="border border-[#0BCEAF] text-[#0BCEAF] hover:bg-[#0BCEAF] hover:text-white px-7 py-2.5 rounded-sm font-medium transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
