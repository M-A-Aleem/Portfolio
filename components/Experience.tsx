import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, Leaf } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Background subtle texture/foliage could go here if needed, keeping it clean for now */}

      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-[#3E2723] mb-16 flex items-center relative z-10">
          <span className="bg-[#6B8E23] w-10 h-10 rounded-full mr-4 flex items-center justify-center shadow-lg">
            <Leaf className="text-[#FEFBEA]" size={20} />
          </span>
          EXPERIENCE
        </h2>

        <div className="space-y-16 relative">

          {/* Tree Branch Timeline (Desktop) */}
          <div className="hidden md:block absolute left-[20%] top-4 bottom-0 w-3 bg-[#5D4037] rounded-full shadow-inner" style={{ backgroundImage: 'linear-gradient(90deg, #4E342E 0%, #6D4C41 50%, #4E342E 100%)' }}>
            {/* Branch texture details */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')]"></div>
          </div>

          {EXPERIENCE_DATA.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex gap-16 group items-start">
                {/* Left: Meta */}
                <div className="md:w-1/5 flex flex-col md:items-end md:text-right relative pt-2">
                  {/* Logo */}
                  {job.logo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="mb-4 bg-white p-2 rounded-xl shadow-md border border-[#8FBC8F]/20 hidden md:block transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-[#6B8E23]/40 z-20 relative"
                    >
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Leaf Node Marker */}
                  <div className="hidden md:flex absolute right-[-41px] top-3 z-10 items-center justify-center w-8 h-8 bg-[#8FBC8F] rounded-full border-2 border-[#556B2F] group-hover:bg-[#6B8E23] group-hover:scale-110 transition-all shadow-md">
                    <Leaf size={14} className="text-[#FEFBEA] fill-current" />
                  </div>

                  {/* Small connecting twig */}
                  <div className="hidden md:block absolute right-[-24px] top-7 w-6 h-1 bg-[#5D4037] z-0" />

                  <h3 className="text-2xl font-bold text-[#3E2723] font-serif leading-none mb-2">{job.company.split(' ')[0]}</h3>
                  <span className="text-[#6D4C41] font-semibold text-sm flex items-center md:justify-end gap-2 bg-[#F1F8E9] md:bg-transparent py-1 px-2 rounded-lg md:p-0 w-fit md:w-auto">
                    <Calendar size={14} />
                    {job.period}
                  </span>
                </div>

                {/* Right: Content */}
                <div className="md:w-4/5 relative">
                  <div className="ghibli-card p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-[#8FBC8F]/30 bg-[#FDFCF5]/95 relative overflow-hidden group-hover:-translate-y-1 duration-300">
                    {/* Decorative corner leaf */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#C5E1A5] rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform"></div>

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-[#334D2B] mb-1 relative z-10">{job.role}</h4>
                        <div className="text-[#6D4C41] text-sm font-medium relative z-10">{job.company}</div>
                      </div>

                      {/* Mobile Logo Fallback */}
                      {job.logo && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                          className="md:hidden bg-white p-1 rounded-lg border border-[#8FBC8F]/20 transition-all duration-300 hover:scale-110 hover:shadow-md"
                        >
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-10 h-10 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </motion.div>
                      )}
                    </div>

                    <p className="text-[#4E342E] leading-relaxed mb-6 relative z-10">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2 relative z-10">
                      {job.technologies.map((tech, tIndex) => (
                        <span key={tIndex} className="px-3 py-1 bg-[#F1F8E9] text-[#334D2B] rounded-full text-xs font-bold tracking-wide border border-[#C5E1A5] hover:bg-[#DCEDC8] transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;