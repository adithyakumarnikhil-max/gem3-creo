import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"]
  });

  const paragraph = "We partner with clients from day one to build homes that are not just structures, but extensions of the human spirit. Our philosophy is rooted in the belief that true luxury lies in simplicity.";
  const words = paragraph.split(" ");

  return (
    <section ref={containerRef} className="relative w-full bg-primary text-secondary py-32 md:py-48 px-6 md:px-12 rounded-t-[3rem] -mt-10 z-20 shadow-2xl shadow-black/50">
      <div className="flex flex-col md:flex-row gap-20 md:gap-0 items-start">
        {/* Left - Sticky Headline */}
        <div className="w-full md:w-1/3 md:sticky md:top-32">
          <div className="overflow-hidden">
             <motion.h2 
               initial={{ y: "100%" }}
               whileInView={{ y: 0 }}
               transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
               className="font-display text-6xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter"
             >
               Design You<br />Can Feel
             </motion.h2>
          </div>
          
          <div className="mt-12 hidden md:block">
             <MagneticButton>
              <button className="group flex items-center gap-4 px-8 py-4 bg-secondary text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-secondary/90 transition-colors">
                Explore Studio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Right - Scroll Reveal Text */}
        <div className="w-full md:w-2/3 md:pl-20">
          <p className="font-display text-4xl md:text-7xl leading-[1.1] font-medium text-secondary/20 flex flex-wrap gap-x-4 gap-y-2">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
              
              return (
                <motion.span key={i} style={{ opacity }} className="text-secondary">
                  {word}
                </motion.span>
              );
            })}
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-secondary/10 pt-8">
             <div className="text-accent text-sm font-medium leading-relaxed">
               CREO CONSTRUCTIONS<br/>
               SINCE 2019
             </div>
             <p className="text-secondary/60 text-lg leading-relaxed">
                We keep exploring, work together, grow brilliance, and shape tomorrow. Excellence is not an act, but a habit.
             </p>
          </div>
          
          <div className="mt-12 md:hidden block">
             <MagneticButton>
              <button className="group flex items-center gap-4 px-8 py-4 bg-secondary text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-secondary/90 transition-colors">
                Explore Studio
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};