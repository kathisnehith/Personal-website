interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  isMobile?: boolean;
}

export function Link({ href, children, onClick, isMobile }: LinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        ${isMobile 
          ? 'text-2xl text-white hover:text-blue-400' 
          : 'text-base lg:text-lg text-gray-300 hover:text-white whitespace-nowrap'
        }
        transition-colors duration-200 font-medium
      `}
    >
      {children}
    </a>
  );
}