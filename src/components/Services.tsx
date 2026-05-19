import { 
  Globe, 
  MessageCircle, 
  TrendingUp, 
  Eye, 
  Cog, 
  Sparkles,
  Database,
  Workflow,
  Cpu,
  Unplug,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      category: "FLAGSHIP SERVICES",
      items: [
        {
          icon: Database,
          title: "RAG & Knowledge Base Systems",
          description: "AI trained on your documents, SOPs, and databases for hyper-accurate search.",
          badge: "Most popular",
          badgeType: "popular",
          tags: ["Vector Stores", "Custom Knowledge", "RAG Pipelines"]
        },
        {
          icon: MessageCircle,
          title: "AI Chatbots & Conversational Agents",
          description: "24/7 intelligent support and lead capture systems that understand context.",
          badge: "Most popular",
          badgeType: "popular",
          tags: ["Natural Language", "Lead Generation", "Support"]
        },
        {
          icon: Workflow,
          title: "AI Agent Workflows",
          description: "Autonomous agents handling web research, data entry, email routing, and doc generation.",
          badge: "New",
          badgeType: "new",
          tags: ["Autonomous Agents", "Orchestration", "BPA"]
        }
      ]
    },
    {
      category: "BUILD & INTEGRATE",
      items: [
        {
          icon: Cpu,
          title: "LLM Fine-tuning & Custom Models",
          description: "Domain-specific models trained on your proprietary data for privacy and accuracy.",
          badge: "New",
          badgeType: "new",
          tags: ["Private Models", "Fine Tuning", "Proprietary Data"]
        },
        {
          icon: Unplug,
          title: "AI Integration & API Consulting",
          description: "End-to-end AI integration into your ERPs, CRMs, and legacy software suites.",
          tags: ["Legacy Integration", "API Engineering", "Consulting"]
        },
        {
          icon: Globe,
          title: "Smart AI Web Apps & Personalization",
          description: "AI-driven web applications that adapt to every visitor in real time.",
          tags: ["AI Web Apps", "Personalization", "UX Optimization"]
        }
      ]
    },
    {
      category: "SPECIALIZED SOLUTIONS",
      items: [
        {
          icon: TrendingUp,
          title: "Predictive Analytics",
          description: "Advanced trend detection and forecasting to keep you ahead of the market.",
          tags: ["Machine Learning", "Forecasting", "Business Intelligence"]
        },
        {
          icon: Cog,
          title: "Business Process Automation",
          description: "Automate invoices, approvals, and onboarding with intelligent AI workflows.",
          tags: ["Workflow Automation", "Process Optimization", "Integration"]
        },
        {
          icon: Eye,
          title: "Computer Vision Solutions",
          description: "Intelligent image recognition and automated inspection for quality control.",
          tags: ["Image Recognition", "Quality Control", "Automation"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-up">
          <div className="overline mb-6">Our Services</div>
          <h2 className="display-lg mb-8">
            <span className="block">Intelligent Solutions</span>
            <span className="block text-primary">for Every Challenge</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Transform your business with AI-powered services designed to automate, 
            optimize, and accelerate your growth in the digital landscape.
          </p>
        </div>

        {/* Categories of Services */}
        <div className="space-y-20">
          {serviceCategories.map((group, groupIndex) => (
            <div key={group.category} className="space-y-8">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {group.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((service, itemIndex) => (
                  <div
                    key={service.title}
                    className="glass rounded-2xl p-7 flex flex-col justify-between hover:scale-[1.02] border border-white/5 hover:border-primary/20 hover:shadow-glow/10 transition-all duration-300 animate-fade-up group"
                    style={{ animationDelay: `${(groupIndex * 3 + itemIndex) * 0.1}s` }}
                  >
                    <div>
                      {/* Top Bar with Icon and Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        {service.badge && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                            service.badgeType === 'popular' 
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Header */}
                      <h4 className="font-display font-semibold text-lg mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10.5px] rounded-lg bg-white/5 text-secondary border border-white/5 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div>
                      <button 
                        onClick={() => navigate('/book')}
                        className="text-xs font-semibold text-primary/90 hover:text-primary flex items-center gap-1.5 group/btn transition-colors mt-auto"
                      >
                        Learn more 
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features Strip */}
        <div className="mt-28 grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Seamless API Integrations",
              description: "Connect with your existing tools and platforms effortlessly",
              keywords: ["REST APIs", "Webhooks", "Data Sync"]
            },
            {
              title: "Trusted Authentication",
              description: "Enterprise-grade security with multi-factor authentication",
              keywords: ["OAuth 2.0", "SSO", "Security"]
            },
            {
              title: "AI-Speech Recognition",
              description: "Natural language processing for voice-driven interactions",
              keywords: ["Voice AI", "NLP", "Speech-to-Text"]
            },
            {
              title: "Real-time Analytics",
              description: "Live insights and performance monitoring dashboards",
              keywords: ["Real-time Data", "Dashboards", "Monitoring"]
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center animate-fade-up ${
                index % 2 === 0 ? 'glass rounded-2xl p-6 border border-white/5' : 'p-6'
              }`}
              style={{ animationDelay: `${1 + index * 0.1}s` }}
            >
              <h4 className="font-display font-semibold text-base mb-2.5 text-foreground">
                {feature.title}
              </h4>
              <p className="text-secondary text-xs mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex flex-wrap justify-center gap-1">
                {feature.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2 py-0.5 text-[10px] rounded bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;