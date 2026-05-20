import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCall = () => {
    navigate('/book');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: [0.8, 1.1, 0.9, 1.05, 0.8], opacity: [0.3, 0.6, 0.4, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="aurora-bg w-[600px] h-[400px] rounded-full"
        ></motion.div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>

      <div className="container-custom relative z-10 text-center pt-20">
        {/* Overline */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overline mb-8"
        >
          2026 / Next-Gen AI Studio
        </motion.div>

        {/* Main Heading */}
        <h1 className="display-xl mb-6 font-display font-black tracking-tight">
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="block"
          >
            AI-Driven Success
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="block text-primary drop-shadow-[0_0_15px_rgba(var(--primary-color),0.2)]"
          >
            Redefining the Future.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-xl text-secondary leading-relaxed mb-4">
            Creating latest solutions that redefine innovation.
          </p>
          <p className="text-lg text-secondary">
            Stay ahead with AI-powered technology for the future.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBookCall}
            className="btn-primary"
          >
            Book a 15-min Call
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToAbout}
            className="btn-secondary"
          >
            What is MetaForgeAI?
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button 
            onClick={scrollToAbout}
            className="inline-flex items-center justify-center p-3 rounded-full glass hover:glass-strong transition-all duration-300 animate-float"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;