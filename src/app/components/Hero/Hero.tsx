'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    { name: 'Web Development', icon: '💻' },
    { name: 'Mobile Apps', icon: '📱' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'E-commerce', icon: '🛒' },
  ];

  // State to track if component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animated background elements
  const animatedElements = isMounted ? [...Array(20)].map((_, i) => {
    const width = 5 + Math.random() * 10;
    const height = 5 + Math.random() * 10;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const opacity = 0.1 + Math.random() * 0.3;

    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-[#007FFF]"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          left: `${left}%`,
          top: `${top}%`,
          opacity,
          filter: 'blur(1px)',
        }}
        animate={{
          y: [0, (Math.random() - 0.5) * 100],
          x: [0, (Math.random() - 0.5) * 100],
          opacity: [opacity, opacity * 1.5, opacity],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
    );
  }) : [];

  return (
    <section 
      ref={targetRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#001a33] to-[#003366]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {animatedElements}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span className="relative inline-block">
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    className="absolute -inset-1 bg-gradient-to-r from-[#007FFF] to-[#3399FF] rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#3399FF] to-[#66B2FF]">
                Transform Your Ideas
              </span>
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-medium text-gray-300 mt-4 block">
              Into Powerful Digital Experiences
            </span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Custom web and mobile solutions that drive results. Let's build something amazing together.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#3399FF]/50 transition-all duration-300 cursor-default"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 127, 255, 0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-white font-medium">{service.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#007FFF] to-[#3399FF] text-white font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-[#007FFF]/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>Scroll to explore</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
