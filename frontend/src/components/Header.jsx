import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* Logo Icon - Paper Plane with 3 Lambdas */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Lambda 1 - Top */}
              <path d="M24 8 L20 14 L24 14 L28 8 Z" fill="#6366F1" />
              
              {/* Lambda 2 - Bottom Left */}
              <path d="M12 32 L8 38 L12 38 L16 32 Z" fill="#6366F1" />
              
              {/* Lambda 3 - Bottom Right */}
              <path d="M36 32 L32 38 L36 38 L40 32 Z" fill="#6366F1" />
              
              {/* Paper Plane - Center */}
              <path d="M24 18 L30 24 L24 30 L18 24 Z M24 18 L24 12 M30 24 L36 24 M24 30 L24 36 M18 24 L12 24" 
                    stroke="#00BFB3" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="#00BFB3" 
                    fillOpacity="0.3" />
            </svg>
            
            {/* Brand Name */}
            <span className="text-xl lg:text-2xl font-bold tracking-wider" style={{ color: '#00BFB3' }}>
              BRANDSURGE
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm font-semibold tracking-wider transition-colors duration-300 ${
                  link.active
                    ? 'text-[#00BFB3]'
                    : 'text-gray-900 hover:text-[#00BFB3]'
                }`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3 text-sm font-semibold tracking-wider ${
                    link.active
                      ? 'text-[#00BFB3]'
                      : 'text-gray-900 hover:text-[#00BFB3]'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
