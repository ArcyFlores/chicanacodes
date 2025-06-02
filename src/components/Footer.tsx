
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10">
                <img 
                  src="/lovable-uploads/df36c27f-1399-4270-92c7-fe40c5eb1038.png" 
                  alt="Chicana Codes Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl">Chicana Codes</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Empowering Latinas in tech through quality education, supportive community, and hands-on coding experiences. Join us on this cosmic journey of growth and learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Articles</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">JavaScript</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">React</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Python</a></li>
              <li><a href="#" className="text-slate-400 hover:text-yellow-400 transition-colors">Career Tips</a></li>
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
