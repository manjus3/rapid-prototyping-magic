
import { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "HealthSync Patient Portal",
    description: "AI-powered health monitoring system for remote patient care",
    challenge: "A healthcare startup needed to demonstrate their innovative patient monitoring concept to investors.",
    solution: "We developed a functional prototype in 3 weeks that showcased real-time health data visualization, AI-driven insights, and a telemedicine interface.",
    result: "Secured $2M in seed funding based on the prototype demonstration. Now in full development.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["Healthcare", "AI", "Mobile App"]
  },
  {
    id: 2,
    title: "TradeX Financial Platform",
    description: "Algorithmic trading platform with intuitive interface for retail investors",
    challenge: "A fintech entrepreneur wanted to validate a complex trading algorithm concept without building the full infrastructure.",
    solution: "We built a prototype that simulated algorithmic trading using historical data, with interactive visualizations and user-friendly controls.",
    result: "The prototype helped secure a partnership with a major financial institution and validate the core technology.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["Fintech", "Data Visualization", "Web Application"]
  },
  {
    id: 3,
    title: "EduConnect Learning Platform",
    description: "Personalized learning environment with adaptive curriculum",
    challenge: "An education startup needed to showcase how their adaptive learning technology would work for different student profiles.",
    solution: "We created a prototype that demonstrated personalized learning paths, interactive content delivery, and progress tracking.",
    result: "The prototype was instrumental in pilot program adoption by three school districts.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    tags: ["EdTech", "Personalization", "Web Platform"]
  }
];

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 600) as unknown as number;
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 600) as unknown as number;
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[400px] h-[400px] bg-purple-100 rounded-full opacity-30 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-4">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">Case Studies</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-balance">
            Prototype Projects That Made an Impact
          </h2>
          <p className="text-gray-600 text-lg">
            See how our rapid prototyping capabilities have helped innovators bring their software ideas to life.
          </p>
        </div>
        
        <div className="relative">
          <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <img 
                  src={activeProject.image}
                  alt={activeProject.title}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-all duration-500",
                    isAnimating ? "opacity-0 scale-105" : "opacity-100 scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {activeProject.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {activeProject.title}
                  </h3>
                  <p className="text-white/80">{activeProject.description}</p>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col">
                <div className={cn(
                  "flex-1 transition-all duration-500",
                  isAnimating ? "opacity-0 translate-x-6" : "opacity-100 translate-x-0"
                )}>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">The Challenge</h4>
                    <p className="text-gray-700">{activeProject.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Our Solution</h4>
                    <p className="text-gray-700">{activeProject.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">The Results</h4>
                    <p className="text-gray-700">{activeProject.result}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">
                      Project {activeIndex + 1} of {projects.length}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full" 
                      onClick={prevProject}
                      disabled={isAnimating}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full" 
                      onClick={nextProject}
                      disabled={isAnimating}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
