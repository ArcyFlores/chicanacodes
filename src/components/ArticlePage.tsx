
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

interface ArticlePageProps {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const ArticlePage = ({ title, author, date, category, readTime, content }: ArticlePageProps) => {
  const getCategoryColor = (cat: string) => {
    const colors = {
      'React': 'bg-blue-500 hover:bg-blue-600 text-white',
      'JavaScript': 'bg-yellow-500 hover:bg-yellow-600 text-slate-900',
      'CSS': 'bg-purple-500 hover:bg-purple-600 text-white',
      'Python': 'bg-green-500 hover:bg-green-600 text-white',
      'Career': 'bg-pink-500 hover:bg-pink-600 text-white',
      'Web Development': 'bg-cyan-500 hover:bg-cyan-600 text-white',
      'Tutorials': 'bg-orange-500 hover:bg-orange-600 text-white'
    };
    return colors[cat as keyof typeof colors] || 'bg-slate-500 hover:bg-slate-600 text-white';
  };

  const getCategorySlug = (cat: string) => {
    return cat.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 pt-24">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                {category}
              </span>
              <span className="text-slate-400">{readTime} read</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{date}</span>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-slate-300 leading-relaxed whitespace-pre-line">
              {content}
            </div>
          </div>

          {/* Category Tags Section */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="text-slate-400" size={20} />
              <h3 className="text-lg font-semibold text-white">Categories</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to={`/category/${getCategorySlug(category)}`}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${getCategoryColor(category)}`}
              >
                {category}
              </Link>
              {/* Additional related categories based on article content */}
              {category !== 'Web Development' && (
                <Link
                  to="/category/web-development"
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors bg-cyan-500 hover:bg-cyan-600 text-white"
                >
                  Web Development
                </Link>
              )}
              {(category === 'React' || category === 'JavaScript' || category === 'CSS') && (
                <Link
                  to="/category/tutorials"
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Tutorials
                </Link>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
