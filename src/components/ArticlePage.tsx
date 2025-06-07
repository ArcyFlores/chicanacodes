
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-html';

interface ArticlePageProps {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

const ArticlePage = ({ title, author, date, category, readTime, content }: ArticlePageProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

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

  const parseContent = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let currentCodeBlock = '';
    let codeLanguage = '';
    let inCodeBlock = false;
    let listItems: string[] = [];
    let inList = false;

    const processListItems = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-slate-300">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          // End code block
          elements.push(
            <div key={`code-${elements.length}`} className="mb-6">
              <pre className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
                <code className={`language-${codeLanguage}`}>
                  {currentCodeBlock.trim()}
                </code>
              </pre>
            </div>
          );
          currentCodeBlock = '';
          codeLanguage = '';
          inCodeBlock = false;
        } else {
          // Start code block
          processListItems();
          codeLanguage = line.replace('```', '').trim() || 'javascript';
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        currentCodeBlock += line + '\n';
        return;
      }

      // Handle headers
      if (line.startsWith('## ')) {
        processListItems();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-700 pb-2">
            {line.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (line.startsWith('### ')) {
        processListItems();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-xl font-semibold text-white mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
        return;
      }

      // Handle list items
      if (line.match(/^\d+\.\s/) || line.startsWith('- ')) {
        const listItem = line.replace(/^\d+\.\s/, '').replace(/^- /, '');
        listItems.push(listItem);
        inList = true;
        return;
      }

      // Handle inline code
      const processInlineElements = (text: string) => {
        const parts = text.split(/(`[^`]+`)/);
        return parts.map((part, idx) => {
          if (part.startsWith('`') && part.endsWith('`')) {
            return (
              <code key={idx} className="bg-slate-700 text-yellow-400 px-2 py-1 rounded text-sm">
                {part.slice(1, -1)}
              </code>
            );
          }
          // Handle bold text
          if (part.includes('**')) {
            const boldParts = part.split(/(\*\*[^*]+\*\*)/);
            return boldParts.map((boldPart, boldIdx) => {
              if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
                return <strong key={`${idx}-${boldIdx}`} className="font-semibold text-white">{boldPart.slice(2, -2)}</strong>;
              }
              return boldPart;
            });
          }
          return part;
        });
      };

      // Handle regular paragraphs
      if (line.trim() && !inList) {
        processListItems();
        elements.push(
          <p key={`p-${elements.length}`} className="text-slate-300 leading-relaxed mb-4">
            {processInlineElements(line)}
          </p>
        );
      }

      // Handle empty lines
      if (!line.trim() && !inList) {
        processListItems();
      }
    });

    // Process any remaining list items
    processListItems();

    return elements;
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
            <div className="text-slate-300 leading-relaxed">
              {parseContent(content)}
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
