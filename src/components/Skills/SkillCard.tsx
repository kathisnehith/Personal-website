interface SkillCardProps {
  image: string;
  title: string;
}

export function SkillCard({ image, title }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-[300px] h-[100px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-lg font-medium">{title}</span>
    </div>
  );
}