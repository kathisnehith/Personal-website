interface ProjectCardProps {
  image: string;
  link: string;
  index: number;
}

export function ProjectCard({ image, link, index }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-none relative rounded-[20px] overflow-hidden group"
      style={{
        width: 'clamp(320px, calc(442 * (100vw / 1920)), 442px)',
        height: 'clamp(470px, calc(650 * (100vw / 1920)), 650px)',
      }}
    >
      <div className="w-full h-full overflow-hidden">
        <img
          src={image}
          alt={`Project ${index + 1}`}
          className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-300"
          sizes="(max-width: 640px) 320px,
                 (max-width: 1024px) 380px,
                 (max-width: 1366px) 420px,
                 442px"
        />
      </div>
    </a>
  );
}