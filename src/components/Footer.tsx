
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Potencia</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Transforming ideas into exceptional software solutions with precision and creativity.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Rapid Prototyping</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">UI/UX Design</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {currentYear} Potencia. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
