import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteData } from '../../data/siteData';

const Testimonials = () => {
  // Duplicate for seamless marquee effect
  const duplicatedTestimonials = [...siteData.testimonials, ...siteData.testimonials];

  return (
    <section 
      className="py-24 overflow-hidden bg-cover bg-center relative bg-[#FAF7F2]"
      style={{ backgroundImage: 'url("/images/silk-texture.webp")' }}
    >
      {/* Soft luminous ambient overlay for seamless pure silk sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/80 via-white/20 to-[#FAF7F2]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-white/25 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <SectionHeading title="What Our Clients Say" subtitle="Reviews" />
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center group z-10">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="w-[350px] sm:w-[450px] mx-4 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-[0_12px_36px_rgba(44,27,24,0.06)] border border-accent/15 hover:border-accent/40 flex-shrink-0 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-accent text-4xl font-serif mb-4 leading-none">"</div>
              <p className="text-secondary/85 text-lg mb-6 whitespace-normal italic font-sans leading-relaxed">
                {testimonial.text}
              </p>
              <div className="font-heading font-bold text-primary text-base">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
