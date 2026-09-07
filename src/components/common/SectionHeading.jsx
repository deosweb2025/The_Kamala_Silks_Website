import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-accent font-semibold tracking-widest uppercase text-sm md:text-base block mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary"
      >
        {title}
      </motion.h2>
      {centered && (
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 w-24 bg-accent mx-auto mt-6 origin-center rounded-full"
        />
      )}
    </div>
  );
};

export default SectionHeading;
