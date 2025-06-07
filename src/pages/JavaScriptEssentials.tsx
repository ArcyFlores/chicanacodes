import { useState } from 'react';
import { ArrowLeft, CheckCircle, Circle, Play, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const JavaScriptEssentials = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const startFirstLesson = () => {
    // For now, just mark lesson 1 as started and scroll to it
    const firstLessonElement = document.getElementById('lesson-1');
    if (firstLessonElement) {
      firstLessonElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lessons = [
    {
      id: 1,
      title: "JavaScript Basics & Syntax",
      duration: "60 min",
      description: "Learn variables, data types, and basic JavaScript syntax",
      topics: ["Variables", "Data types", "Operators", "Comments"]
    },
    {
      id: 2,
      title: "Functions & Scope",
      duration: "75 min",
      description: "Master functions, parameters, and variable scope",
      topics: ["Function declarations", "Arrow functions", "Parameters", "Scope"]
    },
    {
      id: 3,
      title: "Control Flow & Loops",
      duration: "65 min",
      description: "Understand conditionals and iteration",
      topics: ["If/else statements", "Switch cases", "For loops", "While loops"]
    },
    {
      id: 4,
      title: "Arrays & Objects",
      duration: "70 min",
      description: "Work with complex data structures",
      topics: ["Array methods", "Object properties", "Destructuring", "Spread operator"]
    },
    {
      id: 5,
      title: "DOM Manipulation",
      duration: "80 min",
      description: "Learn to interact with web page elements",
      topics: ["Selecting elements", "Event listeners", "Modifying content", "CSS manipulation"]
    },
    {
      id: 6,
      title: "ES6+ Modern Features",
      duration: "90 min",
      description: "Explore modern JavaScript features",
      topics: ["Template literals", "Destructuring", "Modules", "Promises"]
    },
    {
      id: 7,
      title: "Asynchronous JavaScript",
      duration: "85 min",
      description: "Handle async operations and API calls",
      topics: ["Callbacks", "Promises", "Async/await", "Fetch API"]
    },
    {
      id: 8,
      title: "Project: Interactive To-Do App",
      duration: "120 min",
      description: "Build a complete interactive application",
      topics: ["Event handling", "Local storage", "Dynamic UI", "Error handling"]
    }
  ];

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-yellow-900 to-slate-800">
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
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="text-slate-900" size={40} />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                JavaScript Essentials
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Learn programming logic and interactivity. Master the language that powers the modern web and build dynamic, interactive applications.
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="text-yellow-400" size={20} />
                <span>6 hours total</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="text-yellow-400" size={20} />
                <span>Beginner Level</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="text-yellow-400" size={20} />
                <span>8 Interactive Lessons</span>
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
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <Button 
              onClick={startFirstLesson}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-bold px-8 py-3 hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
            >
              {completedLessons.length === 0 ? 'Start Learning' : 'Continue Learning'}
            </Button>
          </div>

          {/* Course Content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Course Curriculum</h2>
            
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Card key={lesson.id} id={`lesson-${lesson.id}`} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className="text-yellow-400 hover:text-yellow-300 transition-colors"
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
                        <span className="text-yellow-400 text-sm">{lesson.duration}</span>
                        <Button 
                          size="sm" 
                          className="bg-yellow-500 hover:bg-yellow-600 text-slate-900"
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
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Programming Fundamentals</h4>
                      <p className="text-slate-400 text-sm">Variables, functions, and control flow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">DOM Manipulation</h4>
                      <p className="text-slate-400 text-sm">Make web pages interactive and dynamic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Modern JavaScript</h4>
                      <p className="text-slate-400 text-sm">ES6+ features and best practices</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Asynchronous Programming</h4>
                      <p className="text-slate-400 text-sm">Handle API calls and async operations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Problem Solving</h4>
                      <p className="text-slate-400 text-sm">Think like a programmer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Real Project</h4>
                      <p className="text-slate-400 text-sm">Build an interactive to-do application</p>
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

export default JavaScriptEssentials;
