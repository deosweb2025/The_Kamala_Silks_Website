import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Check, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import ProductModal from '../components/common/ProductModal';
import { siteData } from '../data/siteData';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, idx, onQuickView }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (idx % 4) * 0.12 }}
      className="group relative p-[2px] bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2"
    >
      {/* Animated Spinning Gradient Border */}
      <div className="absolute inset-[-150%] bg-[conic-gradient(from_90deg_at_50%_50%,#E57C22_0%,#ffffff_50%,#E57C22_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      {/* Inner Container */}
      <div className="relative bg-white rounded-[22px] flex flex-col h-full overflow-hidden z-10">
        {/* Image */}
        <div className="overflow-hidden relative aspect-[4/5] flex-shrink-0 cursor-pointer" onClick={() => onQuickView(product)}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-accent text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
              {product.category}
            </span>
          </div>

          {/* Quick View button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
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
          <h3 className="text-lg font-heading font-bold text-primary group-hover:text-accent transition-colors line-clamp-2 min-h-[3.25rem] leading-snug mb-1">
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
    </motion.div>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(siteData.products.map(p => p.category))];
  const filteredProducts = filter === 'All'
    ? siteData.products
    : siteData.products.filter(p => p.category === filter);

  return (
    <div className="w-full bg-gray-50">
      <PageHeader 
        title="Our Products" 
        subtitle="Explore our exclusive collection." 
        bgImage="/images/products-hero-bg.webp"
        badge="EXCLUSIVE HANDLOOM COLLECTION"
        breadcrumb="Products"
      />

      <section className="py-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: 'url("/images/texture.webp")' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading title="Premium Collection" subtitle="Authentic Handcrafted" />

          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                    : 'bg-white text-secondary hover:bg-gray-50 border border-gray-200 hover:border-primary/30 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
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
              {filteredProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  idx={idx}
                  onQuickView={setSelectedProduct}
                />
              ))}
            </motion.div>
          </AnimatePresence>
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
