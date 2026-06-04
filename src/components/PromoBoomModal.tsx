import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Gift, Zap, ArrowRight, Flame, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromoBoomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const navigate = useNavigate();

  // Boom effect trigger on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 400); // Trigger quickly after initial loading for a sudden 'boom' impact!
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer for urgency
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleClaim = () => {
    setIsOpen(false);
    navigate('/book');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
          />

          {/* Golden/Purple Cyberpunk Boom Container */}
          <motion.div
            initial={{ scale: 0.3, y: 15, opacity: 0, rotate: -3 }}
            animate={{ 
              scale: 1, 
              y: 0, 
              opacity: 1, 
              rotate: 0,
              transition: {
                type: "spring",
                damping: 18,
                stiffness: 120,
              }
            }}
            exit={{ 
              scale: 0.82, 
              opacity: 0, 
              y: 10,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
            className="relative w-full max-w-lg bg-slate-950/90 border border-primary/50 text-foreground rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(124,58,237,0.35)] overflow-hidden group select-none"
            id="promo-boom-modal-card"
          >
            {/* Ambient Background Lights */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Glowing active diagonal light scan */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-secondary hover:text-foreground hover:bg-white/10 transition-colors duration-200 z-10 focus:outline-none"
              aria-label="Dismiss Offer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content Core */}
            <div className="relative z-10 text-center">
              {/* Giant Visual Badge / Graphic */}
              <motion.div
                initial={{ scale: 0.5, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
                className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-primary-light p-[1.5px] shadow-[0_5px_25px_rgba(245,158,11,0.3)] flex items-center justify-center mb-5"
              >
                <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center">
                  <Gift className="w-7 h-7 text-amber-400 animate-bounce" />
                </div>
              </motion.div>

              {/* Tag / Alert Banner */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 font-mono text-[10px] uppercase tracking-widest mb-3">
                <Flame className="w-3 h-3 animate-pulse text-rose-400" /> STRICTLY LIMITED OFFER
              </div>

              {/* Title Header with custom glowing gradients */}
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                EXCLUSIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-rose-400 font-black drop-shadow-[0_0_15px_rgba(251,191,36,0.25)]">30% DISCOUNT</span>
              </h2>

              <p className="font-display font-semibold text-lg text-slate-300 mb-4 px-1 leading-snug">
                On Business Solutions &amp; Custom AI Websites!
              </p>

              {/* Descriptive list */}
              <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 mb-6 text-left space-y-3 font-sans">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-primary/10 border border-primary/25 flex items-center justify-center text-primary-light mt-0.5 flex-shrink-0">
                    <Zap className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Custom AI Engineered Websites</h4>
                    <p className="text-[11px] text-secondary">Stunning UX, high conversions, automated agent support, and direct internal data pipelines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-primary/10 border border-primary/25 flex items-center justify-center text-primary-light mt-0.5 flex-shrink-0">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Scale Business Operations</h4>
                    <p className="text-[11px] text-secondary">Replace manual overhead with reliable local RAG bots, lead capture automation, and clean ERP integrations.</p>
                  </div>
                </div>
              </div>

              {/* Urgency Real-Time Counter & Claim Progress */}
              <div className="flex items-center justify-between gap-4 mb-6 bg-slate-900/40 border border-white/5 rounded-xl px-4 py-2.5 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-secondary">
                  <Clock className="w-3.5 h-3.5 text-primary-light" />
                  <span>Offer Expiry:</span>
                </div>
                <div className="text-amber-400 font-extrabold flex gap-1">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="animate-pulse">:</span>
                  <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Boom Actions CTA */}
              <div className="space-y-2.5">
                <button
                  onClick={handleClaim}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 font-mono text-xs font-extrabold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:brightness-110 rounded-2xl shadow-[0_10px_25px_-5px_rgba(251,191,36,0.4)] transition-all duration-300 hover:scale-[1.02]"
                >
                  CLAIM YOUR 30% DISCOUNT NOW
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-secondary hover:text-white transition-colors duration-200 uppercase font-mono tracking-widest text-[10px] pointer-events-auto"
                >
                  Maybe Later, Keep Browsing
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PromoBoomModal;
