import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X, Phone, Compass, BookOpen } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Quiet Utility Bar */}
      <div className="bg-espresso text-taupe-light text-xs tracking-wider border-b border-espresso-700 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-taupe">
              <BookOpen className="w-3.5 h-3.5 text-caramel" />
              Bhubaneswar’s Culture & Book Café
            </span>
            <span className="text-taupe-dark">|</span>
            <span className="text-taupe-light">Janpath, Master Canteen • 8:30 AM – 10:30 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:+917381285555"
              className="hover:text-warmwhite transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-caramel" />
              +91 73812 85555
            </a>
            <span className="text-taupe-dark">|</span>
            <Link to="/reservations" className="text-caramel hover:text-caramel-light transition-colors">
              Table Enquiries
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-warmwhite/95 backdrop-blur-md shadow-sm border-b border-taupe-border/60 py-3.5'
            : 'bg-warmwhite border-b border-taupe-border/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link to="/" className="group flex flex-col items-start focus:outline-none">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-espresso uppercase group-hover:text-caramel transition-colors">
              BOCCA CAFE
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-mutedgray font-medium -mt-1">
              Bhubaneswar • Odisha
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-editorial uppercase transition-all duration-200 relative py-1 ${
                  isActive(link.path)
                    ? 'text-espresso font-semibold'
                    : 'text-charcoal-muted hover:text-espresso font-normal'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-caramel rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons: Find Us & Cart */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-1.5 text-xs uppercase tracking-editorial font-medium text-espresso bg-ivory hover:bg-taupe-light/50 border border-taupe-border px-3 py-1.5 rounded transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-caramel" />
              Find Us
            </Link>

            {/* Cart Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open Cart (${totalItems} items)`}
              className="relative p-2.5 rounded-full text-espresso hover:bg-ivory border border-taupe-border/80 transition-all hover:border-caramel"
            >
              <ShoppingBag className="w-5 h-5 text-espresso" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-espresso text-warmwhite text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-warmwhite">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-espresso hover:bg-ivory border border-taupe-border/80"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-warmwhite border-t border-taupe-border/60 px-6 py-5 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base tracking-editorial uppercase py-2 border-b border-taupe-border/30 flex items-center justify-between ${
                    isActive(link.path)
                      ? 'text-caramel font-semibold'
                      : 'text-charcoal hover:text-espresso'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive(link.path) && <span className="w-2 h-2 rounded-full bg-caramel" />}
                </Link>
              ))}

              <div className="pt-2 flex flex-col space-y-2.5 text-sm text-charcoal-muted">
                <a
                  href="tel:+917381285555"
                  className="flex items-center gap-2 py-2 text-espresso font-medium"
                >
                  <Phone className="w-4 h-4 text-caramel" />
                  +91 73812 85555
                </a>
                <p className="text-xs text-mutedgray">
                  2nd Floor, 108/B, Janpath Road, Master Canteen Area, Ashok Nagar, Bhubaneswar
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
