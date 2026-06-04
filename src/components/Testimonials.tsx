import { motion } from 'motion/react';
import { Star, MessageSquareCode, BadgeCheck, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "COO at PathLogistics",
    metric: "40% Overhead Cut",
    metricLabel: "Operational Savings",
    avatarColor: "from-blue-500 to-indigo-600",
    initials: "SJ",
    stars: 5,
    quote: "MetaForgeAI automated our multi-source container dispatch pipeline within 6 weeks, cutting overhead by 40%. Their technical system design and execution are outstanding.",
    verified: true
  },
  {
    name: "Marcus Sterling",
    role: "VP Product at FinHedge",
    metric: "99.1% Accuracy",
    metricLabel: "Semantic Document Extraction",
    avatarColor: "from-purple-500 to-pink-600",
    initials: "MS",
    stars: 5,
    quote: "The custom document understanding agent developed by MetaForgeAI accurately categorizes and processes 99.1% of our unstructured data streams automatically. Unparalleled accuracy.",
    verified: true
  },
  {
    name: "Dr. Aris Thorne",
    role: "CTO at BioScribe Solutions",
    metric: "14x Search Speed",
    metricLabel: "Private RAG Performance",
    avatarColor: "from-emerald-500 to-teal-600",
    initials: "AT",
    stars: 5,
    quote: "We needed a private LLM knowledge base that understood custom medical taxonomies. The custom RAG system MetaForgeAI delivered query results in milliseconds, accelerating R&D speed 14-fold.",
    verified: true
  },
  {
    name: "Elena Rostova",
    role: "Head of Success at CloudFlow",
    metric: "65% Support Deflection",
    metricLabel: "Conversational Agent Success",
    avatarColor: "from-amber-500 to-orange-600",
    initials: "ER",
    stars: 5,
    quote: "Their AI Chatbots integrated straight into our legacy CRM. We deflected over 65% of recursive support tickets on week one while retaining high customer satisfaction score metrics.",
    verified: true
  },
  {
    name: "Vikram Patel",
    role: "Director of Ops at Apex Retail",
    metric: "35% More Leads",
    metricLabel: "Conversational Personalization",
    avatarColor: "from-violet-500 to-rose-600",
    initials: "VP",
    stars: 5,
    quote: "The personalization layouts MetaForgeAI built for our storefront web application automatically recommend items based on immediate visitor browse contexts, boosting conversions by 35%.",
    verified: true
  },
  {
    name: "Beatrice Vance",
    role: "Chief Data Officer at CapitalEdge",
    metric: "-20hrs/Week Manual Work",
    metricLabel: "Automated Data Ingestion",
    avatarColor: "from-cyan-500 to-blue-600",
    initials: "BV",
    stars: 5,
    quote: "Their custom multi-step AI Agent Workflows manage our SEC filing ingestion and auto-draft review reports securely. Our analyst team saves 20 hours a week on boilerplate data routing.",
    verified: true
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="testimonials" className="py-24 relative bg-background overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none opacity-20 select-none">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="overline mb-6"
          >
            Client Success & Impacts
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-lg mb-8"
          >
            <span className="block">Realized Success</span>
            <span className="block text-primary">Engineered with Precision</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Read how global mid-market companies and fast-growing startups leverage 
            our intelligent agent workflows and custom private RAG systems.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(var(--primary-color), 0.25)",
                boxShadow: "0 15px 40px -15px rgba(var(--primary-color), 0.15)"
              }}
              className="glass rounded-2xl p-7 flex flex-col justify-between border border-white/5 transition-all duration-300 relative group"
            >
              {/* Top Accent Vector Line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Stars and Verification Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 opacity-90">
                    <span className="text-[10px] font-mono font-medium text-primary uppercase tracking-wider">
                      Verified Impact
                    </span>
                    <BadgeCheck className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Quote Block */}
                <p className="text-secondary text-base leading-relaxed mb-6 block relative">
                  <MessageSquareCode className="w-8 h-8 text-primary/10 absolute -top-4 -left-3 -z-10 group-hover:text-primary/15 transition-colors" />
                  "{test.quote}"
                </p>
              </div>

              {/* Client Profile and Metric Block */}
              <div className="mt-4 pt-6 border-t border-white/5 flex flex-col gap-4">
                {/* Metric Visual Widget */}
                <div className="bg-primary/5 rounded-xl px-4 py-2.5 border border-primary/15 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-wider">
                      {test.metricLabel}
                    </span>
                    <span className="font-display font-bold text-base text-foreground mt-0.5">
                      {test.metric}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10 text-primary">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                {/* Profile Avatar Card */}
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${test.avatarColor} flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-md`}>
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-foreground tracking-tight leading-tight flex items-center gap-1">
                      {test.name}
                    </h4>
                    <p className="text-secondary text-xs mt-0.5 leading-tight">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
