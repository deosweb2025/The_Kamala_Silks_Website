import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/siteData';

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const slides = siteData.heroSlides.map(({ image }) => image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-[#24140e] pt-20 md:pt-24">
      <div className="relative mx-auto w-full overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current]}
            alt={`The Kamala Silks collection banner ${current + 1}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="block aspect-[16/7] w-full object-cover object-center sm:aspect-[16/6]"
          />
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Hero;
