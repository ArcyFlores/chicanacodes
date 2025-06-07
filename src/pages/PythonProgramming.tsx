
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Play, CheckCircle, Clock, Star, Users, BookOpen, Terminal, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonProgramming = () => {
  const modules = [
    {
      id: 1,
      title: "Python Basics",
      description: "Variables, data types, operators, and control structures",
      duration: "2 hours",
      lessons: 8,
      difficulty: "Beginner",
      topics: ["Variables & Data Types", "Control Flow", "Functions", "Error Handling"],
      icon: <Terminal className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 2,
      title: "Data Structures",
      description: "Lists, dictionaries, sets, and tuples mastery",
      duration: "2.5 hours",
      lessons: 10,
      difficulty: "Beginner",
      topics: ["Lists & Tuples", "Dictionaries", "Sets", "Comprehensions"],
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 3,
      title: "Object-Oriented Programming",
      description: "Classes, objects, inheritance, and polymorphism",
      duration: "3 hours",
      lessons: 12,
      difficulty: "Intermediate",
      topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Decorators"],
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      title: "File Handling & APIs",
      description: "Working with files, JSON, and external APIs",
      duration: "2 hours",
      lessons: 8,
      difficulty: "Intermediate",
      topics: ["File I/O", "JSON Processing", "API Requests", "Data Parsing"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "Web Development with Flask",
      description: "Build web applications using Flask framework",
      duration: "4 hours",
      lessons: 15,
      difficulty: "Intermediate",
      topics: ["Flask Basics", "Templates", "Forms", "Database Integration"],
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 6,
      title: "Advanced Python",
      description: "Generators, decorators, context managers, and more",
      duration: "3 hours",
      lessons: 10,
      difficulty: "Advanced",
      topics: ["Generators", "Decorators", "Context Managers", "Metaclasses"],
      icon: <Star className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const projects = [
    {
      title: "Personal Task Manager",
      description: "Build a command-line task management application",
      difficulty: "Beginner",
      duration: "1-2 hours",
      skills: ["Variables", "Lists", "Functions", "File I/O"]
    },
    {
      title: "Web Scraper",
      description: "Create a web scraper to collect data from websites",
      difficulty: "Intermediate",
      duration: "2-3 hours",
      skills: ["Requests", "BeautifulSoup", "Data Processing", "CSV Export"]
    },
    {
      title: "Flask Blog Application",
      description: "Develop a full-featured blog with user authentication",
      difficulty: "Advanced",
      duration: "4-6 hours",
      skills: ["Flask", "SQLAlchemy", "Templates", "User Auth"]
    },
    {
      title: "Data Analysis Dashboard",
      description: "Create interactive data visualizations with Python",
      difficulty: "Advanced",
      duration: "3-4 hours",
      skills: ["Pandas", "Matplotlib", "Data Analysis", "Visualization"]
    }
  ];

  const features = [
    {
      icon: <Play className="w-8 h-8 text-green-400" />,
      title: "Interactive Coding",
      description: "Practice with live code examples and instant feedback"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      title: "Comprehensive Curriculum",
      description: "From basics to web development and data science"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Community Support",
      description: "Join thousands of learners in our Python community"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
      title: "Project-Based Learning",
      description: "Build real applications while learning concepts"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-300/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full mb-6">
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-medium">Python Programming Mastery</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Python</span> Programming
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Learn Python from the ground up with our comprehensive curriculum. From basic syntax to web development, 
            data science, and beyond. Build real projects and join the most popular programming language community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Start Learning Python
            </button>
            <Link 
              to="/articles/introduction-to-python-for-web-development"
              className="border border-green-500 text-green-400 font-bold py-4 px-8 rounded-full hover:bg-green-500/10 transition-all duration-300"
            >
              Read Python Guide
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-slate-400 text-sm">Modules</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">63</div>
              <div className="text-slate-400 text-sm">Lessons</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">16h</div>
              <div className="text-slate-400 text-sm">Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-slate-400 text-sm">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Learn Python?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Complete Python Curriculum</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Structured learning path from Python basics to advanced web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{module.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(module.difficulty)} text-white`}>
                        {module.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4">{module.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{module.lessons} lessons</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, index) => (
                      <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                  Start Module
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Build Real Projects</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Apply your Python knowledge by building these hands-on projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(project.difficulty)} text-white`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white">Skills Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-slate-600 text-white font-bold py-3 rounded-lg hover:bg-slate-500 transition-all duration-300">
                  Start Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Python Journey?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have mastered Python through our comprehensive curriculum. 
              Start building amazing applications today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1">
                Begin Python Course
              </button>
              <button className="border border-green-500 text-green-400 font-bold py-4 px-8 rounded-full hover:bg-green-500/10 transition-all duration-300">
                View Sample Lessons
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PythonProgramming;
