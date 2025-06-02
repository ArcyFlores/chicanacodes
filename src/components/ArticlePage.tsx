
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticlePageProps {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const ArticlePage = ({ title, author, date, category, readTime, content }: ArticlePageProps) => {
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
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
