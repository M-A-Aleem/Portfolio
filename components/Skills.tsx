
import React from 'react';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="w-8 h-8 text-[#556B2F]" />;
      case 'cloud': return <Cloud className="w-8 h-8 text-[#556B2F]" />;
      case 'code': return <Code className="w-8 h-8 text-[#556B2F]" />;
      default: return <Layers className="w-8 h-8 text-[#556B2F]" />;
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center md:text-left">
           <h2 className="text-4xl font-bold text-[#3E2723] mb-2 font-serif">Tech Stack</h2>
           <div className="h-1 w-20 bg-[#6B8E23] rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="ghibli-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
            >
               {/* Decorative Gradient Blob */}
               <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 bg-[#CDDC39] group-hover:scale-150 transition-transform duration-700`} />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5, type: "spring" }}
                  className="bg-[#F1F8E9] p-3 rounded-xl shadow-inner border border-[#8FBC8F]/30"
                >
                  {getIcon(category.icon)}
                </motion.div>
                <h3 className="text-2xl font-bold text-[#334D2B] font-serif leading-tight">{category.title}</h3>
              </div>

              <p className="text-[#5D4037] mb-6 leading-relaxed relative z-10 font-medium">{category.description}</p>
              
              <div className="relative z-10">
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 + (i * 0.1) }}
                      className="flex items-center text-[#3E2723] font-semibold bg-[#FDFCF5]/60 p-2 rounded-lg border border-[#8FBC8F]/20"
                    >
                      <span className="w-2 h-2 bg-[#6B8E23] rounded-full mr-3" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
