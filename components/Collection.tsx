import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1000&auto=format&fit=crop",
];

export const Collection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="w-full bg-primary py-32 overflow-hidden">
      <div className="px-6 md:px-10 flex justify-between items-end mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-secondary">
          The CREO<br />Collection
        </h2>
        <div className="hidden md:flex gap-4">
          <button className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full border border-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing pl-6 md:pl-10">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-8"
        >
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className="min-w-[300px] md:min-w-[400px] h-[500px] relative overflow-hidden"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <img 
                src={src} 
                alt={`Collection ${index}`} 
                className="w-full h-full object-cover pointer-events-none" 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};