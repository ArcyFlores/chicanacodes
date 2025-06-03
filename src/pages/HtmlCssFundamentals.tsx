
import { useState } from 'react';
import { ArrowLeft, CheckCircle, Circle, Play, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HtmlCssFundamentals = () => {
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
      title: "Introduction to HTML",
      duration: "45 min",
      description: "Learn the structure and basics of HTML elements",
      topics: ["HTML document structure", "Basic tags", "Attributes"]
    },
    {
      id: 2,
      title: "HTML Elements & Semantics",
      duration: "60 min",
      description: "Master semantic HTML and accessibility best practices",
      topics: ["Semantic elements", "Forms", "Tables", "Lists"]
    },
    {
      id: 3,
      title: "CSS Fundamentals",
      duration: "50 min",
      description: "Introduction to styling with CSS",
      topics: ["Selectors", "Properties", "Values", "Cascade"]
    },
    {
      id: 4,
      title: "CSS Box Model",
      duration: "40 min",
      description: "Understanding layout with the box model",
      topics: ["Margin", "Padding", "Border", "Content"]
    },
    {
      id: 5,
      title: "CSS Layout with Flexbox",
      duration: "55 min",
      description: "Create flexible layouts with Flexbox",
      topics: ["Flex container", "Flex items", "Alignment", "Responsive design"]
    },
    {
      id: 6,
      title: "CSS Grid Layout",
      duration: "65 min",
      description: "Advanced layouts with CSS Grid",
      topics: ["Grid container", "Grid items", "Grid areas", "Responsive grids"]
    },
    {
      id: 7,
      title: "Responsive Web Design",
      duration: "50 min",
      description: "Make websites work on all devices",
      topics: ["Media queries", "Mobile-first", "Breakpoints", "Viewport"]
    },
    {
      id: 8,
      title: "Project: Build Your First Website",
      duration: "90 min",
      description: "Apply everything you've learned in a real project",
      topics: ["HTML structure", "CSS styling", "Responsive layout", "Deployment"]
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
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="text-white" size={40} />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                HTML & CSS Fundamentals
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Master the building blocks of web development. Learn to create beautiful, responsive websites from scratch using HTML and CSS.
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="text-green-400" size={20} />
                <span>4 hours total</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="text-green-400" size={20} />
                <span>Beginner Level</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Star className="text-green-400" size={20} />
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
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <Button className="bg-gradient-to-r from-green-400 to-emerald-500 text-slate-900 font-bold px-8 py-3 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
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
                          className="text-green-400 hover:text-green-300 transition-colors"
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
                        <span className="text-green-400 text-sm">{lesson.duration}</span>
                        <Button 
                          size="sm" 
                          className="bg-green-500 hover:bg-green-600 text-white"
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
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">HTML Structure</h4>
                      <p className="text-slate-400 text-sm">Create semantic, accessible web pages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">CSS Styling</h4>
                      <p className="text-slate-400 text-sm">Design beautiful, modern interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Responsive Design</h4>
                      <p className="text-slate-400 text-sm">Build sites that work on all devices</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Layout Techniques</h4>
                      <p className="text-slate-400 text-sm">Master Flexbox and CSS Grid</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Best Practices</h4>
                      <p className="text-slate-400 text-sm">Write clean, maintainable code</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 mt-1" size={20} />
                    <div>
                      <h4 className="text-white font-semibold">Real Project</h4>
                      <p className="text-slate-400 text-sm">Build a complete website from scratch</p>
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

export default HtmlCssFundamentals;
