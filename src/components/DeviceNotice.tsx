import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, X, Info } from 'lucide-react';

export default function DeviceNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if on mobile and if not dismissed before
    const isMobile = window.innerWidth < 1024;
    const isDismissed = localStorage.getItem('mobileNoticeDismissed');
    
    if (isMobile && !isDismissed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('mobileNoticeDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-24 left-4 right-4 z-[200] md:hidden"
        >
          <div className="bg-emerald-950/95 backdrop-blur-md text-white p-5 rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 ring-4 ring-primary/5">
               <Monitor size={18} className="text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Mission Alert</span>
              </div>
              <h4 className="text-sm font-black heading-display uppercase italic tracking-tight">Desktop Optimization</h4>
              <p className="text-[11px] text-white/70 font-medium leading-relaxed">
                For the full mission telemetry, advanced analytics, and precision practice, we recommend using a desktop environment.
              </p>
            </div>
            <button 
              onClick={dismiss}
              className="p-2.5 bg-white/5 hover:bg-white/15 rounded-xl transition-all shrink-0 border border-white/10 active:scale-95 flex items-center justify-center"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
