import { ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 glass"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full opacity-30 animate-pulse"></div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h2 className="display-lg mb-8">
            <span className="block">Ready to Transform</span>
            <span className="block text-primary">Your Business?</span>
          </h2>
          
          <p className="text-xl text-secondary mb-12 leading-relaxed max-w-2xl mx-auto">
            Join the AI revolution and discover how MetaForgeAI can accelerate 
            your growth with intelligent automation and predictive insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/book')}
              className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5 active:scale-95 transition-transform"
            >
              <Calendar className="w-6 h-6" />
              Book a 15-min Call
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="text-secondary text-sm">
              <p>Free consultation • No commitment required</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              { number: "15+", label: "AI Solutions Deployed" },
              { number: "98%", label: "Client Satisfaction Rate" },
              { number: "2.5x", label: "Average ROI Increase" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;