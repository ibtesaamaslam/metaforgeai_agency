import { useState } from 'react';
import { Plus, Minus, Zap, Shield, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/book');
  };

  const faqs = [
    {
      question: "How quickly can MetaForgeAI implement AI solutions?",
      answer: "Our rapid deployment methodology allows us to implement basic AI solutions within 2-4 weeks, while complex enterprise systems typically take 6-12 weeks. We use our proprietary AI frameworks and pre-trained models to accelerate development without compromising quality.",
      icon: Clock
    },
    {
      question: "What makes MetaForgeAI different from other AI companies?",
      answer: "We combine cutting-edge AI technology with deep business understanding. Our team includes former executives from Fortune 500 companies and PhD researchers from top universities. We focus on measurable ROI and have delivered an average of 300% revenue increase for our clients.",
      icon: Zap
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security with end-to-end encryption, comply with GDPR, CCPA, and SOC 2 Type II standards. All data processing occurs on secure, isolated cloud environments with zero-trust architecture. We never store sensitive data longer than necessary for project completion.",
      icon: Shield
    },
    {
      question: "Can your AI solutions integrate with existing business systems?",
      answer: "Absolutely. Our AI solutions are designed with integration-first architecture. We work with 200+ popular business tools including Salesforce, HubSpot, SAP, Oracle, and custom databases. Our APIs ensure seamless data flow without disrupting existing workflows.",
      icon: Users
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve 15+ industries with specialized expertise in e-commerce, healthcare, finance, manufacturing, and logistics. Our industry-specific AI models are trained on domain-relevant data, ensuring higher accuracy and faster implementation compared to generic solutions.",
      icon: Zap
    },
    {
      question: "How do you measure AI project success?",
      answer: "Every project includes predefined KPIs such as accuracy rates, processing speed, cost reduction, and revenue impact. We provide real-time dashboards and monthly reports showing ROI, performance metrics, and optimization recommendations. Our average client sees 200-400% ROI within 6 months.",
      icon: Clock
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer 24/7 monitoring, regular model updates, and continuous optimization. Our support includes proactive maintenance, performance tuning, and scaling assistance. We also provide training for your team and comprehensive documentation for long-term success.",
      icon: Users
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing including project-based, retainer, and revenue-sharing models. Our basic AI implementations start at $25,000, while enterprise solutions are custom-quoted. We also offer a risk-free pilot program to demonstrate value before full commitment.",
      icon: Shield
    }
  ];

  const features = [
    {
      title: "Enterprise-Grade Security",
      description: "SOC 2 Type II certified with military-grade encryption",
      icon: Shield
    },
    {
      title: "24/7 AI Monitoring",
      description: "Round-the-clock performance monitoring and optimization",
      icon: Clock
    },
    {
      title: "Rapid Deployment",
      description: "Go live in weeks, not months, with our proven frameworks",
      icon: Zap
    },
    {
      title: "Expert Team",
      description: "PhD researchers and Fortune 500 veterans at your service",
      icon: Users
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="overline mb-6">Frequently Asked Questions</div>
          <h2 className="display-lg mb-8">
            <span className="block">Everything You Need</span>
            <span className="block text-primary">to Know About Our AI</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our AI solutions, implementation process, 
            and how we can transform your business with intelligent automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon;
                const isOpen = openIndex === index;
                
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden animate-fade-up ${
                      isOpen 
                        ? 'bg-slate-900/40 border-primary/40 shadow-[0_0_25px_rgba(124,58,237,0.06)]' 
                        : 'glass border-white/5 hover:border-white/15'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 focus:outline-none"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          isOpen ? 'bg-primary' : 'bg-gradient-aurora'
                        }`}>
                          <IconComponent className="w-5 h-5 text-white animate-pulse" />
                        </div>
                        <h3 className={`font-display font-semibold text-base md:text-lg transition-colors duration-300 pr-4 ${
                          isOpen ? 'text-primary' : 'text-foreground'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-primary" />
                        ) : (
                          <Plus className="w-5 h-5 text-secondary" />
                        )}
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 animate-fade-in border-t border-white/5 pt-5 ml-6 mr-6">
                        <div className="pl-8">
                          <p className="text-secondary leading-relaxed text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-display font-semibold text-xl mb-6 text-foreground">
                Why Choose MetaForgeAI?
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-secondary">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass rounded-2xl p-6 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-aurora flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3 text-foreground">
                Still Have Questions?
              </h3>
              <p className="text-secondary text-sm mb-4">
                Our AI experts are here to help. Schedule a free consultation to discuss your specific needs.
              </p>
              <button 
                onClick={handleBookCall}
                className="btn-primary w-full"
              >
                Schedule Free Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "15+", label: "Projects" },
                { number: "99.7%", label: "Uptime" },
                { number: "24/7", label: "Support" },
                { number: "6+", label: "Industries" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center animate-fade-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-2xl font-display font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;