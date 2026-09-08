import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, X, MessageCircle, PackageOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';
import PageHeader from '../components/common/PageHeader';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, clearCart } = useCart();
  const navigate = useNavigate();

  const buildWhatsAppMessage = () => {
    if (cartItems.length === 0) return '';
    const lines = cartItems.map((item) => {
      const priceNum = item.price ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : 0;
      const priceStr = item.price ? ` — ₹${priceNum * item.qty}` : '';
      return `• ${item.name} (Qty: ${item.qty})${priceStr} — ${item.fabric || item.category}`;
    });
    const total = cartItems.reduce((acc, item) => acc + (item.price ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : 0) * item.qty, 0);
    const totalStr = total > 0 ? `\n\n*Estimated Total: ₹${total}*\n*(Courier charges applicable as per destination)*` : '';
    
    return encodeURIComponent(
      `Hi, I'd like to place an order for the following items from The Kamala Silks:\n\n${lines.join('\n')}${totalStr}\n\nPlease confirm availability and payment details. Thank you!`
    );
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <PageHeader 
        title="Your Cart" 
        subtitle="Review your selected sarees." 
        bgImage="/images/pic15.jpeg"
        badge="YOUR CART SELECTION"
        breadcrumb="Cart"
      />

      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
          /* ── Empty state ── */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-28 text-center"
          >
            <div className="w-28 h-28 rounded-full bg-primary/5 flex items-center justify-center mb-8">
              <PackageOpen className="w-14 h-14 text-primary/30" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              Your cart is empty
            </h2>
            <p className="text-secondary/60 font-sans text-lg mb-10 max-w-sm">
              Explore our premium handcrafted saree collection and add your favourites here.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="px-10 py-4 bg-primary text-white rounded-full font-bold text-base hover:bg-accent hover:-translate-y-1 transition-all shadow-lg shadow-primary/25"
            >
              Browse Products
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* ── Item list ── */}
            <div className="w-full lg:flex-1 flex flex-col gap-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-heading font-bold text-primary">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                </h2>
                <button
                  onClick={clearCart}
                  className="flex items-center gap-1.5 text-sm text-red-400 hover:text-red-600 font-medium transition-colors"
                >
                  <Trash2 className="w-4 h-4" /> Clear All
                </button>
              </div>

              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-5 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
                  >
                    {/* Thumbnail */}
                    <div
                      className="w-24 h-28 md:w-32 md:h-36 rounded-xl overflow-hidden shrink-0 cursor-pointer bg-gray-100"
                      onClick={() => navigate('/products')}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col flex-1 justify-between py-1">
                      <div>
                        <span className="text-xs font-bold text-accent uppercase tracking-widest">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-heading font-bold text-primary mt-0.5 mb-1 leading-tight">
                          {item.name}
                        </h3>
                        {item.fabric && (
                          <p className="text-sm text-secondary/60 font-sans">{item.fabric}</p>
                        )}
                        <p className="mt-2 text-sm font-semibold text-accent/80 bg-accent/10 px-3 py-1 rounded-full w-fit">
                          {item.price ? item.price : "Contact for Price"}
                        </p>
                        <p className="text-[10px] text-secondary/50 italic mt-1.5">*Courier charges applicable as per destinations</p>
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-1 py-1">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center font-bold text-primary text-sm">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 rounded-full text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ── Summary card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-80 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sticky top-28"
            >
              <h3 className="text-xl font-heading font-bold text-primary mb-6 pb-4 border-b border-gray-100">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                {cartItems.map((item) => {
                  const priceNum = item.price ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : 0;
                  return (
                    <div key={item.id} className="flex justify-between text-sm font-sans">
                      <span className="text-secondary/80 truncate max-w-[160px]">
                        {item.name} <span className="text-gray-400">×{item.qty}</span>
                      </span>
                      <span className="text-primary font-medium shrink-0">
                        {item.price ? `₹${priceNum * item.qty}` : 'Price on request'}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Total Calculation */}
              <div className="flex justify-between items-center py-4 border-t border-gray-100 mb-6">
                <span className="text-lg font-bold text-primary">Total</span>
                <span className="text-xl font-bold text-accent">
                  ₹{cartItems.reduce((acc, item) => acc + (item.price ? parseInt(item.price.replace(/[^\d]/g, ''), 10) : 0) * item.qty, 0)}
                </span>
              </div>

              <div className="bg-accent/5 rounded-2xl p-4 mb-8 text-center border border-accent/10">
                <p className="text-sm text-secondary/70 font-sans leading-relaxed">
                  Proceed via WhatsApp to finalize your order. <br/><span className="text-xs font-semibold italic text-accent/80 mt-1 block">*Courier charges applicable as per destinations</span>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`https://wa.me/919475019835?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enquire via WhatsApp
                </a>

                <button
                  onClick={() => navigate('/products')}
                  className="w-full py-4 bg-primary/5 text-primary rounded-2xl font-semibold hover:bg-primary/10 transition-colors border border-primary/10"
                >
                  + Add More Items
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
