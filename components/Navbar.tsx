import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';

const links = [
  { name: "HOME", href: "#" },
  { name: "STUDIO", href: "#" },
  { name: "PROJECTS", href: "#" },
  { name: "JOURNALS", href: "#" },
  { name: "GALLERY", href: "#" },
];

export const Navbar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-10 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'bg-secondary/10 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <span className="font-display font-bold text-2xl tracking-[0.2em] text-white">
          CREO
        </span>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative text-sm font-medium tracking-widest transition-all duration-300 ${
              hoveredLink && hoveredLink !== link.name ? 'opacity-40 text-white' : 'opacity-100 text-white'
            }`}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.name}
            {hoveredLink === link.name && (
              <motion.div
                layoutId="nav-dot"
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>

      <MagneticButton>
        <button className="px-6 py-2 rounded-full border border-white/30 text-white text-xs tracking-widest font-semibold uppercase bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
          Contact Us
        </button>
      </MagneticButton>
    </motion.nav>
  );
};