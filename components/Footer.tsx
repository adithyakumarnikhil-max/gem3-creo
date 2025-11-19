import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full min-h-screen bg-secondary text-white overflow-hidden pt-32 flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2000&auto=format&fit=crop" 
          alt="Cathedral Ceiling" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </div>

      {/* Main CTA */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-gray-400">
          ● Contact Us
        </span>
        <h2 className="font-display text-[12vw] leading-[0.8] font-bold uppercase mb-12">
          Let's Build<br />Together
        </h2>
        <MagneticButton>
          <button className="px-12 py-5 bg-white text-secondary rounded-full font-bold tracking-widest text-sm uppercase hover:bg-gray-200 transition-colors">
            Send an Enquiry
          </button>
        </MagneticButton>
      </div>

      {/* Bottom Links */}
      <div className="relative z-10 w-full px-6 md:px-10 pb-10 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 border-t border-white/10 pt-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg uppercase tracking-widest mb-2 text-gray-400">Sitemap</h4>
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">Home</a>
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">Studio</a>
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">Projects</a>
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">Journals</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg uppercase tracking-widest mb-2 text-gray-400">Office</h4>
            <p className="text-sm text-gray-300">No 37, 21st Main Road, Marenahalli,<br/>JP Nagar 2nd Phase,<br/>Bangalore 560078</p>
            <p className="text-sm text-gray-300 mt-2">+91 9705075741</p>
            <p className="text-sm text-gray-300 mt-2">pavankumar.k@creodesigners.com<br/>creoarchitects1@gmail.com</p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg uppercase tracking-widest mb-2 text-gray-400">Socials</h4>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-gray-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-xs text-gray-500">© 2024 CREO CONSTRUCTIONS.</p>
            <p className="text-xs text-gray-500 mt-1">All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* Giant Text Cutout Anchor */}
      <div className="absolute bottom-[-2vw] left-0 w-full flex justify-center pointer-events-none opacity-10 select-none">
        <h1 className="font-display text-[20vw] leading-none font-bold text-white tracking-tighter">
          CREO
        </h1>
      </div>
    </footer>
  );
};