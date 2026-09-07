import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isDark = !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 z-50">
            <img src={siteData.company.logo} alt={siteData.company.name} className="h-12 w-auto object-contain" />
            <span className={`font-heading font-semibold text-xl md:text-2xl tracking-wide ${isDark ? 'text-white' : 'text-primary'}`}>
              The Kamala Silks
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : (isDark ? 'text-white/90' : 'text-primary')
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Cart Icon */}
            <NavLink to="/cart" className="relative group">
              <ShoppingBag
                className={`w-6 h-6 transition-colors group-hover:text-accent ${isDark ? 'text-white/90' : 'text-primary'}`}
              />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md"
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </motion.span>
              )}
            </NavLink>
          </nav>

          {/* Mobile right side: cart + menu toggle */}
          <div className="flex md:hidden items-center gap-3 z-50">
            <NavLink to="/cart" className="relative">
              <ShoppingBag className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </NavLink>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 md:hidden flex flex-col gap-4"
          >
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block text-lg font-medium py-2 border-b border-gray-100 ${
                    isActive ? 'text-accent' : 'text-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-2 text-lg font-medium py-2 ${isActive ? 'text-accent' : 'text-primary'}`
              }
            >
              <ShoppingBag className="w-5 h-5" />
              Cart {totalItems > 0 && <span className="ml-1 bg-accent text-white text-xs px-2 py-0.5 rounded-full">{totalItems}</span>}
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
