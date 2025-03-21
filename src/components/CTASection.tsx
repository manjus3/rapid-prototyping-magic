
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700" />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white opacity-5" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-300 opacity-10" />
        <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full bg-white opacity-10 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-white opacity-10 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/10" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-6 opacity-0 animate-fade-in">
            <p className="text-xs font-medium text-white uppercase tracking-wider">Start Building Today</p>
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white text-balance opacity-0 animate-fade-in",
            "animate-delay-100"
          )}>
            Turn Your Vision Into Reality With Rapid Prototyping
          </h2>
          
          <p className={cn(
            "text-xl text-white/80 mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in",
            "animate-delay-200"
          )}>
            From concept to functional prototype in weeks, not months. 
            Our expert team is ready to bring your software idea to life.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in",
            "animate-delay-300"
          )}>
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-white border-white hover:bg-white/10">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
