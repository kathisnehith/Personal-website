import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  { 
    id: 1, 
    image: '/autism_p.png',
    link: 'https://github.com/kathisnehith/Autism-Behavior-Recognition-ML'
  },
  { 
    id: 2, 
    image: '/medicare_p.jpg',
    link: 'https://github.com/kathisnehith/Medicare_IP_hospital-Analysis-Viz'
  },
  { 
    id: 3, 
    image: '/nyc_p.jpg',
    link: 'https://github.com/kathisnehith/NYC311-requests-ETL-pipeline'
  },
  { 
    id: 4, 
    image: '/visionclaims_p.jpg',
    link: 'https://github.com/kathisnehith/Medicare-claims-vision-Analysis'
  },
  { 
    id: 5, 
    image: '/austin_p.jpg',
    link: 'https://github.com/kathisnehith/State-of-Austin-crime-Analysis'
  },
  { 
    id: 6, 
    image: '/linkedinscrape_p.png',
    link: 'https://github.com/kathisnehith'
  },
];

export function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (!isHovered && sliderRef.current) {
      intervalId = setInterval(() => {
        const cardWidth = sliderRef.current?.firstElementChild?.clientWidth ?? 442;
        const newScrollLeft = (sliderRef.current?.scrollLeft || 0) + cardWidth;
        const maxScroll = (sliderRef.current?.scrollWidth || 0) - (sliderRef.current?.clientWidth || 0);

        if (newScrollLeft >= maxScroll - 100) {
          if (sliderRef.current) sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current?.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth ?? 442;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      const newScrollLeft = sliderRef.current.scrollLeft + scrollAmount;
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      
      if (newScrollLeft >= maxScroll - 100) {
        sliderRef.current.scrollLeft = 0;
      }
      else if (newScrollLeft <= 0) {
        sliderRef.current.scrollLeft = maxScroll;
      }
      else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="responsive-container">
        <h2 className="section-title">Explore the Projects</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {infiniteProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${index}`}
                {...project}
                index={index}
              />
            ))}
          </div>
          
          <div className="flex justify-end gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-5 md:mt-6">
            <button
              onClick={() => scroll('left')}
              className="bg-white/30 hover:bg-white/40 rounded-full p-1.5 sm:p-2 transition-all hover:scale-110 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="bg-white/30 hover:bg-white/40 rounded-full p-1.5 sm:p-2 transition-all hover:scale-110 shadow-lg shadow-black/20 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
