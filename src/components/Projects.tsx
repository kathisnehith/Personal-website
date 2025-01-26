import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { id: 1, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97', link: 'https://example.com/project1' },
  { id: 2, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', link: 'https://example.com/project2' },
  { id: 3, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97', link: 'https://example.com/project3' },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold font-sans mb-8">Explore the Projects</h2>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
          >
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[400px] h-[300px] relative rounded-[20px] overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <img
                  src={`${project.image}?w=400&h=300&auto=format&fit=crop`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
          
          {isHovered && (
            <>
              <button
                onClick={() => scroll('left')}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );