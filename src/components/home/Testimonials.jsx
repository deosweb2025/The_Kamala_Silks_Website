import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { siteData } from '../../data/siteData';

const Testimonials = () => {
  // Duplicate for seamless marquee effect
  const duplicatedTestimonials = [...siteData.testimonials, ...siteData.testimonials];

  return (
    <section 
      className="py-20 overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/texture.webp")' }}
    >
      <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div> {/* Optional slight blend for readability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <SectionHeading title="What Our Clients Say" subtitle="Reviews" />
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center group z-10">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="w-[350px] sm:w-[450px] mx-4 bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex-shrink-0"
            >
              <div className="text-accent text-4xl font-serif mb-4 leading-none">"</div>
              <p className="text-secondary/80 text-lg mb-6 whitespace-normal italic">
                {testimonial.text}
              </p>
              <div className="font-heading font-bold text-primary">
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
