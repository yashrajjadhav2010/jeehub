import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function DeveloperCredit({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-medium text-emerald-900/60 uppercase tracking-widest"
      >
        <span>Made With</span>
        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
        <span>by</span>
        <a
          href="https://yashrajjadhav.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black text-emerald-700 hover:text-emerald-900 transition-colors ml-1"
        >
          YASHRAJ JADHAV
        </a>
      </motion.div>
    </div>
  );
}
