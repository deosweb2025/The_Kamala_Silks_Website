import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import { siteData } from '../data/siteData';
import { TrustBanner } from '../components/home/HomeGlimpses';

const About = () => {
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
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Preserving the Art of <span className="text-accent relative inline-block">
                  Handwoven Heritage
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-accent/30 rounded-full" />
                </span>
              </h2>
              <div className="space-y-6 text-lg text-secondary/90 leading-relaxed">
                <p>
                  At {siteData.company.name}, we believe that every thread tells a story. Our journey began with a simple passion: to bring the authentic beauty of handcrafted silk, tasar, and matka directly to those who appreciate true artistry.
                </p>
                <p>
                  Specializing in the intricate art of Katha stitch, we work closely with skilled artisans to ensure that every saree, kurti, and shirt we offer is a masterpiece of traditional craftsmanship. Our khadi and cotton collections are designed for both comfort and enduring elegance. Additionally, beyond our silk sarees, we also offer raw silk thaan (without print) and 100% pure authentic Murshidabad silk.
                </p>
                <p>
                  Located in the heart of Berhampore, Murshidabad—a region renowned for its rich silk weaving heritage—we are proud to be a part of this enduring legacy. When you choose {siteData.company.name}, you are not just buying clothing; you are embracing a piece of history.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 bg-accent/10 -m-6 rounded-2xl transform rotate-3" />
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/images/pic8.webp" 
                  alt="Craftsmanship" 
                  className="w-full h-[350px] object-cover rounded-xl shadow-2xl mt-12 relative z-10" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/images/pic2.webp" 
                  alt="Heritage" 
                  className="w-full h-[350px] object-cover rounded-xl shadow-2xl relative z-10" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy & Values Section with Texture Background */}
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center text-primary"
        style={{ backgroundImage: 'url("/images/texture.webp")' }}
      >
        <div className="absolute inset-0 bg-white/60 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-widest uppercase mb-2 block"
            >
              Our Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold"
            >
              Values Woven In Time
            </motion.h2>
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
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/50 text-center"
              >
                <div className="w-16 h-16 mx-auto bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-serif font-bold text-accent">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">{value.title}</h3>
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
              className="w-full lg:w-1/2 h-[400px]"
            >
              <img src="/images/pic3.webp" alt="Our Store" className="w-full h-full object-cover" />
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
