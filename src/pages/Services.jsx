import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { siteData } from '../data/siteData';

const customOrderImages = [
  { src: "/images/pic4.webp", alt: "Handcrafted Nature Landscape Silk Saree" },
  { src: "/images/pic10.webp", alt: "Royal Crimson Baluchari Silk Saree" },
  { src: "/images/pic9.webp", alt: "Festive Yellow & Red Pure Handloom Silk Saree" },
  { src: "/images/pic16.webp", alt: "Artisanal Terracotta Batik Silk Saree" },
];

const Services = () => {
  const [currentCustomImage, setCurrentCustomImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCustomImage((prev) => (prev + 1) % customOrderImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="w-full">
      <PageHeader 
        title="Our Services" 
        subtitle="What makes The Kamala Silks unique." 
        bgImage="/images/services-hero-bg.webp"
        badge="CRAFTSMANSHIP & SERVICES"
        breadcrumb="Services"
      />
      
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center bg-[#FAF6F0]"
        style={{ backgroundImage: 'url("/images/white-gold-waves.webp")' }}
      >
        {/* Harmonious white & golden ambient lighting and edge blends */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/85 via-white/40 to-[#FAF6F0]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-white/20 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#f5d87a]/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="What We Provide" subtitle="Excellence in every thread" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
            {[
              {
                id: "s1",
                title: "Pure Silks & Raw Thaan",
                description: "We are specialised in Murshidabad Silk printed saress, Murshidabad Silk raw thaan, Bishnupuri Silk printed saress, Tasar gachi printed saress and raw thaan, Tasar kethe printed saress and raw thaan, Garad saress, and Silk Matka Printed Sarees.",
                tag: "Primary Speciality",
                highlights: [
                  "Murshidabad Silk Printed saress & Raw Thaan",
                  "Bishnupuri Silk Printed saress & Garad saress",
                  "Tasar Gachi & Kethe (Printed saress & Raw Thaan)",
                  "Silk Matka Printed Sarees"
                ]
              },
              {
                id: "s2",
                title: "Katha Stitch Sarees",
                description: "Authentic handcrafted Katha stitch sarees featuring intricate generational needlework and storytelling motifs on pure handloom silk.",
                tag: "Secondary Speciality",
                highlights: [
                  "Generational Rural Bengal Needlework Heritage",
                  "Intricate Storytelling Folkloric Running Stitches",
                  "Over 60+ Hours of Patient Hand-Stitching per Piece"
                ]
              },
              {
                id: "s3",
                title: "Kurties & Khadi",
                description: "Comfortable and elegant Kurties and Khadi wear crafted from natural handspun yarns.",
                tag: "Organic Khadi Weave",
                highlights: [
                  "100% Breathable Handspun Organic Khadi",
                  "Contemporary Silhouettes for Daily & Festive Grace",
                  "Eco-conscious Natural Yarns & Dyeing"
                ]
              },
              {
                id: "s4",
                title: "Cotton Shirts",
                description: "High-quality traditional cotton shirts tailored for all-day comfort and sophistication.",
                tag: "Pure Bengal Cotton",
                highlights: [
                  "100% Breathable Fine Bengal Handloom Cotton",
                  "Featherlight Comfort with Lasting Softness",
                  "Classic Artisanal Tailored Fit & Detailing"
                ]
              }
            ].map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
                className="group relative p-[2px] rounded-3xl overflow-hidden shadow-[0_12px_35px_rgba(44,27,24,0.06)] hover:shadow-[0_24px_60px_rgba(229,124,34,0.15)] transition-all duration-500 hover:-translate-y-2 bg-white"
              >
                {/* Animated spinning gold border on hover */}
                <div className="absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,#E57C22_0%,#ffffff_50%,#E57C22_100%)] animate-[spin_5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Corner ambient glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 group-hover:scale-125 transition-all duration-500 pointer-events-none z-10" />

                {/* Inner Card Content */}
                <div className="relative bg-[#FFFDF9]/95 backdrop-blur-md p-8 sm:p-10 rounded-[22px] h-full z-10 flex flex-col justify-between border border-accent/15 group-hover:border-accent/30 transition-colors duration-300">
                  <div>
                    {/* Header: Number Badge & Craft Pill Tag */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 flex items-center justify-center text-accent font-serif font-bold text-2xl shadow-sm group-hover:bg-accent group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_6px_20px_rgba(229,124,34,0.35)] transition-all duration-300">
                        0{idx + 1}
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-accent/10 text-accent border border-accent/20">
                        <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{service.tag}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary/80 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Artisan Highlights */}
                    <div className="space-y-2.5 mb-8 pt-5 border-t border-accent/10">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-sm text-secondary/90">
                          <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 border border-accent/20">
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Guarantee & Action Button */}
                  <div className="pt-5 border-t border-accent/15 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-secondary/60 font-semibold font-sans">
                      Authentic Bengal Craft
                    </span>
                    <Link 
                      to="/products"
                      className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300 hover:text-primary"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with textured background */}
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/texture.webp")' }}
      >
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-widest uppercase mb-2 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">How We Curate Elegance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sourcing", desc: "We handpick the finest raw silk and matka threads directly from trusted weavers." },
              { step: "02", title: "Designing", desc: "Our artisans conceptualize timeless patterns, honoring traditional motifs." },
              { step: "03", title: "Weaving", desc: "Expert weavers spend weeks carefully bringing the designs to life on the loom." },
              { step: "04", title: "Delivery", desc: "Each piece undergoes strict quality checks before it arrives at your doorstep." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-accent/50 flex items-center justify-center mb-6 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="text-3xl font-heading font-bold text-accent group-hover:text-white relative z-10 transition-colors duration-500">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Break Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-3xl p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-inner">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Need a Custom Order?</h2>
              <p className="text-lg text-secondary/80 mb-8">
                Whether you need a specific color palette for a wedding or a bulk order for your boutique, we offer personalized services to meet your exact needs.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-accent text-white font-medium rounded hover:bg-primary transition-colors shadow-md text-lg"
              >
                Contact Us Today
              </a>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/20 bg-black/5 group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentCustomImage}
                    src={customOrderImages[currentCustomImage].src} 
                    alt={customOrderImages[currentCustomImage].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full object-cover" 
                  />
                </AnimatePresence>

                {/* Subtle dark gradient overlay at bottom for indicator contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Slide indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {customOrderImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentCustomImage(idx)}
                      aria-label={`Go to custom saree slide ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full ${
                        currentCustomImage === idx
                          ? 'w-6 h-2 bg-accent shadow-sm'
                          : 'w-2 h-2 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
