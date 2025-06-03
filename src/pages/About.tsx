import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto pt-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </span>
              <br />
              <span className="text-white font-mono text-4xl lg:text-5xl">@chicanacodes</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Exploring the intersection of technology, education, and Latina identity
            </p>
          </div>

          {/* Personal Story */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                ¡Hola! I'm a Latina software developer passionate about making technology accessible to everyone, especially underrepresented communities. My journey into tech wasn't traditional – I started coding while working in a completely different field, teaching myself through online resources and countless hours of practice.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Now, I create content to help others navigate their own tech journeys. Through tutorials, articles, and personal stories, I aim to break down complex concepts and share the knowledge I wish I had when starting out.
              </p>
              <p className="text-slate-300 leading-relaxed">
                When I'm not coding or creating content, you can find me mentoring aspiring developers, speaking at tech conferences, or exploring new technologies to share with my community.
              </p>
            </div>
          </div>

          {/* What I Do */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-slate-900 font-bold text-xl">✍️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Content Creation</h3>
              <p className="text-slate-300 leading-relaxed">
                I write tutorials and articles about web development, focusing on making complex topics approachable and engaging. My content ranges from beginner-friendly guides to advanced technical deep-dives.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <p className="text-slate-300 leading-relaxed">
                Through my platform, I share learning resources, coding tips, and career advice. My goal is to help others overcome the barriers I faced when entering tech.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Technologies I Love</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">⚛️</span>
                </div>
                <h3 className="text-lg font-bold text-white">React</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-2xl">JS</span>
                </div>
                <h3 className="text-lg font-bold text-white">JavaScript</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-bold text-white">CSS/Tailwind</h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🐍</span>
                </div>
                <h3 className="text-lg font-bold text-white">Python</h3>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-slate-300 mb-8">
              Follow me on social media or reach out through the contact form. I love hearing from fellow developers and learners!
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://instagram.com/chicanacodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://youtube.com/@chicanacodes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://bsky.app/profile/chicanacodes.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-yellow-400 transition-colors"
              >
                Bluesky
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;