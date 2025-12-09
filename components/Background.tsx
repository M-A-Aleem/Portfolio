import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Sky Gradient - Warm/Soft Blue to Cream */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A4C8E0] via-[#E6F3F5] to-[#FDFCF5]" />

      {/* Sun/Light Glare */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-60" />

      {/* Clouds - Warmer White */}
      <motion.div
        className="absolute top-[5%] left-0 w-full h-64 opacity-80"
        initial={{ x: "-10%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-64 h-24 bg-[#FFFDE7] rounded-full blur-3xl" />
        <div className="absolute top-12 left-96 w-96 h-32 bg-white rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Soot Sprites/Leaves */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[1px] bg-[#556B2F] opacity-20"
          style={{
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background Mountains (Blue-Green Mist) */}
      <div className="absolute bottom-48 left-0 right-0 h-96 w-full opacity-60">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
             <path fill="#7da186" d="M0,256L60,245.3C120,235,240,213,360,208C480,203,600,213,720,229.3C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      {/* Mid-Ground Forest/Trees (Olive) */}
      <div className="absolute bottom-24 left-0 right-0 h-64 w-full">
         <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
            <path fill="#6B8E23" fillOpacity="0.8" d="M0,288L40,272C80,256,160,224,240,218.7C320,213,400,235,480,245.3C560,256,640,256,720,234.7C800,213,880,171,960,165.3C1040,160,1120,192,1200,208C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C320,320,240,320,160,320L0,320Z"></path>
         </svg>
      </div>

      {/* Foreground Hills (Lighter Olive) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 w-full">
         <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
            <path fill="#808000" fillOpacity="0.6" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>
      
      {/* Foreground Left: Detailed Bush/Ferns */}
      <div className="absolute bottom-0 left-[-2%] w-64 md:w-96 h-80 z-0 opacity-90 text-[#556B2F]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
          <path d="M10,200 Q30,120 60,160 T100,140 Q80,180 120,170 T160,150 Q140,190 190,200 Z" />
          <path d="M0,200 Q20,100 50,150 T90,120 Q120,160 150,180" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
           {/* Stylized Leaves */}
          <circle cx="30" cy="140" r="10" />
          <circle cx="60" cy="120" r="12" />
          <circle cx="90" cy="150" r="8" />
          <ellipse cx="130" cy="180" rx="20" ry="10" transform="rotate(-15 130 180)" />
        </svg>
      </div>

       {/* Foreground Right: Detailed Bush/Ferns */}
       <div className="absolute bottom-0 right-[-2%] w-72 md:w-[30rem] h-96 z-0 opacity-90 text-[#334D2B]">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
          <path d="M200,200 Q170,100 140,150 T100,120 Q110,170 80,180 T30,160 Q50,190 10,200 Z" />
          <circle cx="170" cy="140" r="12" />
          <circle cx="140" cy="110" r="15" />
          <circle cx="100" cy="140" r="10" />
        </svg>
      </div>

      {/* Top Hanging Vines (Left) */}
      <div className="absolute top-0 left-10 w-32 h-64 z-0 opacity-80 text-[#6B8E23]">
        <svg viewBox="0 0 100 200" className="w-full h-full fill-current">
           <path d="M50,0 Q60,50 40,80 T60,150 Q50,180 55,200 L53,200 Q45,180 55,150 T35,80 Q55,50 48,0 Z" />
           <circle cx="40" cy="80" r="5" />
           <circle cx="60" cy="150" r="4" />
           <circle cx="55" cy="200" r="3" />
        </svg>
      </div>

      {/* Top Hanging Vines (Right) */}
      <div className="absolute top-0 right-20 w-24 h-48 z-0 opacity-70 text-[#556B2F]">
        <svg viewBox="0 0 100 200" className="w-full h-full fill-current">
           <path d="M50,0 Q40,40 60,70 T40,130 Q50,160 45,180 L47,180 Q55,160 45,130 T65,70 Q45,40 52,0 Z" />
           <ellipse cx="60" cy="70" rx="6" ry="3" transform="rotate(30 60 70)" />
           <ellipse cx="40" cy="130" rx="5" ry="3" transform="rotate(-30 40 130)" />
        </svg>
      </div>
    </div>
  );
};

export default Background;