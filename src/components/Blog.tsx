import { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const navigate = useNavigate();
  // Dynamically generate categories and counts
  const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
  const [activeCategory, setActiveCategory] = useState(uniqueCategories[0]);

  const categories = uniqueCategories.map(cat => ({
    name: cat,
    count: blogPosts.filter(post => post.category === cat).length,
    active: activeCategory === cat
  }));

  const filteredPosts = blogPosts.filter(post => post.category === activeCategory);

  // Find the first featured post in the filtered list, or just the first post if none are featured
  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter(post => post !== featuredPost);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Industry Insights": return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "Future Trends": return "text-purple-400 bg-purple-400/10 border-purple-400/20";
      case "Strategic Advice": return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      case "Technology Deep-dive": return "text-cyan-400 bg-cyan-400/10 border-cyan-400/20";
      case "Case Studies": return "text-green-400 bg-green-400/10 border-green-400/20";
      default: return "text-primary bg-primary/10 border-primary/20";
    }
  };

  return (
    <section id="blog" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="overline mb-6">AI Insights & Innovation</div>
          <h2 className="display-lg mb-8">
            <span className="block">Latest from</span>
            <span className="block text-primary">MetaForgeAI Labs</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Stay ahead of the AI revolution with cutting-edge insights, breakthrough research, 
            and real-world case studies from our team of AI experts and industry leaders.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                category.active 
                  ? 'glass-strong text-primary border border-primary/30' 
                  : 'glass text-secondary hover:text-foreground hover:bg-white/5'
              }`}
            >
              {category.name} <span className="text-xs opacity-60">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div 
              onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              className="glass rounded-3xl overflow-hidden card-hover group cursor-pointer"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-48 sm:h-64 lg:h-auto min-h-[220px] lg:min-h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-aurora text-white">
                      FEATURED
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-aurora flex items-center justify-center">
                      {(() => {
                        const IconComponent = featuredPost.icon;
                        return <IconComponent className="w-4 h-4 text-white" />;
                      })()}
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl lg:text-3xl mb-4 text-foreground leading-tight group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-secondary mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-4 text-xs sm:text-sm text-secondary">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center justify-center sm:justify-start space-x-2 text-primary hover:text-primary-light transition-colors group w-full sm:w-auto mt-2 sm:mt-0 py-2 sm:py-0 border border-white/5 sm:border-transparent rounded-xl sm:rounded-none">
                      <span className="font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post, index) => {
            const IconComponent = post.icon;
            
            return (
              <article
                key={post.title}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="glass rounded-2xl overflow-hidden card-hover animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Post Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-aurora flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-secondary">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-3 text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full glass text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div>
                      <div className="font-medium text-foreground text-sm">{post.author}</div>
                      <div className="text-xs text-secondary">{post.role}</div>
                    </div>
                    <div className="text-xs text-secondary flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {gridPosts.length === 0 && !featuredPost && (
          <div className="text-center py-12 text-secondary">
            No posts found in this category.
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;