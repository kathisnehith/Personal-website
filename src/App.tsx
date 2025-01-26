import { About } from './components/About';
import { Colleges } from './components/Colleges';
import { Contact } from './components/Contact/Contact';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="max-w-[1800px] mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Colleges />
        <Contact />
      </div>
    </div>
  );
}