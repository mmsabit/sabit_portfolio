import { useState, useEffect } from 'react';




const words = [
  'Web Designer',
  'Web Developer',
  'Front End Developer',
  'Full Stack Developer',
  'MEARN Stack Developer',
];

export const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullWord.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative bg-[url(/img/Hero-bg.png)] bg-center bg-cover min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Profile Image */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-start px-6 lg:px-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/img/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <h3 className="text-white text-2xl sm:text-3xl font-light mb-2">
              I'm
            </h3>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-stroke-white tracking-tight leading-none mb-3"
            >
              M M. Sabit
            </h1>
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white tracking-wide">
                {currentText}
              </span>
              <span className="inline-block w-0.75 h-8 sm:h-10 bg-white ml-1 animate-pulse"></span>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 sm:pt-10">
              <a
                href="#contact"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-sm font-semibold text-base transition-all duration-300 shadow-sm"
              >
                Download CV
              </a>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
