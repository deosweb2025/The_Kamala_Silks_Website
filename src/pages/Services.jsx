import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { siteData } from '../data/siteData';

const Services = () => {
  return (
    <div className="w-full">
      <PageHeader 
        title="Our Services" 
        subtitle="What makes The Kamala Silks unique." 
        bgImage="/images/services-hero-bg.jpg"
        badge="CRAFTSMANSHIP & SERVICES"
        breadcrumb="Services"
      />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What We Provide" subtitle="Excellence in every thread" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {siteData.services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
                className="group relative bg-white p-10 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 text-white text-3xl font-serif shadow-lg group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary/80 text-lg leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-1 bg-gray-200 mt-auto group-hover:w-full group-hover:bg-accent transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with textured background */}
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/texture.jpg")' }}
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
            <div className="md:w-1/2">
               <motion.img 
                  initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src="/images/pic4.jpeg" 
                  alt="Custom Saree Order" 
                  className="w-full h-[300px] object-cover rounded-2xl shadow-xl" 
               />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
