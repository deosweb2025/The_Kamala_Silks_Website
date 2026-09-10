import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { siteData } from '../data/siteData';
import { TrustBanner } from '../components/home/HomeGlimpses';

const storeSareeImages = [
  { src: "/images/pic3.webp", alt: "Katha Stitch Masterpiece Saree in Showroom" },
  { src: "/images/pic1.webp", alt: "Classic Handwoven Matka Silk Saree" },
  { src: "/images/pic7.webp", alt: "Royal Handloom Silk Saree Collection" },
  { src: "/images/pic5.webp", alt: "Premium Floral Painted Silk Saree" },
];

const About = () => {
  const [currentStoreImage, setCurrentStoreImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStoreImage((prev) => (prev + 1) % storeSareeImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <PageHeader 
        title="About Us" 
        subtitle="Our journey, our passion, our tradition." 
        bgImage="/images/about-hero-bg.webp"
        badge="OUR HERITAGE & PASSION"
        breadcrumb="About Us"
      />
      
      {/* Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              {/* Category Subtitle */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-accent" />
                <span className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Our Legacy & Craft</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Preserving the Art of{' '}
                <span className="text-accent relative inline-block">
                  Handwoven Heritage
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-[#f5d87a] to-transparent rounded-full" />
                </span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-secondary/85 leading-relaxed">
                <p>
                  At <strong className="text-primary font-semibold">{siteData.company.name}</strong>, we believe that every thread tells a story. Our journey began with a simple passion: to bring the authentic beauty of handcrafted silk, tasar, and matka directly to those who appreciate true artistry.
                </p>
                
                {/* Highlight callout box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-accent/5 border border-accent/20 my-4">
                  <p className="text-sm sm:text-base text-secondary/90 leading-relaxed">
                    We are specialised primarily in <strong className="text-primary font-semibold">Murshidabad Silk printed saris, Murshidabad Silk raw thaan, Bishnupuri Silk printed saris, Tasar gachi & kethe (printed saris & raw thaan), Garad saris</strong>, and <strong className="text-primary font-semibold">Silk Matka printed sarees</strong>, complemented by our secondary signature collection of authentic handcrafted <strong className="text-primary font-semibold">Katha stitch sarees</strong>.
                  </p>
                </div>

                <p className="text-sm sm:text-base text-secondary/80">
                  Located in the heart of Berhampore, Murshidabad—a region renowned for centuries of royal silk weaving—we are proud to keep this historic craftsmanship vibrant for generations to come.
                </p>
              </div>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100">
                <div className="text-center p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <p className="text-lg sm:text-xl font-heading font-bold text-primary">100%</p>
                  <p className="text-[11px] text-secondary/60 uppercase tracking-wider font-semibold mt-0.5">Pure Silk</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <p className="text-lg sm:text-xl font-heading font-bold text-primary">Katha</p>
                  <p className="text-[11px] text-secondary/60 uppercase tracking-wider font-semibold mt-0.5">Hand Stitch</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-gray-50/80 border border-gray-100">
                  <p className="text-lg sm:text-xl font-heading font-bold text-primary">Certified</p>
                  <p className="text-[11px] text-secondary/60 uppercase tracking-wider font-semibold mt-0.5">Handloom</p>
                </div>
              </div>
            </motion.div>
            
            {/* Right Side Showcase with Shaded Golden Silk Backdrop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              {/* Warm ambient golden glow behind the frame */}
              <div className="absolute -inset-4 bg-accent/15 rounded-[36px] blur-3xl pointer-events-none" />

              {/* Luxury Frame Container with Shaded Golden Silk */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(44,27,24,0.14)] border-2 border-accent/30 bg-cover bg-center p-5 sm:p-7"
                style={{ backgroundImage: 'url("/images/shaded-gold-silk.webp")' }}
              >
                {/* Luminous ambient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2c1b18]/15 via-transparent to-white/30 pointer-events-none" />
                {/* Fine inner accent border */}
                <div className="absolute inset-2 sm:inset-3 rounded-[20px] border border-accent/25 pointer-events-none" />

                {/* Saree Showcase Duo Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6">
                  {/* Left Saree Card */}
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/90 group bg-white"
                  >
                    <img 
                      src="/images/pic8.webp" 
                      alt="Hand-Painted Pure Silk Saree" 
                      className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="inline-block text-[11px] sm:text-xs font-semibold text-white tracking-wider uppercase drop-shadow-md">
                        Hand-Painted Silk
                      </span>
                    </div>
                  </motion.div>

                  {/* Right Saree Card */}
                  <motion.div 
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/90 group bg-white sm:mt-6"
                  >
                    <img 
                      src="/images/pic2.webp" 
                      alt="Artisanal Katha Stitch Saree" 
                      className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="inline-block text-[11px] sm:text-xs font-semibold text-white tracking-wider uppercase drop-shadow-md">
                        Katha Stitch Craft
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Floating Heritage Badge */}
                <div className="relative z-20 mt-5 pt-3 border-t border-accent/20 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-accent/30 text-xs font-bold text-primary">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="tracking-wider uppercase text-[11px] sm:text-xs">Authentic Murshidabad Handloom</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy & Values Section with Golden Shaded Silk Background */}
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center text-primary bg-[#F9F4EB]"
        style={{ backgroundImage: 'url("/images/golden-shaded-silk.webp")' }}
      >
        {/* Luminous warm golden ambient lighting and edge blends */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F4EB]/80 via-white/20 to-[#F9F4EB]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[#fffdfa]/15 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#f5d87a]/25 rounded-full blur-[90px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-widest uppercase mb-2 block text-sm md:text-base drop-shadow-sm"
            >
              Our Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary"
            >
              Values Woven In Time
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 w-24 bg-accent mx-auto mt-6 origin-center rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Authenticity", desc: "Every piece is sourced directly from masterful weavers, ensuring 100% genuine silk, matka, and tasar." },
              { title: "Craftsmanship", desc: "We celebrate the meticulous handwork of Katha stitch, making sure the artisans' skills are rightfully honored." },
              { title: "Elegance", desc: "Our collections are curated not just for their heritage, but for their timeless beauty and contemporary grace." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-[0_12px_36px_rgba(44,27,24,0.08)] border border-accent/20 hover:border-accent/50 text-center transition-all duration-300 hover:shadow-[0_20px_45px_rgba(44,27,24,0.12)]"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent/25 to-accent/10 border border-accent/30 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-2xl font-serif font-bold text-accent">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-secondary/80 text-lg leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustBanner />

      {/* Store Location Feature */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 h-[400px] lg:h-[440px] relative overflow-hidden group"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentStoreImage}
                  src={storeSareeImages[currentStoreImage].src} 
                  alt={storeSareeImages[currentStoreImage].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full object-cover" 
                />
              </AnimatePresence>

              {/* Subtle dark gradient overlay at bottom for indicator contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Progress Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {storeSareeImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStoreImage(idx)}
                    aria-label={`Go to saree image ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      currentStoreImage === idx
                        ? 'w-6 h-2 bg-accent shadow-sm'
                        : 'w-2 h-2 bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 p-10 lg:p-16"
            >
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">Visit Our Heritage Store</h3>
              <p className="text-secondary/80 text-lg mb-8 leading-relaxed">
                Step into our showroom in Berhampore and experience the textures, colors, and artistry firsthand. We invite you to explore our vast collection of sarees, kurtis, and shirts in person.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-primary text-white font-medium rounded hover:bg-accent transition-colors shadow-md"
              >
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
