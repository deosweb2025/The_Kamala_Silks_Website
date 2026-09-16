import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Move, MessageCircle } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ProductModal from '../components/common/ProductModal';
import { siteData, sareeCategories } from '../data/siteData';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaFilter, setMediaFilter] = useState('all'); // 'all', 'image', 'video'
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = sareeCategories || [
    "All",
    "Single ply pure Murshidabad Silk saris",
    "Double ply pure Murshidabad Silk saris",
    "Tasar Saris",
    "Bishnupuri Silk Saris",
    "Silk Kethe Saris",
    "Garad Saris",
    "Matka Saris",
    "Katha Stitch Saris",
    "Gents Cotton/Silk Shirts"
  ];

  const filteredGallery = siteData.gallery.filter((media) => {
    const matchesMedia = mediaFilter === 'all' || media.type === mediaFilter;
    const matchesCategory = categoryFilter === 'All' || media.category === categoryFilter;
    return matchesMedia && matchesCategory;
  });

  return (
    <div className="w-full bg-gray-50">
      <PageHeader 
        title="Gallery" 
        subtitle="A visual journey of our authentic silk heritage." 
        bgImage="/images/gallery-hero-bg.webp"
        badge="VISUAL JOURNEY OF HERITAGE"
        breadcrumb="Gallery"
      />
      
      <section className="py-20 relative overflow-hidden">
        {/* Subtle background texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'url("/images/texture.webp")' }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Visual Showcase" subtitle="Moments & Craft" />
          
          {/* Primary Media Type Filters */}
          <div className="flex justify-center items-center gap-3 mb-8">
            {[
              { id: 'all', label: 'All Media', count: siteData.gallery.length },
              { id: 'image', label: 'Images', count: siteData.gallery.filter(m => m.type === 'image').length },
              { id: 'video', label: 'Videos', count: siteData.gallery.filter(m => m.type === 'video').length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setMediaFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  mediaFilter === tab.id 
                    ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105' 
                    : 'bg-white text-secondary/80 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-mono font-bold ${
                  mediaFilter === tab.id ? 'bg-white/25 text-white' : 'bg-gray-100 text-secondary/60'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Saree Segments Filter Bar */}
          <div className="mb-14 bg-white/60 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-accent/15 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-1">
              <span className="text-xs uppercase tracking-widest font-bold text-secondary/70">
                Filter Gallery by Segment
              </span>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                Showing {filteredGallery.length} {filteredGallery.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {/* Horizontal scroll on mobile, flex wrap on desktop */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-none -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? siteData.gallery.filter(m => mediaFilter === 'all' || m.type === mediaFilter).length
                  : siteData.gallery.filter(m => (mediaFilter === 'all' || m.type === mediaFilter) && m.category === cat).length;
                const isActive = categoryFilter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-accent to-[#D46B18] text-white shadow-md shadow-accent/25 scale-105'
                        : 'bg-white text-secondary/80 hover:text-primary hover:bg-amber-50/50 border border-gray-200/80 shadow-sm'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                      isActive 
                        ? 'bg-white/25 text-white' 
                        : 'bg-gray-100 text-secondary/60'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Gallery Media Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${mediaFilter}-${categoryFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {filteredGallery.map((media, idx) => (
                <div
                  key={media.src}
                  className="overflow-hidden rounded-3xl shadow-md hover:shadow-2xl aspect-[4/5] cursor-pointer relative group bg-stone-100 border-4 border-white transition-all duration-300 flex flex-col will-change-transform md:hover:-translate-y-1"
                  onClick={() => setSelectedMedia(media)}
                >
                  {media.type === "video" ? (
                    <video 
                      src={`${media.src}#t=0.001`} 
                      className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500" 
                      muted 
                      loop 
                      playsInline 
                      preload="metadata"
                      onMouseEnter={(e) => e.target.play()}
                      onMouseLeave={(e) => e.target.pause()}
                    />
                  ) : (
                    <img 
                      src={media.src} 
                      alt={media.name || "Gallery Saree"} 
                      loading={idx < 8 ? "eager" : "lazy"}
                      fetchPriority={idx < 8 ? "high" : "auto"}
                      className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500" 
                    />
                  )}
                  
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3 z-10 max-w-[85%]">
                    <span className="bg-white/95 backdrop-blur-sm text-accent text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow block truncate border border-accent/20">
                      {media.category || "Handloom Silk"}
                    </span>
                  </div>

                  {/* Move/Inspect hint on images */}
                  {media.type === "image" && (
                    <div className="absolute bottom-3 right-3 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-full flex items-center gap-1 border border-white/20">
                        <Move className="w-3 h-3 text-amber-400" /> Move & Zoom
                      </span>
                    </div>
                  )}

                  {/* Dark hover overlay with action icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="text-white bg-white/20 backdrop-blur-md p-4 rounded-full shadow-2xl scale-50 group-hover:scale-100 transition-all duration-500">
                      {media.type === "video" ? (
                        <Play className="w-7 h-7 text-white fill-white" />
                      ) : (
                        <Eye className="w-7 h-7 text-white" />
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state fallback with WhatsApp CTA */}
          {filteredGallery.length === 0 && (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto">
              <h4 className="text-xl font-heading font-bold text-primary mb-2">
                Exclusive {categoryFilter} Showcase
              </h4>
              <p className="text-secondary/70 text-sm mb-6 leading-relaxed">
                New photos & videos are currently being prepared for this segment. Enquire directly on WhatsApp to view freshly woven pieces!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I would like to see photos/videos of your ${categoryFilter} collection.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5c] text-white text-sm font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </a>
                <button
                  onClick={() => { setCategoryFilter('All'); setMediaFilter('all'); }}
                  className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-full hover:bg-accent transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <ProductModal 
        isOpen={!!selectedMedia} 
        onClose={() => setSelectedMedia(null)} 
        product={selectedMedia} 
        type="gallery"
      />
    </div>
  );
};

export default Gallery;
