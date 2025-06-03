
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
                About
              </span>
              <br />
              <span className="text-white font-mono text-4xl lg:text-5xl">Chicana Codes</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Empowering Latinas in tech through education, community, and code
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                At Chicana Codes, we believe that technology should be accessible to everyone, especially the Latina community. We're on a mission to bridge the gap in tech representation by providing quality education, mentorship, and a supportive community for Latinas looking to break into the tech industry.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                We envision a future where Latina women are well-represented in all areas of technology, from software development to data science, from startups to Fortune 500 companies. Through our educational content and community support, we're building the next generation of Latina tech leaders.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality Education</h3>
                <p className="text-slate-400">
                  Comprehensive tutorials and articles covering everything from beginner programming concepts to advanced development techniques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Supportive Community</h3>
                <p className="text-slate-400">
                  A welcoming space where Latinas can connect, share experiences, and support each other's growth in tech.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Career Growth</h3>
                <p className="text-slate-400">
                  Resources, mentorship, and real-world projects to help you build your portfolio and advance your tech career.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 p-8 rounded-lg border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Chicana Codes was born from the recognition that representation matters in technology. As Latinas in tech, we experienced firsthand the challenges of being underrepresented in a rapidly growing industry. We noticed the lack of resources specifically tailored to our community's unique experiences and needs.
            </p>
            <p className="text-slate-300 leading-relaxed">
              That's why we created this platform – to be the resource we wished we had when we were starting our tech journeys. Every article, tutorial, and piece of content is crafted with love and the understanding that diverse perspectives make technology better for everyone.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
