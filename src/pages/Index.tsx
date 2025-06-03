import Header from '../components/Header';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';
import { Star, Sparkles, Code, Rocket, BookOpen, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredArticles = [
    {
      title: "Getting Started with React: A Beginner's Journey",
      excerpt: "Learn the fundamentals of React and build your first interactive web application with step-by-step guidance.",
      author: "@chicanacodes",
      date: "Dec 1, 2024",
      category: "React",
      readTime: "8 min",
      slug: "getting-started-with-react-a-beginners-journey"
    },
    {
      title: "JavaScript ES6+ Features Every Developer Should Know",
      excerpt: "Explore modern JavaScript features that will make your code cleaner, more efficient, and easier to maintain.",
      author: "@chicanacodes",
      date: "Nov 28, 2024",
      category: "JavaScript",
      readTime: "12 min",
      slug: "javascript-es6-features-every-developer-should-know"
    },
    {
      title: "Building Your First Portfolio Website",
      excerpt: "Create a stunning portfolio that showcases your projects and skills to potential employers in the tech industry.",
      author: "@chicanacodes",
      date: "Nov 25, 2024",
      category: "Career",
      readTime: "15 min",
      slug: "building-your-first-portfolio-website"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "Master the art of layout design by understanding the strengths and use cases of CSS Grid and Flexbox.",
      author: "@chicanacodes",
      date: "Nov 22, 2024",
      category: "CSS",
      readTime: "10 min",
      slug: "css-grid-vs-flexbox-when-to-use-what"
    },
    {
      title: "Introduction to Python for Web Development",
      excerpt: "Discover how Python can power your web applications with frameworks like Django and Flask.",
      author: "@chicanacodes",
      date: "Nov 20, 2024",
      category: "Python",
      readTime: "14 min",
      slug: "introduction-to-python-for-web-development"
    },
    {
      title: "Breaking into Tech: A Latina's Success Story",
      excerpt: "Inspiring journey of overcoming challenges and building a successful career in the technology industry.",
      author: "@chicanacodes",
      date: "Nov 18, 2024",
      category: "Career",
      readTime: "7 min",
      slug: "breaking-into-tech-a-latinas-success-story"
    }
  ];

  const tutorials = [
    {
      title: "HTML & CSS Fundamentals",
      description: "Master the building blocks of web development",
      duration: "4 hours",
      level: "Beginner",
      color: "from-green-400 to-emerald-500",
      link: "/learn/html-css-fundamentals"
    },
    {
      title: "JavaScript Essentials",
      description: "Learn programming logic and interactivity",
      duration: "6 hours",
      level: "Beginner",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "React Development",
      description: "Build modern web applications",
      duration: "8 hours",
      level: "Intermediate",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Python Programming",
      description: "Start your backend development journey",
      duration: "10 hours",
      level: "Beginner",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <Hero />
      
      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="text-purple-400" size={24} />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Start Learning</h2>
              <BookOpen className="text-purple-400" size={24} />
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Begin your coding journey with our structured learning paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorials.map((tutorial, index) => {
              const TutorialCard = tutorial.link ? Link : 'div';
              const cardProps = tutorial.link ? { to: tutorial.link } : {};
              
              return (
                <TutorialCard 
                  key={index} 
                  {...cardProps}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group cursor-pointer block"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${tutorial.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Play className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                  <p className="text-slate-400 mb-4">{tutorial.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-yellow-400">{tutorial.duration}</span>
                    <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded">{tutorial.level}</span>
                  </div>
                </TutorialCard>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Featured Articles Section */}
      <section id="articles" className="py-20 relative">
        {/* Background Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-yellow-400" size={24} />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">Featured Articles</h2>
              <Sparkles className="text-yellow-400" size={24} />
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Discover tutorials, tips, and insights to accelerate your tech journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <BlogCard key={index} {...article} />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="text-slate-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
              <p className="text-slate-400">Tutorials Published</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">5K+</h3>
              <p className="text-slate-400">Community Members</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
              <p className="text-slate-400">Success Stories</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-slate-400">Tech Topics Covered</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
