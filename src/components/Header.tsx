
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string, sectionId?: string) => {
    if (sectionId) {
      scrollToSection(sectionId);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10">
              <img 
                src="/lovable-uploads/df36c27f-1399-4270-92c7-fe40c5eb1038.png" 
                alt="Chicana Codes Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-white font-bold text-xl">Chicana Codes</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('/', 'home')}
              className="text-slate-300 hover:text-yellow-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('/', 'articles')}
              className="text-slate-300 hover:text-yellow-400 transition-colors"
            >
              Articles
            </button>
            <button 
              onClick={() => handleNavClick('/', 'tutorials')}
              className="text-slate-300 hover:text-yellow-400 transition-colors"
            >
              Tutorials
            </button>
            <Link 
              to="/about" 
              className="text-slate-300 hover:text-yellow-400 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-slate-300 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('/', 'home')}
                className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('/', 'articles')}
                className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
              >
                Articles
              </button>
              <button 
                onClick={() => handleNavClick('/', 'tutorials')}
                className="text-slate-300 hover:text-yellow-400 transition-colors text-left"
              >
                Tutorials
              </button>
              <Link 
                to="/about" 
                onClick={() => handleNavClick('/about')}
                className="text-slate-300 hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => handleNavClick('/contact')}
                className="text-slate-300 hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
