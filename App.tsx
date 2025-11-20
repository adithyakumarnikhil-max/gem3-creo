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
      
      {/* Cinematic Grain Overlay - CSS Version for Stability */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.05] mix-blend-overlay"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             transform: 'translateZ(0)'
           }}
      />

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