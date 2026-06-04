import { Mail, Phone, MapPin, Twitter, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-background border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="animate-fade-up">
            <div className="flex items-center space-x-2 mb-6">
              <svg 
                viewBox="0 0 100 100" 
                className="w-10 h-10 text-primary"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="6" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="50,4 90,27 90,73 50,96 10,73 10,27" />
                <polygon points="50,18 58,23 58,33 50,38 42,33 42,23" />
                <path d="M 38,28 C 24,28 22,38 22,48 L 22,52 L 26,56 L 26,66 L 36,76 L 36,84 L 50,91 L 64,84 L 64,76 L 74,66 L 74,56 L 78,52 L 78,48 C 78,38 76,28 62,28" />
                <path d="M 34,46 L 50,56 L 66,46 L 66,58 L 56,68 L 56,80 L 50,84 L 44,80 L 44,68 L 34,58 Z" />
              </svg>
              <span className="font-display font-bold text-2xl text-foreground">
                MetaForgeAI
              </span>
            </div>
            <p className="text-secondary leading-relaxed mb-6 max-w-sm">
              Redefining the future with intelligent AI solutions that transform 
              businesses and accelerate growth in the digital age.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/metaforgeai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/metaforge.tech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.reddit.com/user/METAFORGEAI/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Reddit"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 text-primary fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M17 11.5a1.5 1.5 0 0 1-1.5 1.5c-.3 0-.6-.1-.8-.2-.9.7-2.1 1.2-3.4 1.2s-2.5-.5-3.4-1.2c-.2.1-.5.2-.8.2a1.5 1.5 0 0 1-1.5-1.5c0-.6.4-1.1.9-1.4-.1-.3-.1-.6-.1-.9 0-2 2.1-3.6 4.6-3.6 2.5 0 4.6 1.6 4.6 3.6 0 .3 0 .6-.1.9.5.3.9.8.9 1.4z" />
                  <circle cx="9.5" cy="11.5" r=".5" />
                  <circle cx="14.5" cy="11.5" r=".5" />
                  <path d="M15 15.5c-.7 1-1.8 1.5-3 1.5s-2.3-.5-3-1.5" />
                  <path d="M12 7c1.3 0 2.5.4 3.4 1.1l1.1-1.1" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
              Quick Links
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Blog', href: '#blog' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-secondary hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:info.metaforgeai@gmail.com" 
                  className="text-secondary hover:text-primary transition-colors duration-300"
                >
                  info.metaforgeai@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-secondary">+92 311-5616854</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-secondary">Islamabad, PK</span>
              </div>
            </div>

            {/* CTA in Footer */}
            <div className="mt-8 p-6 glass rounded-xl">
              <h4 className="font-display font-semibold mb-3 text-foreground">
                Ready to Start?
              </h4>
              <p className="text-secondary text-sm mb-4">
                Book a free consultation and discover how AI can transform your business.
              </p>
              <button 
                onClick={() => navigate('/book')}
                className="btn-primary w-full"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-secondary text-sm">
            © {currentYear} MetaForgeAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-secondary hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-secondary hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="/data-security" className="text-secondary hover:text-primary transition-colors text-sm">
              Data Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;