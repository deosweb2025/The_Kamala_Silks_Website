import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { siteData } from '../../data/siteData';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const slides = siteData.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary flex items-center justify-center group">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Zoom effect on the background image */}
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          
          {/* Base darkening layer for text contrast */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Dynamic Spotlight Vignette (Dark edges, clear center) */}
          <motion.div 
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.95)_100%)] pointer-events-none"
          />

          {/* Subtle Warm Spotlight Glow behind the text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-accent/30 rounded-full blur-[120px]"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center mt-16">
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="px-4 text-center flex flex-col items-center"
            >
              <span className="text-white bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6 inline-block shadow-xl">
                Welcome to The Kamala Silks
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                {slides[current].title}
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 mt-12"
        >
          <NavLink 
            to="/products"
            className="px-10 py-4 bg-accent text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-colors duration-300 shadow-xl shadow-accent/20 text-lg uppercase tracking-wider hover:scale-105 active:scale-95"
          >
            Explore Collection
          </NavLink>
          <NavLink 
            to="/contact"
            className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-xl text-lg uppercase tracking-wider hover:scale-105 active:scale-95"
          >
            Enquire Now
          </NavLink>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center text-white/70"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === idx ? 'w-12 bg-accent' : 'w-4 bg-white/40 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
