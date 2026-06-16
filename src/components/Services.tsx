import { useState } from 'react';
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
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Services = () => {
  const navigate = useNavigate();
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});

  const toggleServiceExpand = (serviceTitle: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceTitle]: !prev[serviceTitle]
    }));
  };

  const serviceCategories = [
    {
      category: "Flagship Services",
      items: [
        {
          icon: Cog,
          title: "Intelligent Business Solutions",
          description: "Business Solutions and intelligent automation replace manual labor-intensive corporate procedures with secure cognitive automated pipelines. MetaForgeAI engineers custom-tailored automation setups to streamline lead capture, vendor onboarding, and active business systems.",
          whyBulletPoints: [
            "Complete eradication of manual double-data keying and data errors.",
            "Instant automated invoice structure analysis and validation routing.",
            "Streamlined contractor onboarding with optical character recognition (OCR).",
            "Continuous automated logging to guarantee pristine compliance audits.",
            "Over 300% operational throughput expansion for administrative staff."
          ],
          badge: "Most popular",
          badgeType: "popular",
          tags: ["Business Solutions", "Workflow Automation", "Process Optimization"]
        },
        {
          icon: Globe,
          title: "Custom AI Websites & Smart Apps",
          description: "Smart AI Web Applications customize user frontends, layouts, and recommendations dynamically based on live session behavior. MetaForgeAI constructs highly responsive, beautiful, type-safe web portals designed with intelligent, context-aware interactive layers.",
          whyBulletPoints: [
            "Average 35% conversion expansion through personalized user routing.",
            "Fluid streaming real-time content delivery built with React/Vite.",
            "Responsive screen layouts that resize and adapt without delays.",
            "Built-in advanced interactive voice and speech-to-text components.",
            "Aesthetic typography and user layouts with smooth, purpose-driven transitions."
          ],
          badge: "Most popular",
          badgeType: "popular",
          tags: ["AI Web Apps", "Custom Websites", "UX Optimization"]
        },
        {
          icon: Cpu,
          title: "Custom AI Models & LLM Fine-tuning",
          description: "LLM fine-tuning calibrates open-source developer weights (like Llama and Mistral) on domain-specific datasets for proprietary terminology and task-specific alignment. MetaForgeAI refines and aligns models for corporate needs with ultimate accuracy.",
          whyBulletPoints: [
            "Tailored alignment with proprietary enterprise lexicons and acronyms.",
            "Drastic latency reduction compared to heavy raw base model APIs.",
            "Can run fully locally or under private cloud clusters for strict isolation.",
            "Substantial savings on commercial API calls under high volume.",
            "Full ownership and security preservation of model weights."
          ],
          badge: "New",
          badgeType: "new",
          tags: ["Private Models", "Fine Tuning", "Proprietary Data"]
        }
      ]
    },
    {
      category: "Build & Integrate",
      items: [
        {
          icon: Database,
          title: "RAG & Knowledge Base Systems",
          description: "RAG (Retrieval-Augmented Generation) systems securely connect large language models to your private corporate knowledge bases, documents, and databases. MetaForgeAI designs and deploys production-ready, enterprise-grade RAG systems for companies in Pakistan and the MENA region to deliver direct, context-rich answers without data leakage.",
          whyBulletPoints: [
            "Up to 40% operating savings through automated context extraction.",
            "99.1% search and retrieval semantic accuracy with custom chunking.",
            "Enterprise-grade private document compliance and isolation.",
            "Zero-trust architecture with end-to-end encryption and robust filters.",
            "Instant connection to SharePoint, Google Drive, PDFs, and SQL tables."
          ],
          badge: "Most popular",
          badgeType: "popular",
          tags: ["Vector Stores", "Custom Knowledge", "RAG Pipelines"]
        },
        {
          icon: MessageCircle,
          title: "AI Chatbots & Conversational Agents",
          description: "AI chatbot systems automate multi-channel customer support, internal queries, and inbound lead generation around the clock. MetaForgeAI engineers conversational AI interfaces that understand intent, maintain brand voice, and integrate into legacy corporate platforms.",
          whyBulletPoints: [
            "Over 65% search support deflection inside the first week of launch.",
            "Live 24/7 contextual multi-turn customer response handling.",
            "Omnichannel routing across WhatsApp, Webchat, Slack, and Discord.",
            "Native multi-region language support including English, Arabic, and Urdu.",
            "Automatic handoff to human agents with summarized contextual summaries."
          ],
          badge: "Most popular",
          badgeType: "popular",
          tags: ["Natural Language", "Lead Generation", "Support"]
        },
        {
          icon: Workflow,
          title: "AI Agent Workflows",
          description: "AI agent workflows coordinate collections of autonomous software agents to execute complex, multi-step operations such as secondary market research, invoice validation, and document creation. MetaForgeAI constructs resilient agent chains with custom decision logic for robust business scaling.",
          whyBulletPoints: [
            "Reclaims over 20+ expert analyst hours per week from boilerplate tasks.",
            "Automated real-time regulatory compliance and file checks.",
            "Adaptive task routing with automatic error correcting mechanisms.",
            "Custom human-in-the-loop authorization gates for high-stakes decisions.",
            "Native processing of highly unstructured visual tables or emails."
          ],
          badge: "New",
          badgeType: "new",
          tags: ["Autonomous Agents", "Orchestration", "BPA"]
        }
      ]
    },
    {
      category: "Specialized Solutions",
      items: [
        {
          icon: Unplug,
          title: "AI Integration & API Consulting",
          description: "AI Integration and API Consulting bridges the gap between state-of-the-art AI systems and historical IT frameworks. MetaForgeAI links cognitive models directly to Salesforce, HubSpot, SAP, Oracle, and active business portals.",
          whyBulletPoints: [
            "Seamless API adapters covering 200+ major business platforms.",
            "Secure server-side proxy middle layers to keep auth keys private.",
            "Zero operational downtime during incremental cognitive injections.",
            "High-availability pipelines optimized for millisecond data synchronies.",
            "Full developer training, blueprint design, and ongoing performance audits."
          ],
          tags: ["Legacy Integration", "API Engineering", "Consulting"]
        },
        {
          icon: TrendingUp,
          title: "Predictive Analytics",
          description: "Predictive Analytics maps historical corporate data feeds onto machine learning models to identify anomalies, forecast regressions, and predict market shifts. MetaForgeAI builds analytics pipelines that feed directly into business dashboards.",
          whyBulletPoints: [
            "Accurate sales, stock, and demand projections powered by ML models.",
            "Automatic structural anomaly alerts on irregular operational swings.",
            "Executive-ready visuals using D3 and Recharts frameworks natively.",
            "Direct query adapters connecting to live analytical data lakes.",
            "Actionable insights that empower proactive strategic corporate strategies."
          ],
          tags: ["Machine Learning", "Forecasting", "Business Intelligence"]
        },
        {
          icon: Eye,
          title: "Computer Vision Solutions",
          description: "Computer Vision trains neural image-processing layers to spot visual defects, automate counts, and analyze security feeds. MetaForgeAI implements high-precision vision systems optimized for local factory and corporate cameras.",
          whyBulletPoints: [
            "High-frequency visual anomaly identification on high-speed production lines.",
            "Accurate automatic package counting and object sorting architectures.",
            "Privacy-focused on-premise visual processing to secure local streams.",
            "Instant notification triggers sent directly to security or operations desks.",
            "Effortless retrofitting to older analog or digital corporate camera units."
          ],
          tags: ["Image Recognition", "Quality Control", "Automation"]
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-24 relative bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overline mb-6"
          >
            Our Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-lg mb-8"
          >
            <span className="block">Intelligent Solutions</span>
            <span className="block text-primary">for Every Challenge</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Transform your business with AI-powered services designed to automate, 
            optimize, and accelerate your growth in the digital landscape.
          </motion.p>
        </div>

        {/* Categories of Services */}
        <div className="space-y-20">
          {serviceCategories.map((group, groupIndex) => (
            <div key={group.category} className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="font-display text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-color),0.8)]"></span>
                {group.category}
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {group.items.map((service, itemIndex) => (
                  <motion.article
                    key={service.title}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8, 
                      borderColor: "rgba(var(--primary-color),0.25)",
                      boxShadow: "0 10px 30px -10px rgba(var(--primary-color),0.1)"
                    }}
                    className="glass rounded-2xl p-7 flex flex-col justify-between border border-white/5 transition-all duration-300 group"
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
                      
                      {/* Description (LLM Citation Optimized) */}
                      <p className="text-secondary text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* WHY METAFORGEAI? Bullet Points Section */}
                      <div className="mb-6 pt-4 border-t border-white/5">
                        <button
                          onClick={() => toggleServiceExpand(service.title)}
                          className="flex items-center justify-between w-full text-[11px] font-mono uppercase tracking-wider text-primary font-bold group/why focus:outline-none cursor-pointer"
                          aria-expanded={expandedServices[service.title] || false}
                        >
                          <span className="hover:text-primary transition-colors flex items-center gap-1">
                            Why MetaForgeAI?
                          </span>
                          <ChevronDown className={`w-3.5 h-3.5 text-primary/70 group-hover/why:text-primary transition-transform duration-300 ${
                            expandedServices[service.title] ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        <motion.div 
                          initial={false}
                          animate={{ 
                            height: expandedServices[service.title] ? "auto" : 0,
                            opacity: expandedServices[service.title] ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 mt-3 pt-1">
                            {service.whyBulletPoints.map((bullet, idx) => (
                              <li key={idx} className="text-xs text-secondary flex items-start gap-2 leading-relaxed">
                                <span className="text-primary font-bold mt-0.5 select-none">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10.5px] rounded-lg bg-white/5 text-secondary border border-white/5 font-medium hover:bg-white/10 transition-colors"
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
                        aria-label={`Get details and book consultation for ${service.title}`}
                      >
                        Learn more 
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dedicated Services FAQ for AEO (no-JS details approach) */}
        <div className="mt-32 pt-20 border-t border-white/5 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(124,58,237,0.5)]"></span>
              AI Services Execution FAQs
            </h3>
            <p className="text-sm text-secondary max-w-xl mx-auto">
              Understand our precise mechanical methodology and architectural standards for deploying production-grade enterprise software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <details className="group border border-white/10 rounded-2xl p-6 bg-slate-950/40 backdrop-blur-md hover:border-primary/40 hover:bg-slate-950/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.05)] transition-all duration-300 cursor-pointer">
              <summary className="font-semibold text-foreground list-none flex justify-between items-center focus:outline-none select-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-base tracking-tight group-open:text-primary transition-colors duration-300">How do you deploy RAG Systems?</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 group-open:bg-primary/20 group-open:border-primary/40 group-open:rotate-45 text-secondary group-open:text-primary transition-all duration-300 text-lg font-light">+</span>
              </summary>
              <div className="text-secondary text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                <p className="mb-2">
                  We engineer high-efficiency data pre-processing and chunking pipelines, connect secure vector indexes (such as Qdrant, Pinecone, or PGVector), and orchestrate real-time context injections to generate 100% accurate, hallucination-free AI answers.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">Qdrant / Pinecone</span>
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">Zero-Hallucination</span>
                </div>
              </div>
            </details>

            <details className="group border border-white/10 rounded-2xl p-6 bg-slate-950/40 backdrop-blur-md hover:border-primary/40 hover:bg-slate-950/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.05)] transition-all duration-300 cursor-pointer">
              <summary className="font-semibold text-foreground list-none flex justify-between items-center focus:outline-none select-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-base tracking-tight group-open:text-primary transition-colors duration-300">Are AI agent workflows secure?</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 group-open:bg-primary/20 group-open:border-primary/40 group-open:rotate-45 text-secondary group-open:text-primary transition-all duration-300 text-lg font-light">+</span>
              </summary>
              <div className="text-secondary text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                <p className="mb-2">
                  Yes, absolutely. Our AI Agents work within fully containerized, secure environments under strict sandbox credentials. We deploy rigid Human-in-the-Loop approval nodes for financial transactions, public deployments, or database modifications.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">Human-in-the-loop</span>
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">Sandboxed Executions</span>
                </div>
              </div>
            </details>

            <details className="group border border-white/10 rounded-2xl p-6 bg-slate-950/40 backdrop-blur-md hover:border-primary/40 hover:bg-slate-950/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.05)] transition-all duration-300 cursor-pointer">
              <summary className="font-semibold text-foreground list-none flex justify-between items-center focus:outline-none select-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-base tracking-tight group-open:text-primary transition-colors duration-300">What are the benefits of LLM Fine-tuning?</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 group-open:bg-primary/20 group-open:border-primary/40 group-open:rotate-45 text-secondary group-open:text-primary transition-all duration-300 text-lg font-light">+</span>
              </summary>
              <div className="text-secondary text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                <p className="mb-2">
                  By fine-tuning cost-effective, open-weights models (like Llama-3 or Mistral) on your custom datasets, we deliver specialized performance matching larger global APIs, while shrinking api token costs by up to 80% and keeping weights local.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">No API Costs</span>
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">100% Weight Custody</span>
                </div>
              </div>
            </details>

            <details className="group border border-white/10 rounded-2xl p-6 bg-slate-950/40 backdrop-blur-md hover:border-primary/40 hover:bg-slate-950/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.05)] transition-all duration-300 cursor-pointer">
              <summary className="font-semibold text-foreground list-none flex justify-between items-center focus:outline-none select-none [&::-webkit-details-marker]:hidden">
                <span className="font-display text-base tracking-tight group-open:text-primary transition-colors duration-300">How do you sync with legacy ERPs?</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 border border-white/10 group-open:bg-primary/20 group-open:border-primary/40 group-open:rotate-45 text-secondary group-open:text-primary transition-all duration-300 text-lg font-light">+</span>
              </summary>
              <div className="text-secondary text-sm mt-4 leading-relaxed border-t border-white/5 pt-4">
                <p className="mb-2">
                  Our engineers construct secure custom REST adapters, GraphQL connectors, and OAuth standard gates, reading and mapping structured tables directly to Salesforce, SAP, Oracle, HubSpot, or private relational SQL environments.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">SAP / Oracle / Salesforce</span>
                  <span className="px-2 py-0.5 text-[9px] rounded bg-primary/10 text-primary border border-primary/25 font-mono">Compliant Data Sync</span>
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Features Strip */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28 grid md:grid-cols-4 gap-8"
        >
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
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`text-center ${
                index % 2 === 0 ? 'glass rounded-2xl p-6 border border-white/5' : 'p-6'
              }`}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;