import { ExternalLink, Zap, Brain, Sparkles, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Customer Churn Prediction Model",
      category: "Predictive Analytics",
      description: "Built an end-to-end machine learning pipeline to predict customer churn using structured data. Applied feature engineering and classification models to identify at-risk users, enabling proactive retention strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-Learn", "XGBoost", "Pandas"],
      results: ["92% Accuracy", "30% Churn Reduction", "Real-time Alerts"],
      link: "#"
    },
    {
      title: "Gym Management System",
      category: "Business Automation",
      description: "Developed a full-stack web platform for managing memberships, attendance, and payments with role-based dashboards. Streamlined gym operations through automation and real-time analytics.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      results: ["50% Less Admin Work", "+20% Member Retention", "Automated Billing"],
      link: "#"
    },
    {
      title: "Reclaim Your Heart",
      category: "Spiritual Wellness",
      description: "Designed a spiritually focused application aimed at self-reflection and emotional well-being. Combines Islamic teachings with guided content to help users reconnect with purpose and inner peace.",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=600&q=80",
      technologies: ["React Native", "Firebase", "Audio Streaming", "Daily Reminders"],
      results: ["10k+ Active Users", "4.9/5 App Rating", "Personalized Content"],
      link: "#"
    },
    {
      title: "MediNexus SaaS",
      category: "Healthcare Tech",
      description: "Created a healthcare SaaS platform for managing patient records, appointments, and communication workflows. Focused on scalability, security, and seamless data handling for clinics and medical professionals.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "AWS", "GraphQL", "HIPAA Compliant"],
      results: ["500+ Clinics", "1M+ Records Managed", "Zero Data Breaches"],
      link: "#"
    },
    {
      title: "HireMind",
      category: "HR & Recruitment AI",
      description: "Built an AI-powered recruitment assistant that screens candidates, analyzes resumes, and generates interview insights. Enhances hiring efficiency through intelligent automation and data-driven decision-making.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
      technologies: ["OpenAI API", "Python", "React", "NLP"],
      results: ["70% Faster Hiring", "95% Candidate Match", "Unbiased Screening"],
      link: "#"
    },
    {
      title: "EchoVerse",
      category: "EdTech & AI",
      description: "Developed an AI-based language learning assistant for children (ages 6–12) with interactive and gamified modules. Integrates speech recognition and NLP to create an engaging and adaptive learning experience.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
      technologies: ["Speech Recognition", "NLP", "React Native", "Gamification"],
      results: ["50k+ Daily Users", "99% Engagement", "Adaptive Learning"],
      link: "#"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "E-commerce Intelligence": return TrendingUp;
      case "Computer Vision": return Brain;
      case "Conversational AI": return Sparkles;
      case "Predictive Intelligence": return Zap;
      case "Process Automation": return Brain;
      case "Generative AI": return Sparkles;
      default: return Zap;
    }
  };

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="overline mb-6">Our Portfolio</div>
          <h2 className="display-lg mb-8">
            <span className="block">Transformative AI Solutions</span>
            <span className="block text-primary">Delivering Real Impact</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge AI implementations that have revolutionized 
            businesses across industries with measurable results and breakthrough innovations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden card-hover animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80";
                    }}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.link}
                      className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs font-medium rounded-full glass text-primary border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-xl mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full glass text-tertiary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            { number: "15+", label: "AI Projects Delivered", sublabel: "Across 6 Industries" },
            { number: "99.7%", label: "Client Satisfaction", sublabel: "Proven Track Record" },
            { number: "PKR 500K+", label: "Revenue Generated", sublabel: "For Our Clients" },
            { number: "24/7", label: "AI Systems Running", sublabel: "Zero Downtime" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`animate-fade-up ${index % 2 === 0 ? 'glass rounded-2xl p-6' : 'p-6'}`}
              style={{ animationDelay: `${1.5 + index * 0.1}s` }}
            >
              <div className="text-4xl font-display font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-secondary">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;