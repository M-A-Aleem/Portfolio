import React from 'react';
import { motion } from 'framer-motion';
import { INTRO_DATA, PROFILE_IMAGE, SOCIAL_LINKS } from '../constants';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <Linkedin size={24} />;
      case 'github': return <Github size={24} />;
      case 'email': return <Mail size={24} />;
      default: return <Mail size={24} />;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 lg:order-1 space-y-8 relative z-10"
        >
          <div className="space-y-2">
            <motion.h1
              className="text-6xl md:text-8xl font-black text-[#3E2723] tracking-tighter leading-none font-serif"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              MOHAMMED<br />
              <span className="text-[#6B8E23]">ABDUL</span><br />
              ALEEM
            </motion.h1>
            <motion.div
              className="h-3 w-32 bg-[#808000] rounded-full opacity-80"
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </div>

          <h2 className="text-2xl md:text-3xl text-[#5D4037] font-semibold font-serif italic">
            {INTRO_DATA.role}
          </h2>

          <div className="flex items-center space-x-2 text-[#6D4C41] font-medium">
            <MapPin size={20} className="text-[#556B2F]" />
            <span>{INTRO_DATA.location}</span>
          </div>

          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-[#FDFCF5]/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-[#556B2F] hover:text-[#FEFBEA] hover:-translate-y-1 transition-all duration-300 text-[#556B2F] border border-[#6B8E23]/20"
                aria-label={link.platform}
              >
                {getIcon(link.platform)}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
          {/* Increased size from max-w-md to max-w-xl */}
          <div className="relative w-full max-w-xl aspect-square">
            {/* Decorative Frame - Hand-drawn style */}
            <div className="absolute inset-0 border-[8px] border-[#FEFBEA]/80 rounded-[2.5rem] scale-105 animate-[spin_10s_linear_infinite]" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }} />
            <div className="absolute inset-0 border-[8px] border-[#8FBC8F]/40 rounded-[2.5rem] scale-110 animate-[spin_15s_linear_infinite_reverse]" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />

            <div className="absolute inset-4 bg-[#F0F4C3] rounded-full blur-3xl opacity-60" />

            <img
              src={PROFILE_IMAGE}
              alt="Mohammed Abdul Aleem"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-[#FEFBEA] transform rotate-2 hover:rotate-0 transition-transform duration-500 ease-out"
            />

            <motion.div
              className="absolute -bottom-8 -right-4 bg-[#FDFCF5]/95 backdrop-blur-md p-6 rounded-tl-3xl rounded-br-3xl shadow-xl max-w-xs z-20 border border-[#8FBC8F]/50 hidden md:block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <p className="font-serif italic text-[#3E2723] text-lg">
                "{INTRO_DATA.tagline}"
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;