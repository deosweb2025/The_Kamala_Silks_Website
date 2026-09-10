import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#24140e] pt-20 md:pt-24">
      <div className="relative mx-auto w-full overflow-hidden shadow-2xl group aspect-[16/6] md:aspect-auto md:h-[calc(100vh-96px)]">
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={slides[current]}
            alt={`The Kamala Silks collection banner ${current + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1.5 md:p-2.5 rounded-full transition-all duration-200 backdrop-blur-sm opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-1.5 md:p-2.5 rounded-full transition-all duration-200 backdrop-blur-sm opacity-80 md:opacity-0 md:group-hover:opacity-100 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Pagination Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  current === idx
                    ? 'w-6 h-2 bg-[#e8ce7b]'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
