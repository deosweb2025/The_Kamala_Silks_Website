import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';

const PageHeader = ({ 
  title, 
  subtitle, 
  bgImage = "/images/pic15.webp",
  badge,
  breadcrumb,
  imageOpacity = 0.65
}) => {
  const currentBreadcrumb = breadcrumb || title;

  return (
    <div className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#1a0f0a] flex items-center justify-center min-h-[360px] md:min-h-[420px]">
      {/* Background Image with subtle zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: imageOpacity }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dual Gradient Overlay: Dark top for navbar contrast, vibrant clear center, smooth bottom transition */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#120a07]/80 via-[#1a0f0a]/35 to-[#120a07]/90 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-radial from-transparent via-[#1a0f0a]/20 to-[#120a07]/75" />

      {/* Subtle Silk Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("/images/texture.webp")' }}
      />

      {/* Golden Warm Spotlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Decorative Gold Top & Bottom Borders */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-widest text-[#e8ce7b]/80 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#e8ce7b]/20"
        >
          <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
          <ChevronRight className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent">{currentBreadcrumb}</span>
        </motion.div>

        {/* Optional Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-3 text-accent font-semibold text-xs uppercase tracking-[0.3em]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
        )}

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tight drop-shadow-md"
        >
          <span className="bg-gradient-to-r from-[#ffffff] via-[#f5e17a] to-[#e8ce7b] bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl text-[#e8ce7b]/90 font-medium max-w-2xl leading-relaxed drop-shadow"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Gold Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mt-6 rounded-full"
        />
      </div>
    </div>
  );
};

export default PageHeader;
