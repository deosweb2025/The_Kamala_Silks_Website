import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, ShieldCheck, Star, ShoppingBag, Eye, Check, MessageCircle } from 'lucide-react';
import { siteData } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';
import ProductModal from '../common/ProductModal';
import certificatePng from '../../assets/images/certificate.png';
import { useCart } from '../../context/CartContext';

// Trust / Certificate Banner
export const TrustBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a0f0a] py-0">

      {/* Rich silk texture background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url("/images/texture.jpg")' }}
      />

      {/* Cinematic spotlight from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Accent glow bottom-left */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Top gold divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      {/* Bottom gold divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28">

        {/* Section label — centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-12 h-[1px] bg-accent/60" />
            <Award className="w-5 h-5 text-accent" />
            <span className="block w-12 h-[1px] bg-accent/60" />
          </div>
          <span className="text-accent font-semibold text-xs uppercase tracking-[0.35em] font-sans">
            Government Certified Heritage Brand
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">

          {/* ── Certificate showcase ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex justify-center shrink-0"
          >
            <div className="relative">
              {/* Warm light source above certificate */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-56 h-16 bg-accent/30 blur-2xl rounded-full pointer-events-none" />

              {/* Outer decorative ring */}
              <div className="absolute inset-[-18px] border border-accent/20 rounded-[28px] pointer-events-none" />
              <div className="absolute inset-[-36px] border border-accent/10 rounded-[40px] pointer-events-none" />

              {/* Gold gradient frame */}
              <div className="relative p-[3px] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_40px_rgba(229,124,34,0.2)] bg-gradient-to-br from-[#f5e17a] via-[#c9a84c] to-[#7a5c20]">
                {/* Inner dark mat */}
                <div className="bg-[#120a07] rounded-[13px] p-4">
                  <img
                    src={certificatePng}
                    alt="India Handloom Certificate of Registration"
                    className="w-full max-w-[380px] h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Floating "Govt. Certified" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-accent to-[#c9a84c] text-white px-5 py-2.5 rounded-full shadow-[0_8px_24px_rgba(229,124,34,0.5)] flex items-center gap-2 font-bold text-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                Ministry of Textiles, Govt. of India
              </motion.div>
            </div>
          </motion.div>

          {/* ── Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Recognized for
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-accent via-[#f5d87a] to-accent bg-clip-text text-transparent italic">
                  Uncompromised
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-accent via-[#f5d87a] to-transparent rounded-full" />
              </span>
              {' '}Quality
            </h2>

            <p className="text-white/60 font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              We hold the official{' '}
              <span className="text-accent font-semibold">India Handloom Certificate of Registration</span>
              {' '}from the Government of India's Ministry of Textiles — your assurance that every saree you buy is genuinely handwoven by master artisans.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10 pb-10 border-b border-white/10">
              {[
                { num: '10+', label: 'Years of Excellence' },
                { num: '500+', label: 'Happy Customers' },
                { num: '100%', label: 'Govt. Certified' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-heading font-bold text-accent">{stat.num}</p>
                  <p className="text-white/50 font-sans text-sm mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: '100% Authentic',
                  sub: 'Pure certified handloom silk, no synthetics',
                },
                {
                  icon: <Star className="w-5 h-5" />,
                  title: 'Master Artisans',
                  sub: 'Generations of handwoven heritage',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex items-center gap-4 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.08] hover:border-accent/30 rounded-2xl px-5 py-4 transition-all duration-300 group cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 group-hover:from-accent/50 group-hover:to-accent/20 transition-colors flex items-center justify-center text-accent shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">{card.title}</h4>
                    <p className="text-white/45 font-sans text-xs mt-0.5 leading-snug">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


// About Glimpse
export const AboutGlimpse = () => {
  const images = [
    "/images/pic1.jpeg", 
    "/images/pic2.jpeg", 
    "/images/pic3.jpeg", 
    "/images/pic8.jpeg"
  ];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Overlapping Card Layout */}
        <div className="flex flex-col lg:flex-row items-center group">
          
          {/* Left Side: Image Slider */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[60%] relative h-[450px] md:h-[550px] lg:h-[650px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl z-0"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIdx}
                src={images[currentIdx]} 
                alt="About The Kamala Silks" 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </motion.div>

          {/* Right Side: Blurred Content Box Overlapping Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[50%] -mt-16 lg:mt-0 lg:-ml-[10%] relative z-10 p-8 md:p-12 lg:p-16 bg-white/70 backdrop-blur-2xl rounded-3xl shadow-[-10px_0_40px_rgba(0,0,0,0.15)] border border-white/60"
          >
            <span className="text-accent font-semibold tracking-[0.2em] uppercase mb-4 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-8 leading-tight">
              Tradition Woven Into Every Thread
            </h2>
            <p className="text-secondary font-sans text-lg mb-10 leading-relaxed">
              Welcome to {siteData.company.name}. We are dedicated to bringing you the finest handcrafted silk, tasar, matka, and katha stitch sarees. Our journey is rooted in preserving authentic craftsmanship while offering premium elegance.
            </p>
            <NavLink to="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-sans font-medium rounded-full hover:bg-accent hover:-translate-y-1 transition-all shadow-lg shadow-primary/20 group/btn">
              Read Our Story <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </NavLink>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Services Glimpse
export const ServicesGlimpse = () => (
  <section className="py-24 bg-gray-50 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading title="What We Offer" subtitle="Our Specialities" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {siteData.services.slice(0, 4).map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="relative p-[2px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
          >
            {/* Animated Spinning Gradient Border */}
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,#E57C22_0%,#ffffff_50%,#E57C22_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Inner content covering the center */}
            <div className="relative bg-white p-8 rounded-[14px] h-full z-10 flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent font-bold text-xl group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-secondary/70 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-16">
         <NavLink to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group text-lg">
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NavLink>
      </div>
    </div>
  </section>
);

// Home Product Card (self-contained with add-to-cart)
const HomeProductCard = ({ product, idx, onQuickView }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col border border-gray-100/80 hover:-translate-y-2 shrink-0 w-[260px] sm:w-auto"
    >
      {/* Image */}
      <div
        className="overflow-hidden relative aspect-[4/5] flex-shrink-0 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-accent text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
            {product.category}
          </span>
        </div>

        {/* Quick View button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded-full font-semibold text-sm -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
          >
            <Eye className="w-4 h-4" /> Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 sm:p-5 flex-grow">
        <h3 className="text-base sm:text-lg font-heading font-bold text-primary group-hover:text-accent transition-colors line-clamp-1 mb-1">
          {product.name}
        </h3>
        <p className="text-secondary/60 font-sans text-xs sm:text-sm line-clamp-2 mb-4">
          {product.description}
        </p>

        {/* "Contact for Price" + Fabric */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="text-xs font-semibold text-accent/80 font-sans bg-accent/10 px-2.5 py-1 rounded-full">
            Contact for Price
          </span>
          {product.fabric && (
            <span className="text-[10px] text-secondary/40 font-sans truncate max-w-[80px]">{product.fabric}</span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={addedToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              addedToCart
                ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                : 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/25'
            }`}
          >
            {addedToCart
              ? <><Check className="w-3.5 h-3.5" /> Added!</>
              : <><ShoppingBag className="w-3.5 h-3.5" /> Add to Cart</>
            }
          </button>

          <a
            href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you share price & details?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm border border-[#25D366]/30 shrink-0"
            title="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Products Glimpse
export const ProductsGlimpse = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Collection" subtitle="Our Best Sellers" />

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 snap-x snap-mandatory sm:snap-none scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {siteData.products.slice(0, 4).map((product, idx) => (
            <div key={product.id} className="snap-start">
              <HomeProductCard
                product={product}
                idx={idx}
                onQuickView={setSelectedProduct}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <NavLink
            to="/products"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-accent hover:-translate-y-1 transition-all shadow-lg shadow-primary/25 text-base"
          >
            View All Products <ArrowRight className="w-5 h-5" />
          </NavLink>
        </div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </section>
  );
};

// Gallery Glimpse
export const GalleryGlimpse = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section 
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/texture.jpg")' }}
    >
      <div className="absolute inset-0 bg-primary/95 mix-blend-multiply"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase mb-4 block drop-shadow-md">Visuals</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg">Gallery Glimpse</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {siteData.gallery.slice(0, 4).map((media, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl aspect-[4/5] cursor-pointer relative group bg-white border-2 border-white/20 hover:border-white transition-all duration-500"
              onClick={() => setSelectedImage(media)}
            >
              {media.type === "video" ? (
                <video src={media.src} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" muted loop playsInline />
              ) : (
                <img src={media.src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
        <div className="text-center mt-16">
           <NavLink to="/gallery" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-colors group text-lg">
              Explore Full Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
        </div>
      </div>

      <ProductModal 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        product={selectedImage} 
        type="gallery"
      />
    </section>
  );
};
