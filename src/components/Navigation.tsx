import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Twitter, Instagram, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hasBanner = true;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains('light'));
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('metaforge-theme', 'dark');
      setIsLight(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('metaforge-theme', 'light');
      setIsLight(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
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
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'top-0 py-3 md:py-4 glass-strong backdrop-blur-glass-strong shadow-lg shadow-purple-950/20' 
        : hasBanner 
          ? 'top-[44px] py-4 md:py-8 bg-transparent' 
          : 'top-0 py-4 md:py-8 bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer select-none"
            onClick={() => scrollToSection('#home')}
          >
            <svg 
              viewBox="0 0 100 100" 
              className="w-8 h-8 md:w-10 md:h-10 text-primary"
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
            <span className="font-display font-bold text-lg md:text-2xl text-foreground tracking-tight">
              MetaForgeAI
            </span>
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center space-x-1.5 mr-2">
              <a 
                href="https://x.com/metaforgeai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110 text-secondary hover:text-primary"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/metaforge.tech/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110 text-secondary hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.reddit.com/user/METAFORGEAI/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass hover:glass-strong flex items-center justify-center transition-all duration-300 hover:scale-110 text-secondary hover:text-primary"
                aria-label="Reddit"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-4 h-4 fill-none stroke-current"
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

            <div className="flex items-center space-x-1.5">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 border border-transparent hover:border-primary/30 glass text-secondary hover:text-foreground hover:bg-white/5 backdrop-blur-md hover:shadow-glow hover:scale-105"
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA, Theme Toggle, & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle (Desktop Only to prevent header clutter on small devices, rendered in mobile menu on mobile) */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex w-10 h-10 rounded-xl glass hover:glass-strong items-center justify-center transition-all duration-300 hover:scale-110 text-secondary hover:text-primary relative z-10"
              aria-label="Toggle Theme"
              id="theme-toggle"
            >
              {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => navigate('/book')}
                className="relative px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-xs md:text-sm bg-gradient-aurora text-white hover:shadow-glow-lg hover:scale-105 transition-all duration-300 border border-primary/30"
              >
                <span className="relative z-10 block">
                  <span className="hidden sm:inline">Book a 15-min Call</span>
                  <span className="inline sm:hidden">Book Call</span>
                </span>
                <div className="absolute inset-0 bg-gradient-aurora opacity-80 rounded-xl"></div>
              </button>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden w-10 h-10 rounded-xl glass hover:glass-strong items-center justify-center transition-all duration-300 text-secondary hover:text-foreground relative z-10 active:scale-95"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-rose-500" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute left-0 right-0 top-full mt-2 mx-4 rounded-2xl glass-strong backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden lg:hidden"
          >
            <div className="p-5 space-y-4">
              {/* Theme Selector inside mobile menu */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-sm font-medium text-secondary">Switch Theme</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs text-foreground font-medium"
                >
                  {isLight ? (
                    <>
                      <Moon className="w-4 h-4 text-purple-400" /> Dark Mode
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" /> Light Mode
                    </>
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center justify-center py-3 px-4 rounded-xl font-medium text-sm glass text-secondary hover:text-foreground hover:bg-white/5 active:scale-95 transition-all"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Social Channels inside mobile menu */}
              <div className="flex items-center justify-center gap-4 pt-3 border-t border-white/5">
                <a 
                  href="https://x.com/metaforgeai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary hover:text-primary transition-all"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/metaforge.tech/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary hover:text-primary transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.reddit.com/user/METAFORGEAI/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-secondary hover:text-primary transition-all"
                  aria-label="Reddit"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-none stroke-current"
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;