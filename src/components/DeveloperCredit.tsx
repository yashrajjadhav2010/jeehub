import { motion } from "motion/react";

export function DeveloperCredit({ className }: { className?: string }) {
  return (
    <div className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative group pointer-events-auto cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-blue-500 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

        <a
          href="https://yashrajjadhav.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block bg-white/95 backdrop-blur-xl px-5 py-3.5 rounded-3xl border border-white shadow-xl overflow-hidden group-hover:scale-105 transition-all duration-500 ease-out"
        >
          {/* Sea water waves animation */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-3xl">
            <div className="sea-wave sea-wave-1" />
            <div className="sea-wave sea-wave-2" />
            <div className="sea-wave sea-wave-3" />
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 flex items-center justify-center border border-emerald-200/50 overflow-hidden shadow-inner group-hover:shadow-emerald-900/10 transition-shadow bg-white/80 backdrop-blur-sm">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-lg drop-shadow-sm"
              >
                ✨
              </motion.span>
            </div>

            <div className="flex flex-col items-start justify-center pr-2">
              <p className="text-[9px] font-black tracking-[0.25em] text-emerald-900/40 uppercase mb-0.5 group-hover:text-emerald-900/60 transition-colors duration-300">
                Designed & Engineered by
              </p>
              <p className="text-sm font-black tracking-widest bg-gradient-to-r from-emerald-950 to-primary bg-clip-text text-transparent group-hover:from-emerald-950 group-hover:to-primary transition-all duration-300 relative drop-shadow-sm">
                YASHRAJ JADHAV
              </p>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
}
