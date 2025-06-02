
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating Clouds */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-800/30 to-transparent rounded-t-full transform -rotate-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-24 bg-gradient-to-t from-blue-700/20 to-transparent rounded-t-full transform rotate-2"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex items-center justify-center min-h-screen pt-20">
          {/* Centered Content */}
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Chicana
                </span>
                <br />
                <span className="text-white font-mono text-4xl lg:text-6xl">CODES</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Empowering Latinas in Tech through Education, Community, and Code
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Join our cosmic journey of learning programming, web development, and technology skills that will launch your career to new heights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('tutorials')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Learning
              </button>
              <button 
                onClick={() => scrollToSection('articles')}
                className="border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                Browse Articles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Crescent Moon */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full">
        <div className="absolute top-2 right-2 w-12 h-12 bg-slate-900 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
