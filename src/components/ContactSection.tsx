
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real implementation, you would send this data to your backend
    alert('Thank you for your message. We will get back to you shortly!');
    setFormState({
      name: '',
      email: '',
      projectType: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full mb-4">
            <p className="text-xs font-medium text-blue-600 uppercase tracking-wider">Get In Touch</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-balance">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-gray-600 text-lg">
            Let's discuss how we can help you transform your software concept into a working prototype.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="p-8 md:p-10 lg:col-span-2 bg-primary text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/80 to-blue-800/90" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-xl" />
                <div className="absolute top-1/3 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-10 blur-xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-white/70 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">contact@potencia.com</p>
                  </div>
                  
                  <div>
                    <p className="text-white/70 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <p className="text-white/70 text-sm mb-1">Address</p>
                    <p className="text-white font-medium">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 pt-12 border-t border-white/20">
                  <p className="text-white/70 mb-6">
                    Ready to discuss your project with our team of prototype experts?
                  </p>
                  <Button 
                    className="bg-white text-primary hover:bg-white/90 rounded-full" 
                    size="lg"
                  >
                    Schedule a Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 lg:col-span-3">
              <h3 className="text-2xl font-display font-bold mb-6">Tell Us About Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formState.name} 
                      onChange={handleChange} 
                      placeholder="John Doe"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formState.email} 
                      onChange={handleChange} 
                      placeholder="john@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    value={formState.projectType} 
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary focus:ring focus:ring-primary/30 focus:ring-opacity-50"
                    required
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="mvp">Minimum Viable Product (MVP)</option>
                    <option value="poc">Proof of Concept</option>
                    <option value="prototype">Interactive Prototype</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formState.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project idea and requirements"
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
