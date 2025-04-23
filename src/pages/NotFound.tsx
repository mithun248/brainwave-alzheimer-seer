
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container">
          <div className="max-w-md mx-auto text-center py-12">
            <Brain className="w-16 h-16 mx-auto text-alzheimer mb-4" />
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. Let's get you back to analyzing brain scans.
            </p>
            <Link to="/">
              <Button className="bg-alzheimer hover:bg-alzheimer-dark">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
