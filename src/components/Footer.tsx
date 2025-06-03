
import { Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
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
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10">
                <img 
                  src="/lovable-uploads/df36c27f-1399-4270-92c7-fe40c5eb1038.png" 
                  alt="Chicana Codes Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">Chicana Codes</span>
            </Link>
            <p className="text-slate-400 mb-4 max-w-md">
              Empowering Latinas in tech through quality education, supportive community, and hands-on coding experiences. Join us on this cosmic journey of growth and learning.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://youtube.com/@chicanacodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors"
                title="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@chicanacodes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors"
                title="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="https://bsky.app/profile/chicanacodes.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors"
                title="Bluesky"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-2.67.297-5.568-.628-6.383-3.364C.378 9.418 0 4.458 0 3.768c0-.688.139-1.86.902-2.203C1.561 1.266 2.566.944 5.202 2.805c2.752 1.942 5.711 5.881 6.798 7.995z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('articles')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Articles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tutorials')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Tutorials
                </button>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('tutorials')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tutorials')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  JavaScript
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tutorials')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  React
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tutorials')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Python
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('articles')}
                  className="text-slate-400 hover:text-yellow-400 transition-colors"
                >
                  Career Tips
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Chicana Codes. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-pink-400" /> for the Latina tech community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
