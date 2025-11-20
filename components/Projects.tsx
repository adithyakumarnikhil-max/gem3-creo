import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';

const projects = [
  {
    id: 1,
    title: "Villa Nova",
    location: "Copenhagen",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Obsidian",
    location: "Kyoto",
    year: "2022",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Concrete Solace",
    location: "Portland",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Azure Heights",
    location: "Bangalore",
    year: "2021",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2000&auto=format&fit=crop",
  },
];

export const Projects: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-secondary text-white hidden md:block">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Fixed Header Overlay */}
        <div className="absolute top-10 left-10 z-20 mix-blend-difference">
           <h2 className="font-display text-4xl font-bold uppercase tracking-tight">Selected Works</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-20 w-full">
          
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[40vw] h-[70vh] flex flex-col justify-center">
             <h2 className="font-display text-[8rem] leading-[0.8] font-bold uppercase mb-8">
               The<br/>Work
             </h2>
             <p className="text-gray-400 max-w-md text-xl leading-relaxed mb-10">
               A curated selection of our defining projects. Where engineering meets art, and vision becomes reality.
             </p>
             <MagneticButton>
                <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-secondary transition-all duration-300 cursor-pointer">
                  Drag ->
                </div>
             </MagneticButton>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Outro Card */}
          <div className="flex-shrink-0 w-[30vw] h-[70vh] flex items-center justify-center">
             <MagneticButton>
                <button className="text-8xl font-display uppercase font-bold hover:text-gray-400 transition-colors">
                  View All<br/>Projects
                </button>
             </MagneticButton>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative w-[60vw] h-[70vh] flex-shrink-0 overflow-hidden bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700 ease-out">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      
      <div className="absolute bottom-0 left-0 w-full p-10 flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div>
          <div className="flex items-center gap-4 mb-2">
             <span className="text-xs font-bold border border-white/30 rounded-full px-3 py-1">{project.year}</span>
             <span className="text-xs font-bold uppercase tracking-widest">{project.location}</span>
          </div>
          <h3 className="font-display text-6xl uppercase font-bold">{project.title}</h3>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
              ->
           </div>
        </div>
      </div>
    </div>
  );
};

// Fallback for Mobile (Vertical Stack)
export const MobileProjects = () => {
    // Implementation of vertical stack for mobile would go here or be integrated into main component with media queries
    return null; // handled via CSS hidden/block classes in main App structure if needed, or merging logic.
};