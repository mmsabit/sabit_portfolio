import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';

interface SkillItem {
  name: string;
  percent: number;
  colorClass: string;
}

const leftSkills: SkillItem[] = [
  { name: 'HTML', percent: 95, colorClass: 'bg-[#0BCEAF]' },
  { name: 'CSS', percent: 85, colorClass: 'bg-[#ffc107]' },
  { name: 'PHP', percent: 90, colorClass: 'bg-[#dc3545]' },
];

const rightSkills: SkillItem[] = [
  { name: 'Javascript', percent: 90, colorClass: 'bg-[#dc3545]' },
  { name: 'Angular JS', percent: 95, colorClass: 'bg-[#343a40]' },
  { name: 'Wordpress', percent: 85, colorClass: 'bg-[#17a2b8]' },
];

export const Skills: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderSkill = (skill: SkillItem) => (
    <div key={skill.name} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-sm sm:text-base text-[#343a40]">{skill.name}</span>
        <span className="font-bold text-sm sm:text-base text-[#343a40]">{skill.percent}%</span>
      </div>
      <div className="w-full bg-[#e9ecef] rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${skill.colorClass}`}
          style={{ width: animate ? `${skill.percent}%` : '0%' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skill" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader bgTitle="Skills" frontTitle="My Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>{leftSkills.map(renderSkill)}</div>
          <div>{rightSkills.map(renderSkill)}</div>
        </div>
      </div>
    </section>
  );
};
