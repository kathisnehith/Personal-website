import { useEffect, useRef } from 'react';

const SKILLS = ['Data Analysis', 'Project Management', 'Strategic Planning', 'Research', 'Decision Making'];

export function Skills() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollText = () => {
      if (textRef.current) {
        textRef.current.scrollLeft += 1.5;
        
        if (textRef.current.scrollLeft >= textRef.current.scrollWidth / 2) {
          textRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scrollText, 20);
    return () => clearInterval(intervalId);
  }, []);

  const renderSkills = (skills: string[], offset: number = 0) => (
    skills.map((skill, index) => (
      <span key={`${skill}-${offset}-${index}`}>
        <span className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 md:mx-8">{skill}</span>
        <span className="text-base sm:text-lg md:text-xl mx-4 sm:mx-6 md:mx-8">•</span>
      </span>
    ))
  );

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20">
      <div className="responsive-container">
        <h2 className="section-title">My Analytical Skills</h2>
        
        <div className="w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-6 md:mb-8">
          <picture>
            {/* Mobile image */}
            <source
              media="(max-width: 768px)"
              srcSet="/mobile_skillsoverview.png"
            />
            {/* Desktop image */}
            <img
              src="/skills overview2.png"
              alt="Skills Overview"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 90vw,
                     1800px"
            />
          </picture>
        </div>

        <div className="relative">
          <div className="absolute left-0 w-12 sm:w-16 md:w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 w-12 sm:w-16 md:w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
          <div
            ref={textRef}
            className="overflow-hidden whitespace-nowrap py-2 sm:py-3 md:py-4"
          >
            <div className="inline-block whitespace-nowrap">
              {renderSkills(SKILLS)}
              {/* Duplicate for seamless loop */}
              {renderSkills(SKILLS, 1)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
