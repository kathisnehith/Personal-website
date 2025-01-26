import { useEffect, useState } from 'react';

const HERO_IMAGES = {
  mobile: "/mobile_hero_image.png", // Replace with your mobile hero image
  desktop: "/hero_image.png", // Replace with your desktop hero image
};

export function Hero() {
  const [heroImage, setHeroImage] = useState(HERO_IMAGES.desktop);

  useEffect(() => {
    const handleResize = () => {
      setHeroImage(window.innerWidth <= 768 ? HERO_IMAGES.mobile : HERO_IMAGES.desktop);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-[100svh] pt-16 sm:pt-20 md:pt-24">
      <div className="responsive-container">
        <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
          <div className="relative w-full h-[calc(100svh-4rem)] sm:h-[calc(100svh-5rem)] md:h-[calc(100svh-6rem)]">
            <img
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 90vw,
                     (max-width: 1440px) 85vw,
                     1800px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
