import { useState, useEffect } from "react";
import { SignIn } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Trophy, Target, BookOpen, Users } from "lucide-react";

const slides = [
  {
    image: "https://illustrations.popsy.co/emerald/studying.svg",
    title: "Advanced Learning Programs",
    desc: "Master complex concepts with AI doubt solver at your own convenience.",
    badge: "🤖 Tapasya AI Engine",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: Sparkles
  },
  {
    image: "https://illustrations.popsy.co/emerald/student-going-to-school.svg",
    title: "Track Your Progress",
    desc: "Real-time analytics to pinpoint weaknesses and improve continuously.",
    badge: "📊 Live Analytics",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    icon: Target
  },
  {
    image: "https://illustrations.popsy.co/emerald/creative-work.svg",
    title: "Personalized Roadmap",
    desc: "Adaptive learning paths that evolve based on your real performance.",
    badge: "🏆 Smart Planning",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    icon: Trophy
  }
];

export default function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-slate-50 relative overflow-hidden p-0 sm:p-6 md:p-8 select-none">
      
      {/* Premium Ambient Glowing Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl"
        />
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-[100dvh] sm:h-auto sm:min-h-[600px] max-w-[960px] bg-white/85 sm:bg-white backdrop-blur-md sm:rounded-[2.5rem] sm:shadow-2xl sm:shadow-emerald-950/10 flex flex-col md:flex-row overflow-y-auto overflow-x-hidden md:overflow-hidden relative z-10 border-0 sm:border border-emerald-50 custom-scrollbar"
      >
        {/* Left Panel - Illustration & Highlight Slider (Desktop only) */}
        <div className="hidden md:flex flex-col w-full md:flex-1 bg-gradient-to-b from-emerald-50/70 to-emerald-100/40 items-center justify-center p-8 md:p-12 text-center relative overflow-hidden min-h-[320px] md:min-h-0 shrink-0 border-r border-emerald-50">
          <div className="absolute top-6 left-6 flex items-center gap-2">
            <span className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full text-[11px] font-black tracking-wider text-emerald-800 uppercase flex items-center gap-1 shadow-sm">
              <Sparkles size={11} className="text-emerald-500 animate-pulse" /> 100% Focused on JEE Mains & Advanced
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[340px] relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center absolute inset-0 md:pt-12"
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-emerald-100/30 rounded-full blur-xl animate-pulse" />
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title} 
                    className="w-full h-[180px] md:h-[230px] object-contain drop-shadow-md relative z-10" 
                  />
                </div>
                
                <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-wider mb-2.5 border ${slides[currentSlide].color}`}>
                  {slides[currentSlide].badge}
                </span>

                <h2 className="text-[19px] md:text-[21px] font-black text-emerald-950 mb-1.5 leading-snug tracking-tight">
                  {slides[currentSlide].title}
                </h2>
                
                <p className="text-[13px] md:text-[13.5px] text-emerald-800/70 font-medium mb-8 leading-relaxed px-2">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Pagination dots positioned at bottom */}
            <div className="flex gap-1.5 absolute bottom-4">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-emerald-600' : 'w-1.5 bg-emerald-200 hover:bg-emerald-300'}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Form (Adaptive for mobile users) */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 bg-white relative shrink-0 min-h-[550px] sm:min-h-[600px]">
          <div className="w-full max-w-[340px] flex flex-col justify-between h-full py-2">
            
            {/* Branding Section */}
            <div>
              <div className="flex justify-center items-center mb-5 sm:mb-6 mt-4">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm mr-3">
                  <img src="/JT_LOGO.png" alt="Logo" className="h-7 w-7 object-contain opacity-90" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-[0.15em] text-emerald-950 uppercase leading-none">JEE TAPASYA</span>
                  <span className="text-[9px] font-bold text-emerald-600 tracking-wider uppercase mt-1">Practice & Learn Hub</span>
                </div>
              </div>

              {/* Mobile Carousel - Highly engaging and compact slider displayed only on Mobile */}
              <div className="block md:hidden mb-6 bg-gradient-to-br from-emerald-50/50 to-amber-50/40 border border-emerald-100/50 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100/20 rounded-full blur-xl pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {(() => {
                        const IconComponent = slides[currentSlide].icon;
                        return <IconComponent size={14} className="text-emerald-600" />;
                      })()}
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                        {slides[currentSlide].badge}
                      </span>
                    </div>
                    <h3 className="text-[14px] font-bold text-emerald-950 leading-tight mb-1">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-[11.5px] text-emerald-800/80 leading-relaxed">
                      {slides[currentSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Compact dots */}
                <div className="flex gap-1 mt-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-4 bg-emerald-600' : 'w-1 bg-emerald-200'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Core greeting text */}
              <div className="text-center mb-6">
                <h1 className="text-lg font-bold text-emerald-950 tracking-tight">
                  Welcome to Your Sanctuary of Prep
                </h1>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Enter your credentials below to resume your daily tapasya.
                </p>
              </div>
            </div>

            {/* Clerk Custom Sign In Container */}
            <div className="clerk-custom-wrapper relative z-10 flex justify-center w-full mb-6">
              <SignIn 
                routing="path" 
                path="/sign-in"
                signUpUrl="/sign-up"
                appearance={{
                  layout: {
                    socialButtonsPlacement: "bottom",
                    socialButtonsVariant: "blockButton",
                    logoPlacement: "none",
                  },
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none w-full max-w-full bg-transparent p-0 gap-5",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    logoBox: "hidden",
                    socialButtonsBlockButton: "rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold h-[44px] transition-all mt-1 active:scale-[0.98]",
                    socialButtonsBlockButtonText: "font-bold text-[13px] tracking-wide text-slate-700",
                    socialButtonsProviderIcon: "w-4.5 h-4.5",
                    dividerLine: "bg-slate-100",
                    dividerText: "text-slate-400 font-bold text-[10px] bg-white px-3 uppercase tracking-wider",
                    formFieldLabel: "text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1",
                    formFieldInput: "!border-x-0 !border-t-0 !border-b-2 !border-slate-200 !rounded-none !bg-transparent !px-0 !shadow-none !ring-0 focus:!border-emerald-500 text-slate-900 font-semibold h-10 transition-all text-sm",
                    formButtonPrimary: "rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[13px] tracking-widest uppercase h-[48px] mt-6 transition-all w-full active:scale-[0.98] shadow-lg shadow-emerald-600/15",
                    footerActionText: "text-slate-500 text-[12px] font-medium",
                    footerActionLink: "text-emerald-600 font-bold hover:text-emerald-700 transition-colors",
                    identityPreview: "bg-slate-50 border border-slate-200 rounded-2xl mb-3",
                    identityPreviewText: "text-slate-800 font-medium",
                    identityPreviewEditButton: "text-emerald-600 hover:bg-emerald-50 rounded-xl",
                    formFieldRow: "mb-4",
                    formFieldWarningText: "text-[11px]",
                    formFieldErrorText: "text-[11px]",
                  }
                }}
              />
            </div>

            {/* Bottom trust stats */}
            <div className="mt-2 pt-4 border-t border-slate-100 flex items-center justify-center gap-4 text-slate-400">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Secure Login</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-200" />
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                <Users size={14} className="text-emerald-600" />
                <span>10k+ Aspirants</span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
