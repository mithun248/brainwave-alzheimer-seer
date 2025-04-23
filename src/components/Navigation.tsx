
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-85">
          <Brain className="h-6 w-6 text-alzheimer animate-pulse-soft" />
          <span className="text-xl font-semibold">BrainWave</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-sm font-medium hover:text-alzheimer">
            Home
          </Link>
          <Link to="/analyze" className="text-sm font-medium hover:text-alzheimer">
            Analyze
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-alzheimer">
            About
          </Link>
          <Link to="/resources" className="text-sm font-medium hover:text-alzheimer">
            Resources
          </Link>
        </nav>
        <div className="ml-4">
          <Button size="sm" className="bg-alzheimer hover:bg-alzheimer-dark">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
