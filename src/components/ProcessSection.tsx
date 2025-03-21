
import { cn } from '@/lib/utils';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  delay: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your vision, define core features, and create a focused development plan for your prototype.",
    delay: "animate-delay-100"
  },
  {
    number: "02",
    title: "Rapid Design",
    description: "Our designers quickly create intuitive interfaces that showcase your concept's unique value proposition.",
    delay: "animate-delay-200"
  },
  {
    number: "03",
    title: "Agile Development",
    description: "We build a working prototype in 2-4 weeks using agile methodologies and modern development frameworks.",
    delay: "animate-delay-300"
  },
  {
    number: "04",
    title: "Testing & Iteration",
    description: "We validate functionality, gather feedback, and rapidly implement improvements to enhance your prototype.",
    delay: "animate-delay-400"
  },
  {
    number: "05",
    title: "Presentation & Handoff",
    description: "We help you showcase your prototype effectively and provide all assets for the next development phase.",
    delay: "animate-delay-500"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full opacity-70 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-4">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">Our Approach</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-balance">
            A Streamlined Process for Rapid Results
          </h2>
          <p className="text-gray-600 text-lg">
            Our proven methodology delivers functional prototypes in weeks, not months,
            without compromising on quality or scalability.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-200 hidden md:block" />
          
          <div className="space-y-16 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "md:grid md:grid-cols-2 md:gap-10 items-center relative opacity-0 animate-fade-in",
                  step.delay
                )}
              >
                <div className={cn(
                  "md:text-right",
                  index % 2 === 1 && "md:order-2"
                )}>
                  <div className={cn(
                    "hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 z-10"
                  )} />
                  
                  <span className="text-6xl font-display font-bold text-gray-100">{step.number}</span>
                  <h3 className="text-2xl font-display font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className={cn(
                  "mt-6 md:mt-0 glass-card rounded-xl overflow-hidden",
                  index % 2 === 1 && "md:order-1"
                )}>
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <img 
                      src={`https://images.unsplash.com/photo-${1580000000000 + index * 100000}`}
                      alt={`Process step ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
