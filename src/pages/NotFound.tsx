
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-blue-100 blur-xl opacity-70 scale-150"></div>
        <div className="relative text-8xl md:text-9xl font-display font-bold text-primary">404</div>
      </div>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
