
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left side - Text Content */}
          <div className="text-left">
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
            
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right side - Animated Graphic */}
          <div className="relative hidden lg:block">
            {/* Floating Code Blocks */}
            <div className="absolute inset-0">
              {[
                { text: '{ code }', delay: '0s', x: '10%', y: '20%' },
                { text: '</html>', delay: '1s', x: '70%', y: '10%' },
                { text: 'const', delay: '2s', x: '20%', y: '60%' },
                { text: '=> {}', delay: '3s', x: '80%', y: '50%' },
                { text: 'import', delay: '1.5s', x: '50%', y: '30%' },
                { text: 'function', delay: '2.5s', x: '15%', y: '80%' },
                { text: '<div>', delay: '0.5s', x: '85%', y: '75%' },
                { text: 'return', delay: '3.5s', x: '60%', y: '70%' }
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute text-yellow-400/60 font-mono text-sm animate-pulse"
                  style={{
                    left: item.x,
                    top: item.y,
                    animationDelay: item.delay,
                    animationDuration: '3s'
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>

            {/* Central Rotating Ring */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-64 h-64 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                <div className="w-48 h-48 border border-blue-400/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="w-32 h-32 border border-pink-400/50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '10s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Elements */}
            {[
              { size: 'w-4 h-4', color: 'bg-yellow-400', orbit: '80px', duration: '8s' },
              { size: 'w-3 h-3', color: 'bg-pink-400', orbit: '120px', duration: '12s' },
              { size: 'w-2 h-2', color: 'bg-blue-400', orbit: '160px', duration: '16s' },
              { size: 'w-3 h-3', color: 'bg-purple-400', orbit: '200px', duration: '20s' }
            ].map((item, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  animation: `spin ${item.duration} linear infinite`
                }}
              >
                <div
                  className={`${item.size} ${item.color} rounded-full`}
                  style={{
                    transform: `translateX(${item.orbit})`
                  }}
                ></div>
              </div>
            ))}

            {/* Binary Rain Effect */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-green-400 font-mono text-xs"
                  style={{
                    left: `${10 + i * 12}%`,
                    animation: `slide-down 6s linear infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                </div>
              ))}
            </div>

            {/* Floating Geometric Shapes */}
            {[
              { shape: 'triangle', x: '20%', y: '15%', delay: '0s' },
              { shape: 'square', x: '80%', y: '25%', delay: '2s' },
              { shape: 'hexagon', x: '15%', y: '70%', delay: '4s' },
              { shape: 'circle', x: '85%', y: '80%', delay: '1s' }
            ].map((item, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 border-2 border-cyan-400/40 animate-bounce"
                style={{
                  left: item.x,
                  top: item.y,
                  animationDelay: item.delay,
                  animationDuration: '3s',
                  clipPath: item.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                           item.shape === 'hexagon' ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' :
                           item.shape === 'square' ? 'none' : 'circle()',
                  borderRadius: item.shape === 'circle' ? '50%' : '0'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Crescent Moon */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full">
        <div className="absolute top-2 right-2 w-12 h-12 bg-slate-900 rounded-full"></div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
