import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-[#1B261B] text-white relative overflow-hidden">
      {/* Deep Forest Night */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D180D] via-[#1B261B] to-[#2E3B2E] opacity-95"></div>

      {/* Fireflies / Magic Dust */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#CDDC39] blur-[2px]"
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-center gap-6 mb-20 justify-center">
          <div className="h-px bg-[#8FBC8F]/30 w-12 md:w-32"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#C5E1A5] to-[#F0F4C3]">
            Selected Works
          </h2>
          <div className="h-px bg-[#8FBC8F]/30 w-12 md:w-32"></div>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              {/* Image Side - Floating Frame */}
              <motion.div
                className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#556B2F] to-[#8FBC8F] rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-2xl aspect-video border border-[#C5E1A5]/20 shadow-2xl">
                  <div className="absolute inset-0 bg-[#0D180D]/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''} space-y-6`}>
                <div>
                  <span className="text-[#C5E1A5] font-mono text-sm tracking-widest mb-2 block">PROJECT {project.id}</span>
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-[#F1F8E9] group-hover:text-[#CDDC39] transition-colors">{project.title}</h3>
                </div>

                <h4 className="text-xl text-[#9CCC65] italic font-medium">{project.subtitle}</h4>

                <p className="text-[#DCE775]/80 leading-relaxed text-lg font-light">
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-3 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-[#334D2B]/50 border border-[#556B2F] px-4 py-2 rounded-full text-xs text-[#DCEDC8] font-bold tracking-wide hover:bg-[#556B2F] transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;