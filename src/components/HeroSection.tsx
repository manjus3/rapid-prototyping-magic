
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-96 h-96 blur-3xl opacity-20 bg-blue-400 rounded-full" />
        <div className="absolute bottom-20 left-[5%] w-64 h-64 blur-3xl opacity-10 bg-purple-400 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl space-y-6 opacity-0 animate-fade-in animate-delay-100">
            <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full">
              <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">Innovative Solutions</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance">
              Rapid Prototyping <span className="text-gradient">for Visionary Ideas</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your concept into a functional prototype in record time. We specialize in building 
              proof-of-concept applications that demonstrate the full potential of your software vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View Our Process
              </Button>
            </div>
          </div>
          
          <div className="relative opacity-0 animate-fade-in animate-delay-300">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] circle-glow" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 opacity-0 animate-scale-in animate-delay-500">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Software Development" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-10 w-28 h-28 glass-card rounded-xl rotate-12 shadow-xl p-4 flex items-center justify-center animate-float">
              <div className="text-3xl font-bold text-gradient">MVP</div>
            </div>
            <div className="absolute -bottom-4 -left-8 glass-card rounded-xl shadow-xl p-4 w-32 h-32 -rotate-6 animate-float animate-delay-1000">
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Prototype in</span>
                <span className="text-3xl font-bold text-gradient">2 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
