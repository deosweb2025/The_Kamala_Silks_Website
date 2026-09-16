import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Check, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { siteData } from '../../data/siteData';
import FlexibleImageViewer from './FlexibleImageViewer';

const ProductModal = ({ isOpen, onClose, product, type = "product" }) => {
  const [addedProductId, setAddedProductId] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard accessibility: Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Match gallery media with catalog product if available
  const matchedCatalogProduct = (product && type === "gallery")
    ? siteData.products.find(p => p.image === product.src)
    : null;

  const currentProduct = matchedCatalogProduct || product;
  const isCatalogItem = type === "product" || !!matchedCatalogProduct;
  const addedToCart = Boolean(addedProductId && currentProduct && addedProductId === currentProduct.id);

  const handleAddToCart = () => {
    if (currentProduct) {
      addToCart(currentProduct);
      setAddedProductId(currentProduct.id);
      setTimeout(() => setAddedProductId(null), 3000);
    }
  };

  const imageSrc = product ? (type === "product" ? product.image : product.src) : "";
  const productName = product 
    ? (currentProduct?.name || product.name || (product.type === "video" ? "Heritage Video Showcase" : "Handcrafted Saree")) 
    : "Saree";
  const productCategory = product 
    ? (currentProduct?.category || product.category || "Authentic Handloom Collection") 
    : "Authentic Handloom Collection";

  return (
    <AnimatePresence>
      {isOpen && product && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6">
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
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh] border border-accent/20"
          >
            {/* Modal Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all backdrop-blur-md shadow-xl border border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Media Column with Flexible Image Viewer */}
            <div className="w-full md:w-1/2 bg-neutral-900 flex items-center justify-center relative h-[290px] sm:h-[350px] md:h-auto md:min-h-[500px]">
              {type === "gallery" && product.type === "video" ? (
                <video 
                  src={product.src} 
                  className="w-full h-full object-contain max-h-[45vh] md:max-h-[80vh]"
                  controls 
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              ) : (
                <FlexibleImageViewer 
                  src={imageSrc} 
                  alt={productName}
                  className="h-full min-h-[290px] sm:min-h-[350px] md:min-h-[500px]"
                />
              )}
            </div>
            
            {/* Right Info Column */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto flex flex-col bg-white">
              {isCatalogItem ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent font-semibold tracking-wider uppercase text-xs font-sans bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {productCategory}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3 leading-tight">
                    {currentProduct.name}
                  </h3>

                  <div className="mb-6">
                    <p className="text-base font-bold text-accent bg-accent/10 px-4 py-2 rounded-full w-fit">
                      {currentProduct.price ? currentProduct.price : "Contact for Price"}
                    </p>
                    <p className="text-[11px] text-secondary/50 italic mt-2">
                      *Courier charges applicable as per destinations
                    </p>
                  </div>

                  <p className="text-secondary/80 font-sans leading-relaxed mb-6 text-sm sm:text-base">
                    {currentProduct.description}
                  </p>

                  {/* Additional Details */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 pb-6 border-b border-gray-100">
                    {currentProduct.fabric && (
                      <div>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Fabric</span>
                        <span className="text-primary font-medium text-sm">{currentProduct.fabric}</span>
                      </div>
                    )}
                    {currentProduct.dimensions && (
                      <div>
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Dimensions</span>
                        <span className="text-primary font-medium text-sm">{currentProduct.dimensions}</span>
                      </div>
                    )}
                    {currentProduct.care && (
                      <div className="col-span-2">
                        <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Care Instructions</span>
                        <span className="text-primary font-medium text-sm">{currentProduct.care}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-auto flex flex-col gap-3">
                    <button 
                      onClick={handleAddToCart}
                      disabled={addedToCart}
                      className={`w-full flex items-center justify-center gap-3 py-3.5 rounded-full font-bold text-base transition-all duration-300 shadow-lg ${
                        addedToCart 
                          ? "bg-green-500 text-white shadow-green-500/30" 
                          : "bg-primary text-white hover:bg-primary/90 shadow-primary/20 hover:-translate-y-0.5"
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
                      href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I'm interested in ${currentProduct.name} (${currentProduct.price || ''}). Can you please share more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 rounded-full font-bold text-base border border-[#25D366]/30 shadow-sm"
                    >
                      <MessageCircle className="w-5 h-5" /> Order via WhatsApp
                    </a>
                  </div>
                </>
              ) : (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-accent font-semibold tracking-wider uppercase text-xs font-sans bg-accent/10 px-3 py-1 rounded-full border border-accent/20 mb-3 inline-block">
                      {productCategory}
                    </span>
                    
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold text-primary mb-3 leading-tight">
                      {productName}
                    </h3>
                    
                    <p className="text-secondary/80 font-sans leading-relaxed text-sm sm:text-base mb-6">
                      Masterpiece handwoven silk showcasing traditional craftsmanship direct from Murshidabad's premier looms. Designed with pure organic luster and exquisite artisan detailing.
                    </p>

                    <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-4 mb-6">
                      <div className="flex items-center gap-2 text-accent font-semibold text-xs tracking-wider uppercase mb-1">
                        <Sparkles className="w-4 h-4 text-accent" /> Sole Manufacturers Guarantee
                      </div>
                      <p className="text-xs text-secondary/80 leading-relaxed">
                        Handcrafted from soil to garments with highest grade silk threads and precision handloom weaving.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <a 
                      href={`https://wa.me/919475019835?text=${encodeURIComponent(`Hi, I'm interested in the ${productName} (${productCategory}) featured in your Gallery. Can you please share pricing and availability?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#25D366] text-white hover:bg-[#20ba5c] transition-all rounded-full font-bold text-base shadow-lg shadow-[#25D366]/30"
                    >
                      <MessageCircle className="w-5 h-5" /> Enquire via WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
