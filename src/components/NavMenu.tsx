
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="h-16">
            <img 
              src="/lovable-uploads/1a49666b-f247-41e9-bf1c-ad39387531d9.png" 
              alt="Rockae Logo" 
              className="h-full w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              How it works
            </button>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button 
              variant="outline" 
              className="text-[#8E9196] border-[#8E9196] hover:text-[#8E9196] hover:bg-[#8E9196]/10"
              onClick={() => window.location.href = "https://app.rockae.com/login"}
            >
              Sign in
            </Button>
            <Button
              onClick={() => window.location.href = "https://app.rockae.com/register"}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Create Free Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 text-left">
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <button 
                onClick={() => {
                  scrollToSection('how-it-works');
                  setIsOpen(false);
                }} 
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                How it works
              </button>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <Button 
                variant="outline" 
                className="text-[#8E9196] border-[#8E9196] hover:text-[#8E9196] hover:bg-[#8E9196]/10"
                onClick={() => window.location.href = "https://app.rockae.com/login"}
              >
                Sign in
              </Button>
              <Button onClick={() => window.location.href = "https://app.rockae.com/register"}>
                Create Free Account
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
