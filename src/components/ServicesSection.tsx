
import { 
  Rocket, 
  Code, 
  Layers, 
  Zap, 
  Cpu, 
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, delay, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 opacity-0 animate-fade-in",
        delay,
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-50 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-4">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">Our Expertise</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-balance">
            Comprehensive Rapid Prototyping Services
          </h2>
          <p className="text-gray-600 text-lg">
            We specialize in transforming your software concepts into tangible, 
            functional applications through our rapid prototyping services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <ServiceCard 
            title="Concept Validation" 
            description="Quickly test your idea with a functional prototype to validate market fit and gather user feedback."
            icon={<Rocket className="h-6 w-6 text-blue-500" />}
            delay="animate-delay-100"
          />
          
          <ServiceCard 
            title="MVP Development" 
            description="Build a minimal viable product with core features to showcase your solution's value proposition."
            icon={<Code className="h-6 w-6 text-blue-500" />}
            delay="animate-delay-200"
          />
          
          <ServiceCard 
            title="Proof of Concept" 
            description="Demonstrate technical feasibility and overcome critical challenges with focused technical prototypes."
            icon={<Layers className="h-6 w-6 text-blue-500" />}
            delay="animate-delay-300"
          />
          
          <ServiceCard 
            title="Rapid Iteration" 
            description="Quickly implement feedback and evolve your prototype through efficient development cycles."
            icon={<Zap className="h-6 w-6 text-blue-500" />}
            delay="animate-delay-400"
          />
          
          <ServiceCard 
            title="Technical Architecture" 
            description="Design scalable systems with future growth in mind, even at the prototype stage."
            icon={<Cpu className="h-6 w-6 text-blue-500" />}
            delay="animate-delay-500"
          />
          
          <ServiceCard 
            title="User Experience Design" 
            description="Create intuitive interfaces that showcase your software's functionality with clarity."
            icon={<Settings className="h-6 w-6 text-blue-500" />}
            delay="animate-delay-600"
          />
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-fade-in animate-delay-700">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
