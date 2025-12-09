import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#FDFCF5] p-8 md:p-12 rounded-3xl shadow-xl border border-[#C5E1A5]/50 relative overflow-hidden">
          {/* Decorative tape or texture could go here */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C5E1A5] to-[#F0F4C3] opacity-50"></div>

          <div className="flex items-start gap-6">
            <div className="w-1 h-32 bg-[#6B8E23] rounded-full flex-shrink-0 mt-2 hidden md:block" />
            <div>
              <span className="text-sm font-bold tracking-widest text-[#556B2F] uppercase mb-4 block">About Me</span>
              <p className="text-2xl md:text-4xl text-[#3E2723] leading-relaxed font-medium">
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;