
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
  slug?: string;
}

const BlogCard = ({ title, excerpt, author, date, category, readTime, image, slug }: BlogCardProps) => {
  // Generate slug from title if not provided
  const articleSlug = slug || title.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <article className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
      {image && (
        <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
              {category}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <span>{readTime} read</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-300 mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <Link 
          to={`/articles/${articleSlug}`}
          className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
        >
          Read More
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
