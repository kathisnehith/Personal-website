export function Colleges() {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20">
      <div className="responsive-container">
        <h2 className="section-title">My College's</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 opacity-80 hover:opacity-100"
            >
              <div className="aspect-[16/9]">
                <img
                  src={`/edu_${index}.png`}
                  alt={`College ${index}`}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 90vw,
                         (max-width: 1440px) 45vw,
                         800px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
