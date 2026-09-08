import { motion } from 'framer-motion';

/**
 * PageHero — mirrors the home Hero design for inner pages.
 * Pass `image` (imported asset or URL path) and optional `position` for object-position.
 */
const PageHero = ({ image, alt = 'The Kamala Silks', position = 'object-center' }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#24140e] pt-20 md:pt-24">
      <div className="relative mx-auto w-full overflow-hidden shadow-2xl">
        <motion.img
          src={image}
          alt={alt}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={`block aspect-[16/7] w-full object-cover sm:aspect-[16/6] ${position}`}
        />
        {/* Bottom fade so it blends into the page below */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default PageHero;
