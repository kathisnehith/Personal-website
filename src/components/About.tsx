export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <div className="responsive-container">
        <h2 className="section-title">About me</h2>
        <div className="relative w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
          <div className="relative aspect-[16/9] md:aspect-[18/5]">
            <picture>
            {/* Mobile image */}
            <source
              media="(max-width: 768px)"
              srcSet="/mobile_aboutme.png"
              className="w-full aspect-[4/3] object-cover"
            />
            {/* Desktop image */}
            <img
              src="/About Image.png"
              alt="About"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 1024px) 90vw,
                     1800px"
            />
          </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
