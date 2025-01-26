interface LogoProps {
  onClick: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Logo"
      className="h-[40px] md:h-[50px] w-auto cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    />
  );
}
