
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">C</span>
            </div>
            <span className="text-white font-bold text-xl">Chicana Codes</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-yellow-400 transition-colors">Home</a>
            <a href="#articles" className="text-slate-300 hover:text-yellow-400 transition-colors">Articles</a>
            <a href="#tutorials" className="text-slate-300 hover:text-yellow-400 transition-colors">Tutorials</a>
            <a href="#about" className="text-slate-300 hover:text-yellow-400 transition-colors">About</a>
            <a href="#contact" className="text-slate-300 hover:text-yellow-400 transition-colors">Contact</a>
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
              <a href="#home" className="text-slate-300 hover:text-yellow-400 transition-colors">Home</a>
              <a href="#articles" className="text-slate-300 hover:text-yellow-400 transition-colors">Articles</a>
              <a href="#tutorials" className="text-slate-300 hover:text-yellow-400 transition-colors">Tutorials</a>
              <a href="#about" className="text-slate-300 hover:text-yellow-400 transition-colors">About</a>
              <a href="#contact" className="text-slate-300 hover:text-yellow-400 transition-colors">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
