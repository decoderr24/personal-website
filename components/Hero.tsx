import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50); // Speed of typing
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 25;
      const y = (e.clientY - innerHeight / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* Animated Astrological Rings Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-20">
        {/* Ring 1 - Large Slow */}
        <motion.div 
          style={{ x: moveX, y: moveY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-dashed border-indigo-500/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
           <div className="w-[790px] h-[790px] border border-white/5 rounded-full" />
        </motion.div>

        {/* Ring 2 - Medium Reverse */}
        <motion.div 
          style={{ x: moveX, y: moveY }}
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] border-2 border-indigo-400/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -top-2" />
        </motion.div>

        {/* Ring 3 - Small Fast */}
        <motion.div 
          style={{ x: moveX, y: moveY }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[400px] h-[400px] border border-dotted border-purple-500/40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Floating Orbs */}
      <motion.div style={{ y: y1, x: moveX }} className="absolute right-[5%] top-[20%] w-[400px] h-[400px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <motion.div style={{ y: y2, x: moveY }} className="absolute left-[5%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          >
            <span className="text-indigo-300 font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"/>
              System Online
            </span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 font-mono relative">
            RIFKY <span className="relative inline-block">
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50 bg-clip-text text-transparent" aria-hidden="true">BINTANG</span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">BINTANG</span>
            </span>
          </h1>
          
          <div className="h-8 mb-6 flex justify-center items-center">
             <p className="text-xl md:text-2xl text-gray-300 font-light font-mono">
               <TypewriterText text="Architecting Intelligence in the Void." delay={1000} />
             </p>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-gray-400 font-light leading-relaxed"
          >
             Deep Learning enthusiast and ML Engineer. Specialized in Computer Vision and Natural Language Processing, 
             dedicated to building scalable AI solutions and exploring the frontiers of machine intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5 }}
            className="mt-10 flex justify-center gap-6"
          >
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#818cf8", rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 text-gray-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                title={social.label}
              >
                <social.icon size={24} strokeWidth={1.5} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-indigo-400" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;