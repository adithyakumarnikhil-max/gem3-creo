import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Vista } from './components/Vista';
import { Story } from './components/Story';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Collection } from './components/Collection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

const App: React.FC = () => {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Slower, heavier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-secondary font-sans antialiased selection:bg-white selection:text-black cursor-none">
      <CustomCursor />
      
      {/* Cinematic Grain Overlay */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Vista />
        <Story />
        <Projects />
        <Process />
        <Collection />
      </main>
      <Footer />
    </div>
  );
};

export default App;