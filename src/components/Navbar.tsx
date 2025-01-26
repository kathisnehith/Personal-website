import { Camera, Plus } from 'lucide-react';
import { Link } from './Link';
import { LOGO_URL } from '../assets/images';

export function Navbar() {
  return (
    <div className="fixed top-0 w-full flex justify-center items-center px-6 py-4 bg-black/30 backdrop-blur-md z-50">
      {/* Logo */}
      <img
        src={LOGO_URL}
        alt="Logo"
        className="h-[50px] w-auto mr-8"
      />
      
      <nav className="flex items-center gap-4 px-6 py-3 bg-zinc-800/50 backdrop-blur-md rounded-full">
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="#about">About me</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#education">Education</Link>
          <Link href="#contact">Contact Me</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pl-4">
          <button className="nav-button">Resume</button>
          <button className="nav-button">LinkedIn</button>
          <button className="icon-button">
            <Plus className="h-5 w-5" />
          </button>
          <button className="icon-button">
            <Camera className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  );
}