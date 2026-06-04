import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
        <p className="text-secondary mb-8">The article you are looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate('/')} className="btn-primary">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-light">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`https://metaforgeai.vercel.app/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
      />
      
      {/* Blog Article Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.image,
          "datePublished": post.date,
          "author": [{
            "@type": "Person",
            "name": post.author
          }],
          "description": post.excerpt
        })}
      </script>

      <Navigation />
      
      <main className="pt-32 pb-24 relative">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-glow rounded-full opacity-20 blur-[120px] pointer-events-none"></div>

        <article className="container-custom max-w-4xl relative z-10">
          {/* Back Button */}
          <Link 
            to="/#blog" 
            className="inline-flex items-center space-x-2 text-secondary hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Articles</span>
          </Link>

          {/* Header */}
          <header className="mb-12 text-center animate-fade-up">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {post.category}
              </span>
            </div>
            
            <h1 className="display-lg mb-8 text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-secondary text-sm">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video w-full">
              <img 
                src={post.image} 
                alt={post.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-xl text-secondary leading-relaxed mb-12 font-medium border-l-4 border-primary pl-6">
              {post.excerpt}
            </div>
            
            <div className="markdown-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm rounded-full glass text-tertiary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
