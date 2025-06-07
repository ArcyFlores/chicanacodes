
import { useState } from 'react';
import { ArrowLeft, CheckCircle, Circle, Play, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ReactDevelopment = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const lessons = [
    {
      id: 1,
      title: "Introduction to React",
      duration: "60 min",
      description: "Learn what React is and why it's used for building user interfaces",
      topics: ["What is React", "Virtual DOM", "JSX basics", "Setting up environment"]
    },
    {
      id: 2,
      title: "Components & JSX",
      duration: "75 min",
      description: "Master the building blocks of React applications",
      topics: ["Functional components", "JSX syntax", "Props", "Component composition"]
    },
    {
      id: 3,
      title: "State Management with useState",
      duration: "80 min",
      description: "Learn to manage component state and handle user interactions",
      topics: ["useState hook", "State updates", "Event handling", "Controlled components"]
    },
    {
      id: 4,
      title: "Props & Component Communication",
      duration: "70 min",
      description: "Pass data between components effectively",
      topics: ["Props drilling", "Callback props", "Children prop", "Prop validation"]
    },
    {
      id: 5,
      title: "Lists & Conditional Rendering",
      duration: "65 min",
      description: "Render dynamic content and handle different UI states",
      topics: ["Map function", "Keys in React", "Conditional rendering", "Ternary operators"]
    },
    {
      id: 6,
      title: "useEffect & Side Effects",
      duration: "90 min",
      description: "Handle side effects and component lifecycle",
      topics: ["useEffect hook", "Dependency arrays", "Cleanup functions", "API calls"]
    },
    {
      id: 7,
      title: "Forms & User Input",
      duration: "85 min",
      description: "Build interactive forms and handle user input",
      topics: ["Controlled inputs", "Form validation", "Form submission", "useRef hook"]
    },
    {
      id: 8,
      title: "React Router & Navigation",
      duration: "75 min",
      description: "Add navigation and multiple pages to your React app",
      topics: ["React Router setup", "Routes and paths", "Navigation", "URL parameters"]
    },
    {
      id: 9,
      title: "State Management with Context",
      duration: "95 min",
      description: "Manage global state without prop drilling",
      topics: ["Context API", "useContext hook", "Providers", "Global state patterns"]
    },
    {
      id: 10,
      title: "Project: Build a Task Manager App",
      duration: "150 min",
      description: "Apply everything you've learned in a comprehensive project",
      topics: ["Component architecture", "State management", "API integration", "Styling with CSS"]
    }
  ];

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="pt-20">
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Learning Paths
          </Link>

          {/* Course Header */}
          <div className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="text-white" size={40} />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                React Development
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Build modern web applications with React. Learn to create interactive, dynamic user interfaces using components, state management, and modern React patterns.
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="text-blue-400" size={20} />
                <span>8 hours total</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="text-blue-400" size={20} />
                <span>Intermediate Level</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="text-blue-400" size={20} />
                <span>10 Interactive Lessons</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Progress</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-bold px-8 py-3 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300">
              {completedLessons.length === 0 ? 'Start Learning' : 'Continue Learning'}
            </Button>
          </div>

          {/* Course Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Course Curriculum</h2>
            
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Card key={lesson.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle size={24} />
                          ) : (
                            <Circle size={24} />
                          )}
                        </button>
                        <div>
                          <CardTitle className="text-white text-left">
                            Lesson {lesson.id}: {lesson.title}
                          </CardTitle>
                          <CardDescription className="text-slate-400 text-left">
                            {lesson.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400 text-sm">{lesson.duration}</span>
                        <Button 
                          size="sm" 
                          className="bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          <Play size={16} className="mr-1" />
                          Start
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {lesson.topics.map((topic, index) => (
                        <span 
                          key={index}
                          className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* What You'll Learn Section */}
            <div className="mt-16 bg-slate-800/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Component Architecture</h4>
                      <p className="text-slate-400 text-sm">Build reusable, maintainable components</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">State Management</h4>
                      <p className="text-slate-400 text-sm">Handle application state with hooks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Event Handling</h4>
                      <p className="text-slate-400 text-sm">Create interactive user experiences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">React Router</h4>
                      <p className="text-slate-400 text-sm">Build single-page applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">API Integration</h4>
                      <p className="text-slate-400 text-sm">Fetch and display external data</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Hooks Mastery</h4>
                      <p className="text-slate-400 text-sm">useState, useEffect, useContext, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Form Handling</h4>
                      <p className="text-slate-400 text-sm">Build robust forms with validation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Performance Optimization</h4>
                      <p className="text-slate-400 text-sm">Optimize React app performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Best Practices</h4>
                      <p className="text-slate-400 text-sm">Write clean, maintainable React code</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-blue-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Complete Project</h4>
                      <p className="text-slate-400 text-sm">Build a full-featured task manager app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReactDevelopment;
