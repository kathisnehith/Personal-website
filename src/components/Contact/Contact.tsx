import { useState } from 'react';
import { SocialIcon } from './SocialIcon';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('(210) 799-8828');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-[42px] font-semibold mb-2 lg:mb-4">
              Let's Connect or Collaborate?
            </h2>
            <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8">
              Always excited for an open conversation, please do not hesitate!!
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 lg:p-5 rounded-[40px] bg-gradient-to-r from-[#1CC839] to-[#1CC839]/25">
                <span className="text-xl lg:text-2xl ml-4 text-black font-medium">(210) 799-8828</span>
                <button
                  onClick={handleCopyPhone}
                  className="px-6 lg:px-8 py-3 rounded-[32px] bg-[#000000] hover:bg-black/90 transition-colors text-lg text-white"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              
              <div className="flex items-center justify-between p-4 lg:p-5 rounded-[40px] bg-gradient-to-r from-[#306FDB] to-[#306FDB]/25">
                <span className="text-xl lg:text-2xl ml-4 truncate text-white">
                  kathisnehithreddy@gmail.com
                </span>
                <a
                  href="mailto:kathisnehithreddy@gmail.com"
                  className="px-6 lg:px-8 py-3 rounded-[32px] bg-[#000000] hover:bg-black/90 transition-colors whitespace-nowrap text-lg text-white"
                >
                  Mail me!
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-semibold mt-8 mb-6 text-center">
              Find Me & My Work Online
            </h3>
            <div className="flex justify-center gap-6 lg:gap-8">
              <SocialIcon
                icon="https://images.unsplash.com/photo-1611944212129-29977ae1398c"
                title="LinkedIn"
                link="#"
                rotation="-rotate-3"
              />
              <SocialIcon
                icon="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb"
                title="GitHub"
                link="#"
                rotation="rotate-2"
              />
              <SocialIcon
                icon="https://images.unsplash.com/photo-1638141986236-19605f25e11e"
                title="Tableau"
                link="#"
                rotation="-rotate-2"
              />
              <SocialIcon
                icon="https://images.unsplash.com/photo-1633409361618-c73427e4e206"
                title="Sample"
                link="#"
                rotation="rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}