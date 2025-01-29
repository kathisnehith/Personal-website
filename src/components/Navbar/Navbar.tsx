import { useCallback, useState } from 'react';
import { Menu, MoreHorizontal } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { Logo } from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="fixed top-0 w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-[120px]">
        <div className="flex items-center h-16 sm:h-20">
          {/* Logo */}
          <Logo onClick={scrollToTop} />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-6 px-6 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full">
              <NavLinks />
              
              {/* Action Buttons & Icons */}
              <div className="flex items-center gap-4 pl-4 border-l border-zinc-700">
                <a 
                  href="https://drive.google.com/file/d/1s9hYGu2h1LIK1h8Z_bc7kdkcyHXbbcD5/view?usp=sharing"
                  className="nav-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <a 
                  href="https://www.linkedin.com/in/snehithreddykathi/"
                  className="nav-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://public.tableau.com/app/profile/snehith.reddy.kathi"
                  className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/tableau_icon.png" 
                    alt="Tableau Profile"
                    className="w-full h-full object-cover"
                  />
                </a>
                <a 
                  href="https://github.com/kathisnehith"
                  className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/githublogo.png" 
                    alt="GitHub Profile"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto lg:hidden">
            <a 
              href="https://drive.google.com/file/d/1s9hYGu2h1LIK1h8Z_bc7kdkcyHXbbcD5/view?usp=sharing"
              className="nav-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/snehithreddykathi/"
              className="nav-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://public.tableau.com/app/profile/snehith.reddy.kathi"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/tableau_icon.png" 
                alt="Tableau Profile"
                className="w-full h-full object-cover"
              />
            </a>
            <a 
              href="https://github.com/kathisnehith"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden hover:opacity-80 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/githublogo.png" 
                alt="GitHub Profile"
                className="w-full h-full object-cover"
              />
            </a>
            <button 
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <MoreHorizontal size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col items-center pt-8 gap-6">
              <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
