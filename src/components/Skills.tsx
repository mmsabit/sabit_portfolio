import React, { useEffect, useState } from 'react';
import { SectionHeader } from './SectionHeader';

interface SkillItem {
  id: number;
  image: string;
  name: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<SkillCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        // Fetch from /data/skill.json (served from public/data/skill.json)
        const res = await fetch('/data/skill.json');
        if (!res.ok) {
          // Fallback to explicit localhost URL if needed
          const fallbackRes = await fetch('http://localhost:5173/data/skill.json');
          if (!fallbackRes.ok) {
            throw new Error(`Failed to load skill data (${res.status})`);
          }
          const data: SkillCategory[] = await fallbackRes.json();
          setSkillsData(data);
          return;
        }
        const data: SkillCategory[] = await res.json();
        setSkillsData(data);
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError('Could not load skills data.');
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skill" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader bgTitle="Skills" frontTitle="My Skills" />

        {/* Loading State Skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center animate-pulse h-36"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-3" />
                <div className="w-20 h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-10 text-red-500 font-medium">
            {error}
          </div>
        )}

        {/* Skills Display in Grid Boxes */}
        {!loading && !error && (
          <div className="space-y-12">
            {skillsData.map((catGroup) => (
              <div key={catGroup.category} className="space-y-6 w-full">
                <h3 className="w-full text-lg sm:text-xl justify-center font-bold text-dark flex items-center gap-2.5 pb-2 border-b border-gray-100">
                  {catGroup.category}
                </h3>

                <div className="flex items-center justify-center gap-5">
                  {catGroup.items.map((skill) => (
                    <div
                      key={skill.id}
                      className=" bg-white border border-gray-200/90 hover:border-primary rounded-xl py-1 px-2  sm:py-2 sm:px-4 flex  items-center justify-center text-center shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 gap-4 "
                    >
                      <div className="">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="font-semibold text-sm sm:text-base text-dark group-hover:text-primary transition-colors">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
