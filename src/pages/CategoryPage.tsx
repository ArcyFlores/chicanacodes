
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Convert category slug back to display name
  const getCategoryDisplayName = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      'react': 'React',
      'javascript': 'JavaScript',
      'css': 'CSS',
      'python': 'Python',
      'career': 'Career',
      'web-development': 'Web Development',
      'tutorials': 'Tutorials'
    };
    return categoryMap[slug] || slug;
  };

  const displayCategory = getCategoryDisplayName(category || '');

  // All articles data
  const allArticles = [
    {
      title: "Getting Started with React: A Beginner's Journey",
      excerpt: "Learn the fundamentals of React and build your first interactive web application with step-by-step guidance.",
      author: "@chicanacodes",
      date: "Jun 2, 2025",
      category: "React",
      readTime: "8 min",
      slug: "getting-started-with-react-a-beginners-journey"
    },
    {
      title: "JavaScript ES6+ Features Every Developer Should Know",
      excerpt: "Explore modern JavaScript features that will make your code cleaner, more efficient, and easier to maintain.",
      author: "@chicanacodes",
      date: "Jun 2, 2025",
      category: "JavaScript",
      readTime: "12 min",
      slug: "javascript-es6-features-every-developer-should-know"
    },
    {
      title: "Building Your First Portfolio Website",
      excerpt: "Create a stunning portfolio that showcases your projects and skills to potential employers in the tech industry.",
      author: "@chicanacodes",
      date: "Jun 2, 2025",
      category: "Career",
      readTime: "15 min",
      slug: "building-your-first-portfolio-website"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "Master the art of layout design by understanding the strengths and use cases of CSS Grid and Flexbox.",
      author: "@chicanacodes",
      date: "Jun 2, 2025",
      category: "CSS",
      readTime: "10 min",
      slug: "css-grid-vs-flexbox-when-to-use-what"
    },
    {
      title: "Introduction to Python for Web Development",
      excerpt: "Discover how Python can power your web applications with frameworks like Django and Flask.",
      author: "@chicanacodes",
      date: "Jun 2, 2025",
      category: "Python",
      readTime: "14 min",
      slug: "introduction-to-python-for-web-development"
    },
    {
      title: "Breaking into Tech: A Latina's Success Story",
      excerpt: "Inspiring journey of overcoming challenges and building a successful career in the technology industry.",
      author: "@chicanacodes",
      date: "Jun 2, 2025",
      category: "Career",
      readTime: "7 min",
      slug: "breaking-into-tech-a-latinas-success-story"
    }
  ];

  // Filter articles by category
  const filteredArticles = allArticles.filter(article => {
    if (displayCategory === 'Web Development') {
      // Include articles that are related to web development
      return ['React', 'JavaScript', 'CSS'].includes(article.category) || article.category === 'Web Development';
    }
    if (displayCategory === 'Tutorials') {
      // Include articles that are tutorial-focused
      return ['React', 'JavaScript', 'CSS', 'Python'].includes(article.category);
    }
    return article.category === displayCategory;
  });

  const getCategoryColor = (cat: string) => {
    const colors = {
      'React': 'from-blue-500 to-blue-600',
      'JavaScript': 'from-yellow-500 to-yellow-600',
      'CSS': 'from-purple-500 to-purple-600',
      'Python': 'from-green-500 to-green-600',
      'Career': 'from-pink-500 to-pink-600',
      'Web Development': 'from-cyan-500 to-cyan-600',
      'Tutorials': 'from-orange-500 to-orange-600'
    };
    return colors[cat as keyof typeof colors] || 'from-slate-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Tag className="text-yellow-400" size={32} />
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                {displayCategory} Articles
              </h1>
            </div>
            
            <div className={`inline-block bg-gradient-to-r ${getCategoryColor(displayCategory)} text-white px-6 py-3 rounded-full text-lg font-semibold mb-6`}>
              {displayCategory}
            </div>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found in {displayCategory}
            </p>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <BlogCard key={index} {...article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-white mb-4">No Articles Found</h2>
              <p className="text-slate-400 mb-8">
                We don't have any articles in the {displayCategory} category yet.
              </p>
              <Link 
                to="/"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Browse All Articles
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
