import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductModal = ({ isOpen, onClose, product, type = "product" }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setAddedToCart(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors backdrop-blur-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-primary" />
          </button>

          <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center relative">
            {type === "gallery" && product.type === "video" ? (
              <video 
                src={product.src} 
                className="w-full h-full object-contain max-h-[40vh] md:max-h-[80vh]"
                controls 
                autoPlay
                playsInline
              />
            ) : (
              <img 
                src={type === "product" ? product.image : product.src} 
                alt={type === "product" ? product.name : "Gallery Image"} 
                className="w-full h-full object-cover max-h-[40vh] md:max-h-full"
              />
            )}
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-10 lg:p-12 overflow-y-auto flex flex-col">
            {type === "product" ? (
              <>
                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {product.name}
                </h3>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full w-fit">
                    {product.price ? product.price : "Contact for Price"}
                  </p>
                  <p className="text-[11px] text-secondary/50 italic mt-2">
                    *Courier charges applicable as per destinations
                  </p>
                </div>
                <p className="text-secondary/80 font-sans leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Additional Details */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10 pb-8 border-b border-gray-100">
                  {product.fabric && (
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Fabric</span>
                      <span className="text-primary font-medium">{product.fabric}</span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Dimensions</span>
                      <span className="text-primary font-medium">{product.dimensions}</span>
                    </div>
                  )}
                  {product.care && (
                    <div className="col-span-2">
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Care Instructions</span>
                      <span className="text-primary font-medium">{product.care}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-auto flex flex-col gap-4">
                  <button 
                    onClick={handleAddToCart}
                    disabled={addedToCart}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg ${
                      addedToCart 
                        ? "bg-green-500 text-white shadow-green-500/30" 
                        : "bg-primary text-white hover:bg-primary/90 shadow-primary/20 hover:-translate-y-1"
                    }`}
                  >
                    {addedToCart ? (
                      <>
                        <Check className="w-5 h-5" /> Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" /> Add to Cart
                      </>
                    )}
                  </button>

                  <a 
                    href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name}. Can you please share the price and more details?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366]/20 transition-colors font-bold text-lg"
                  >
                    <MessageCircle className="w-5 h-5" /> Order via WhatsApp
                  </a>
                </div>
              </>
            ) : (
              <div className="flex flex-col h-full justify-center">
                 <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                  The Kamala Silks Collection
                </h3>
                <p className="text-secondary/80 font-sans leading-relaxed">
                  Experience the fine craftsmanship and premium quality of our authentic handwoven collections. 
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
