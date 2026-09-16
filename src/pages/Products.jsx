import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Check, MessageCircle, Sparkles, Move } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ProductModal from '../components/common/ProductModal';
import { siteData, sareeCategories } from '../data/siteData';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index, onQuickView }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const isEager = index < 8;

  return (
    <div
      key={product.id}
      className="group relative p-[2px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:hover:-translate-y-2 will-change-transform"
    >
      {/* Animated Spinning Gradient Border (active on desktop hover only) */}
      <div className="hidden md:block absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,#E57C22_0%,#ffffff_50%,#E57C22_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none z-0" />

      {/* Inner Container */}
      <div className="relative bg-white rounded-[22px] flex flex-col h-full overflow-hidden z-10">
        {/* Image - Click to open modal with flexible pan & zoom */}
        <div 
          className="overflow-hidden relative aspect-[4/5] flex-shrink-0 cursor-pointer bg-stone-100" 
          onClick={() => onQuickView(product)}
          title="Click to view & explore saree in all directions"
        >
          <img
            src={product.image}
            alt={product.name}
            loading={isEager ? "eager" : "lazy"}
            fetchPriority={isEager ? "high" : "auto"}
            className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
          />

          {/* Dark overlay on hover (desktop only) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

          {/* Category badge */}
          <div className="absolute top-3 left-3 max-w-[85%]">
            <span className="bg-white/95 backdrop-blur-sm text-accent text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow block truncate border border-accent/20">
              {product.category}
            </span>
          </div>

          {/* Move/Inspect hint badge on desktop */}
          <div className="absolute bottom-3 right-3 z-10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20">
              <Move className="w-3 h-3 text-amber-400" /> Move & Zoom
            </span>
          </div>

          {/* Quick View button (desktop hover only) */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-5 py-2.5 rounded-full font-semibold text-sm -translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
            >
              <Eye className="w-4 h-4" /> Quick View
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-6 flex-grow">
          <h3 
            onClick={() => onQuickView(product)}
            className="text-lg font-heading font-bold text-primary hover:text-accent cursor-pointer transition-colors line-clamp-2 min-h-[3.25rem] leading-snug mb-1"
          >
            {product.name}
          </h3>
          <p className="text-secondary/60 font-sans text-sm line-clamp-2 mb-4">
            {product.description}
          </p>

          {/* Price & Courier Info */}
          <div className="mb-5 mt-auto flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-accent font-sans bg-accent/10 px-3 py-1 rounded-full">
                {product.price ? product.price : "Contact for Price"}
              </span>
              <span className="text-xs text-secondary/50 font-sans">{product.fabric}</span>
            </div>
            <span className="text-[10px] text-secondary/40 italic leading-tight">*Courier charges applicable as per destinations</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                addedToCart
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/25'
              }`}
            >
              {addedToCart ? (
                <><Check className="w-4 h-4" /> Added!</>
              ) : (
                <><ShoppingBag className="w-4 h-4" /> Add to Cart</>
              )}
            </button>

            <a
              href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Can you please share the price and more details?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-md border border-[#25D366]/30 shrink-0"
              title="Order via WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('All');

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

  const filteredProducts = filter === 'All'
    ? siteData.products
    : siteData.products.filter(p => p.category === filter);

  return (
    <div className="w-full bg-gray-50">
      <PageHeader 
        title="Our Products" 
        subtitle="Explore our exclusive handcrafted silk collection." 
        bgImage="/images/products-hero-bg.webp"
        badge="EXCLUSIVE HANDLOOM COLLECTION"
        breadcrumb="Products"
      />

      <section className="py-20 relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'url("/images/texture.webp")' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Premium Collection" subtitle="Authentic Handcrafted" />

          {/* Direct Sole Manufacturer Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto -mt-4 mb-12 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-accent/25 shadow-[0_10px_35px_rgba(44,27,24,0.06)] relative overflow-hidden text-center"
          >
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Sole Manufacturers • Direct From Looms
            </div>
            
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-primary mb-3">
              From Soil to Garments — Pillars for Exclusive Silk Sarees
            </h3>
            
            <p className="text-secondary/85 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              We are the sole manufacturers of all our saress starting from our experienced weavers weaving and stitching the threads to experienced printers printing the saress to give them an elegant look. From soil to garments, we are the pillars for exclusive Silk sarees. Being the manufacturers we provide the best quality of Silk saress at a challenging cheapest rate.
            </p>
          </motion.div>

          {/* Saree Segments Filter Bar */}
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 px-2">
              <span className="text-xs uppercase tracking-widest font-bold text-secondary/60">
                Filter by Segment
              </span>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3.5 py-1 rounded-full w-fit">
                Showing {filteredProducts.length} of {siteData.products.length} Products
              </span>
            </div>

            {/* Scrollable on mobile, wrapping on desktop */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
              {categories.map((cat) => {
                const count = cat === 'All' 
                  ? siteData.products.length 
                  : siteData.products.filter(p => p.category === cat).length;
                const isActive = filter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-accent to-[#D46B18] text-white shadow-lg shadow-accent/30 scale-105'
                        : 'bg-white text-secondary/80 hover:text-primary hover:bg-amber-50/50 border border-gray-200/80 hover:border-accent/40 shadow-sm'
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

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  onQuickView={setSelectedProduct}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state fallback with WhatsApp CTA for unlisted segments */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto">
              <h4 className="text-xl font-heading font-bold text-primary mb-2">
                Exclusive {filter} Collection
              </h4>
              <p className="text-secondary/70 text-sm mb-6 leading-relaxed">
                Our master weavers are currently handcrafting new designs for this segment. Enquire directly on WhatsApp to view available weaves or place custom orders!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I would like to inquire about your ${filter} collection.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5c] text-white text-sm font-bold rounded-full transition-all shadow-md inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </a>
                <button
                  onClick={() => setFilter('All')}
                  className="px-6 py-3 bg-primary text-white text-sm font-bold rounded-full hover:bg-accent transition-colors"
                >
                  View All Products
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;
