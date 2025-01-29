export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="responsive-container">
        <h2 className="section-title">About me</h2>
        <div className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
          <picture>
            {/* Mobile image - Using a 4:3 aspect ratio for consistency with Skills section */}
            <source
              media="(max-width: 768px)"
              srcSet="/mobile_aboutme.png"
            />
            {/* Desktop image - Maintaining original aspect ratio */}
            <img
              src="/About Image.png"
              alt="About"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 90vw,
                     1800px"
            />
          </picture>
          {/* Container to enforce aspect ratio for mobile */}
          <div className="md:hidden absolute inset-0">
            <div className="w-full h-full" style={{ aspectRatio: '4/3' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
