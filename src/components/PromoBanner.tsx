import { useState, useEffect } from 'react';
import { AlertCircle, Flame, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const PromoBanner = () => {
  const [spotsRemaining, setSpotsRemaining] = useState(3);
  const navigate = useNavigate();

  // Subtle real-time vibe: simulate slot reservations or pulses
  useEffect(() => {
    const timer = setTimeout(() => {
      // Keep it urgent but let it stay around 2 or 3 spots
      setSpotsRemaining((prev) => (prev > 1 ? prev : 3));
    }, 45000);
    return () => clearTimeout(timer);
  }, [spotsRemaining]);

  const handleClaim = () => {
    navigate('/book');
  };

  return (
    <div 
      onClick={handleClaim}
      className="relative w-full z-[100] bg-neutral-950 border-b border-primary/40 hover:brightness-110 transition-all duration-300 cursor-pointer shadow-[0_4px_25px_rgba(124,58,237,0.18)] select-none py-2.5 flex items-center overflow-hidden group"
      id="promo-banner-container"
    >
      {/* Cyber Grid Background Pulse */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Animated Glowing Laser Line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
      
      {/* Side Ambient Glowing Spots */}
      <div className="absolute left-1/4 -top-12 w-32 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute right-1/4 -bottom-12 w-32 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 relative z-10">
        {/* Core Promo warning block */}
        <div className="flex items-center gap-3 truncate">
          {/* Pulse Strobe Indicator */}
          <div className="relative flex items-center justify-center flex-shrink-0">
            <div className="w-6 h-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary-light">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
          </div>

          <div className="truncate text-xs font-mono tracking-tight text-foreground flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1.5 bg-rose-500/15 border border-rose-500/35 text-rose-400 text-[9px] px-2 py-0.5 rounded-md font-black uppercase tracking-wider">
              <Flame className="w-3 h-3 text-rose-400 animate-bounce" /> EXCLUSIVE LAUNCH OFFER
            </span>
            <span className="truncate font-semibold text-slate-200">
              FIRST 10 CUSTOMERS SECURE <span className="underline decoration-primary decoration-2 font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">30% INSTANT DISCOUNT</span> ON PRIVATE ENTERPRISE AI & RAG DEPLOYMENTS!
            </span>
          </div>
        </div>

        {/* Action Badge & Spots Left */}
        <div className="flex items-center gap-3.5 flex-shrink-0">
          <motion.div 
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="hidden sm:inline-flex text-[10px] uppercase font-mono tracking-widest bg-rose-500/15 border border-rose-500/30 text-rose-300 font-extrabold px-3 py-1 rounded-md"
          >
            ONLY {spotsRemaining} SPECIAL SLOTS REMAIN
          </motion.div>
          
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-300 px-3 py-1.5 rounded-lg hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:scale-105 transition-all duration-300">
            <span className="hidden lg:inline">Claim Free 15-Min Strategy Session</span>
            <span className="lg:hidden">Claim Offer</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
