import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ProductModal from '../components/common/ProductModal';
import { siteData } from '../data/siteData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'image', 'video'

  const filteredGallery = siteData.gallery.filter(media => filter === 'all' || media.type === filter);

  return (
    <div className="w-full bg-gray-50">
      <PageHeader title="Gallery" subtitle="A visual journey of our heritage." />
      
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'url("/images/texture.jpg")' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Visual Showcase" subtitle="Moments & Craft" />
          
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {['all', 'image', 'video'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === type 
                    ? 'bg-accent text-white shadow-lg scale-105' 
                    : 'bg-white text-secondary hover:bg-gray-100 border border-gray-200 hover:scale-105'
                }`}
              >
                {type === 'all' ? 'All Media' : type === 'image' ? 'Images' : 'Videos'}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredGallery.map((media, idx) => (
              <motion.div
                key={media.src}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.15 }}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl aspect-[4/5] cursor-pointer relative group bg-white border-4 border-white transition-all duration-500"
                onClick={() => setSelectedImage(media)}
              >
                {media.type === "video" ? (
                  <video 
                    src={media.src} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" 
                    muted 
                    loop 
                    playsInline 
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />
                ) : (
                  <img 
                    src={media.src} 
                    alt={`Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" 
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white bg-white/20 backdrop-blur-md p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-all duration-500">
                    {media.type === "video" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                    )}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ProductModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        product={selectedImage} 
        type="gallery"
      />
    </div>
  );
};

export default Gallery;
