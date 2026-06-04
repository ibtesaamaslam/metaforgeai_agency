import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/book');
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-glow rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-glow rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Headline */}
          <div className="animate-fade-up">
            <div className="overline mb-6">About Us</div>
            <h2 className="display-lg mb-8">
              <span className="block">Built on</span>
              <span className="block text-primary">creativity,</span>
              <span className="block">collaboration,</span>
              <span className="block">and top</span>
              <span className="block text-primary">excellence.</span>
            </h2>
            <button 
              onClick={handleBookAppointment}
              className="btn-primary inline-flex items-center gap-2"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Column - Content */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* WHO, WHAT, WHERE, WHY Copy */}
            <p className="text-lg text-secondary leading-relaxed mb-8">
              <strong>MetaForgeAI</strong> is a premier <strong>Pakistan-based enterprise AI agency</strong> delivering production-ready, enterprise-grade AI applications. Founded by <strong>Ibtesaam Aslam</strong>, a full-stack developer and AI systems engineer, our agency specializes in engineering secure <strong>RAG systems, autonomous AI agent workflows, domain-specific LLM fine-tuning pipelines, intelligent AI chatbots, and comprehensive business process automation (BPA) architectures</strong>.
            </p>
            
            <p className="text-lg text-secondary leading-relaxed mb-12">
              Strategically headquartered in Pakistan and serving emerging corporate hubs across the <strong>MENA region</strong> (including the UAE, Saudi Arabia, Qatar, Egypt, and Kuwait), our core mission is <strong>to make highly sophisticated enterprise-grade AI accessible, performant, and secure for businesses navigating modern markets</strong>. We collaborate with mid-market companies and enterprises to design intelligent setups that don't just automate tasks—they radically improve accuracy, scale throughput, and unlock measurable ROI.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Innovation First</h3>
                  <p className="text-secondary">Pioneering AI solutions that set new industry standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Results Driven</h3>
                  <p className="text-secondary">Measurable outcomes that transform your business operations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Partnership Focus</h3>
                  <p className="text-secondary">Collaborative approach ensuring your vision becomes reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;