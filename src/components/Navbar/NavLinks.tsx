import { Link } from '../Link';

interface NavLinksProps {
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavLinks({ isMobile, onClick }: NavLinksProps) {
  const links = [
    { href: "#about", text: "About me" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Work" },
    { href: "#education", text: "Education" },
    { href: "#contact", text: "Contact Me" },
  ];

  return (
    <div className={`flex ${isMobile ? 'flex-col items-center gap-8' : 'items-center gap-6 lg:gap-8'}`}>
      {links.map((link) => (
        <Link 
          key={link.href} 
          href={link.href}
          onClick={onClick}
          isMobile={isMobile}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}