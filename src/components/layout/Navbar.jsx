import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const { totalItems } = useCart();

  // Reset mobile drawer upon route change during render
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Scrolled state for background transitions
          const scrolled = currentScrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          // Flexible smart scroll behavior for both mobile and laptop/desktop views
          const delta = currentScrollY - lastScrollYRef.current;

          // Only toggle visibility if scrolled past threshold to prevent jitter
          if (currentScrollY <= 20) {
            setIsVisible(true);
          } else if (Math.abs(delta) >= 15) {
            if (delta > 0 && currentScrollY > 80) {
              if (!isMobileMenuOpen) {
                setIsVisible(false);
              }
            } else if (delta < 0) {
              setIsVisible(true);
            }
            lastScrollYRef.current = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const isDark = !isScrolled && !isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !isVisible && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3'
          : 'bg-black/15 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none py-3 sm:py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">

          {/* Logo / Brand - Flexible scaling on mobile */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 z-50 min-w-0 shrink"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src={siteData.company.logo} 
              alt={siteData.company.name} 
              className="h-9 sm:h-10 md:h-12 w-auto object-contain rounded shrink-0 shadow-xs" 
            />
            <span className={`font-heading font-semibold text-base sm:text-xl md:text-2xl tracking-wide whitespace-nowrap truncate transition-colors ${
              isDark ? 'text-[#e8ce7b]' : 'text-primary'
            }`}>
              The Kamala Silks
            </span>
          </NavLink>

          {/* Desktop Nav (shown on desktop / tablet screens >= md) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {siteData.navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
                    isActive ? 'text-accent font-semibold' : (isDark ? 'text-[#e8ce7b]' : 'text-primary')
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Desktop Cart Icon */}
            <NavLink to="/cart" className="relative group p-1.5" aria-label="Shopping Cart">
              <ShoppingBag
                className={`w-6 h-6 transition-colors group-hover:text-accent ${isDark ? 'text-[#e8ce7b]' : 'text-primary'}`}
              />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md"
                >
                  {totalItems > 9 ? '9+' : totalItems}
                </motion.span>
              )}
            </NavLink>
          </nav>

          {/* Mobile View ONLY: Flexible bar showing only the two symbols (Cart & Menu) */}
          <div className="flex md:hidden items-center gap-1 sm:gap-2 z-50 shrink-0">
            {/* Symbol 1: Cart Icon */}
            <NavLink 
              to="/cart" 
              className="relative p-2 rounded-full hover:bg-black/5 active:scale-95 transition-all"
              aria-label="Shopping Cart"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingBag className={`w-6 h-6 transition-colors ${isDark ? 'text-[#e8ce7b]' : 'text-primary'}`} />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </NavLink>

            {/* Symbol 2: Menu / Close Toggle */}
            <button
              className="p-2 rounded-full hover:bg-black/5 active:scale-95 transition-all focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 transition-colors ${isDark ? 'text-[#e8ce7b]' : 'text-primary'}`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors ${isDark ? 'text-[#e8ce7b]' : 'text-primary'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl shadow-2xl py-5 px-5 md:hidden flex flex-col gap-2 border-t border-gray-100 z-40 max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              {siteData.navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-amber-50 text-accent font-semibold'
                        : 'text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>

            <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between">
              <NavLink
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-all w-full ${
                    isActive ? 'bg-amber-50 text-accent font-semibold' : 'text-primary hover:bg-gray-50'
                  }`
                }
              >
                <ShoppingBag className="w-5 h-5 text-accent" />
                <span className="flex-1">Cart</span>
                {totalItems > 0 && (
                  <span className="bg-accent text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'}
                  </span>
                )}
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
