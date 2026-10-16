import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';

interface PortfolioProps {
  onOpenLightbox: (src: string) => void;
}

interface PortfolioItem {
  id: number;
  category: 'first' | 'second' | 'third';
  categoryName: string;
  img: string;
}

const portfolioData: PortfolioItem[] = [
  { id: 1, category: 'first', categoryName: 'Design', img: '/img/portfolio-1.jpg' },
  { id: 2, category: 'second', categoryName: 'Development', img: '/img/portfolio-2.jpg' },
  { id: 3, category: 'third', categoryName: 'Marketing', img: '/img/portfolio-3.jpg' },
  { id: 4, category: 'first', categoryName: 'Design', img: '/img/portfolio-4.jpg' },
  { id: 5, category: 'second', categoryName: 'Development', img: '/img/portfolio-5.jpg' },
  { id: 6, category: 'third', categoryName: 'Marketing', img: '/img/portfolio-6.jpg' },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Design', value: 'first' },
  { label: 'Development', value: 'second' },
  { label: 'Marketing', value: 'third' },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader bgTitle="Gallery" frontTitle="My Portfolio" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
                className={`px-4 py-1.5 rounded-sm text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0BCEAF] text-white border border-[#0BCEAF]'
                    : 'border border-[#0BCEAF] text-[#0BCEAF] hover:bg-[#0BCEAF] hover:text-white bg-transparent'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded overflow-hidden shadow-sm bg-gray-100 aspect-4/3 cursor-pointer"
              onClick={() => onOpenLightbox(item.img)}
            >
              <img
                src={item.img}
                alt={`Portfolio item ${item.id}`}
                className="w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
              />

              {/* Expanding primary overlay on hover */}
              <div
                className="absolute inset-0 bg-[#0BCEAF]/90 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500 rounded"
                style={{
                  margin: 'auto',
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <i className="fa fa-plus text-white text-5xl transition-transform duration-300 group-hover:scale-110"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
