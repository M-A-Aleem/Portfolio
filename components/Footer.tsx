import React from 'react';
import { INTRO_DATA, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2723] text-[#F1F8E9] py-12 border-t border-[#5D4037] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#556B2F] via-[#8FBC8F] to-[#CDDC39]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[#C5E1A5] font-bold uppercase tracking-widest text-xs mb-4">Get in touch</h4>
            <a href={`mailto:${SOCIAL_LINKS.find(l => l.platform === 'Email')?.url.replace('mailto:', '')}`} className="block text-lg font-serif hover:text-[#CDDC39] transition-colors break-words">
              {SOCIAL_LINKS.find(l => l.platform === 'Email')?.url.replace('mailto:', '')}
            </a>
            <p className="mt-2 text-xl font-bold">+91 8639758295</p>
          </div>

          <div>
            <h4 className="text-[#C5E1A5] font-bold uppercase tracking-widest text-xs mb-4">Location</h4>
            <p className="font-bold text-lg">{INTRO_DATA.name}</p>
            <p className="text-[#A1887F]">{INTRO_DATA.location}</p>
          </div>

          <div>
            <h4 className="text-[#C5E1A5] font-bold uppercase tracking-widest text-xs mb-4">Connect</h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D7CCC8] hover:text-white hover:pl-2 transition-all flex items-center gap-2"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5E1A5] font-bold uppercase tracking-widest text-xs mb-4">Menu</h4>
            <ul className="space-y-2 text-[#D7CCC8]">
              <li><a href="#home" className="hover:text-white cursor-pointer transition-colors block">Home</a></li>
              <li><a href="#about" className="hover:text-white cursor-pointer transition-colors block">About</a></li>
              <li><a href="#projects" className="hover:text-white cursor-pointer transition-colors block">Projects</a></li>
              <li><a href="#experience" className="hover:text-white cursor-pointer transition-colors block">Experience</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-[#5D4037]/50">
          <h1 className="text-[12vw] leading-none font-black text-[#2E1C18] select-none tracking-tighter mix-blend-screen opacity-50">ALEEM</h1>
          <p className="text-[#8D6E63] text-sm mt-4">© 2025 Mohammed Abdul Aleem. Inspired by Studio Ghibli.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;