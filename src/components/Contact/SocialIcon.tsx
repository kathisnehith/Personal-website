interface SocialIconProps {
  icon: string;
  title: string;
  link: string;
  rotation: string;
}

export function SocialIcon({ icon, title, link, rotation }: SocialIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center ${rotation} transition-transform hover:scale-110`}
    >
      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl bg-white/10 overflow-hidden">
        <img 
          src={icon} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <span className="text-xs lg:text-sm mt-2">{title}</span>
    </a>
  );
}