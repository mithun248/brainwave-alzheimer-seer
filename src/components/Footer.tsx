
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-alzheimer" />
            <span className="text-lg font-semibold">BrainWave</span>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link to="/about" className="text-sm hover:text-alzheimer">About</Link>
            <Link to="/resources" className="text-sm hover:text-alzheimer">Resources</Link>
            <Link to="/privacy" className="text-sm hover:text-alzheimer">Privacy Policy</Link>
            <Link to="/terms" className="text-sm hover:text-alzheimer">Terms of Service</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BrainWave AI. All rights reserved.
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          This application is for research and educational purposes only. Not intended for clinical diagnosis.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
