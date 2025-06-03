import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const numStars = 200;
    const maxRadius = 2;

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxRadius,
        speed: 0.1 + Math.random() * 0.5
      });
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)'; // Matching slate-900 background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        // Move star
        star.y += star.speed;

        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Star field animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.5 }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left side - Text Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Hola,
                </span>
                <br />
                <span className="text-white font-mono text-4xl lg:text-6xl">I'm @chicanacodes</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Join me on my journey exploring the cosmos of code, where every line written opens new possibilities.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Through tutorials, articles, and shared experiences, I'm here to help you navigate the vast universe of technology.
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
                Read Articles
              </button>
            </div>
          </div>

          {/* Right side - Space-themed Animation */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;