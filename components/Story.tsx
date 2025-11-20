import React from 'react';
import { motion } from 'framer-motion';
import { RevealText } from './ui/RevealText';

export const Story: React.FC = () => {
  return (
    <section className="w-full bg-primary py-20 px-6 md:px-10">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] overflow-hidden relative">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2000&auto=format&fit=crop"
            alt="Modern Corporate Architecture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-20 pt-10 md:pt-0">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest uppercase text-accent mb-8"
          >
            ● Our Story
          </motion.span>
          
          <RevealText>
            <h3 className="font-display text-5xl md:text-7xl leading-none font-medium text-secondary mb-8">
              Timeless<br />Architecture
            </h3>
          </RevealText>

          <div className="space-y-6 text-lg text-secondary/80 max-w-lg">
            <RevealText delay={0.2} tag="p">
              Founded in 2019, CREO Constructions has grown to become a global leader in minimalist luxury. We believe that a home should be a sanctuary, a place that breathes with its inhabitants.
            </RevealText>
            <RevealText delay={0.3} tag="p">
              Our work is characterized by clean lines, raw materials, and an unwavering dedication to the natural environment. Every project is a dialogue between the land and the structure.
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
};