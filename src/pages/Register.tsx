import { useState, useEffect } from "react";
import { SignUp } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    image: "https://illustrations.popsy.co/emerald/student-going-to-school.svg",
    title: "Start Your Journey",
    desc: "Create an account to access mock tests, performance analytics, and more."
  },
  {
    image: "https://illustrations.popsy.co/emerald/studying.svg",
    title: "Advanced Learning Programs",
    desc: "Master concepts with AI doubt solver at your own convenience."
  },
  {
    image: "https://illustrations.popsy.co/emerald/creative-work.svg",
    title: "Personalized Roadmap",
    desc: "Adaptive learning paths that evolve with your performance."
  }
];

export default function Register() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-br from-[#dcebdf] to-[#e8f5e9] p-0 sm:p-8 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-[100dvh] sm:h-auto sm:min-h-[550px] max-w-[900px] bg-white sm:rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 flex flex-col md:flex-row overflow-y-auto overflow-x-hidden md:overflow-hidden relative z-10 custom-scrollbar"
      >
        {/* Left Panel - Illustration */}
        <div className="hidden md:flex flex-col w-full md:flex-1 bg-[#eaf4ea] items-center justify-center p-8 md:p-12 text-center relative overflow-hidden min-h-[320px] md:min-h-0 shrink-0">
          <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[320px] relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center absolute inset-0 md:pt-16"
              >
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="w-full h-[160px] md:h-[240px] mb-4 md:mb-8 object-contain drop-shadow-sm" 
                />
                <h2 className="text-[18px] md:text-[22px] font-medium text-gray-700 mb-1 md:mb-2">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-[13px] md:text-[14px] text-gray-500 mb-8 md:mb-10 leading-relaxed px-2 md:px-4">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>
            
            {/* Pagination dots positioned at bottom */}
            <div className="flex gap-2 absolute bottom-2 md:bottom-0">
              {slides.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-6 bg-emerald-400' : 'w-2 bg-emerald-200'}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 bg-white relative shrink-0 min-h-[500px]">
          <div className="w-full max-w-[320px] pb-4">
            {/* Logo */}
            <div className="flex justify-center items-center mb-8 md:mb-10">
              <img src="/JT_LOGO.png" alt="Logo" className="h-6 mr-3 object-contain mix-blend-multiply opacity-80" />
              <span className="text-2xl font-serif tracking-widest text-gray-900 uppercase">JEE TAPASYA</span>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-xl text-gray-400">
                Join JEE Tapasya
              </h1>
            </div>

            <div className="clerk-custom-wrapper relative z-10 flex justify-center w-full">
              <SignUp 
                routing="path" 
                path="/sign-up"
                signInUrl="/sign-in"
                appearance={{
                  layout: {
                    socialButtonsPlacement: "bottom",
                    socialButtonsVariant: "blockButton",
                    logoPlacement: "none",
                  },
                  elements: {
                    rootBox: "w-full",
                    card: "shadow-none w-full max-w-full bg-transparent p-0 gap-6",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    logoBox: "hidden",
                    socialButtonsBlockButton: "rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium h-[42px] transition-colors mt-2",
                    socialButtonsBlockButtonText: "font-semibold text-[13px]",
                    socialButtonsProviderIcon: "w-4 h-4",
                    dividerLine: "bg-gray-200",
                    dividerText: "text-gray-400 font-medium text-[11px] bg-white px-3 lowercase",
                    formFieldLabel: "text-[12px] font-medium text-gray-400 mb-0",
                    formFieldInput: "!border-x-0 !border-t-0 !border-b !border-gray-300 !rounded-none !bg-transparent !px-0 !shadow-none !ring-0 focus:!border-emerald-500 text-gray-800 h-9 transition-all",
                    formButtonPrimary: "rounded-full bg-[#1c2a33] hover:bg-[#142027] text-white font-medium text-[14px] h-[46px] mt-6 transition-all w-[180px] mx-auto block shadow-md shadow-gray-900/20",
                    footerActionText: "text-gray-500 text-[13px] font-medium",
                    footerActionLink: "text-emerald-500 font-medium hover:text-emerald-600 transition-colors",
                    identityPreview: "bg-gray-50 border border-gray-200 rounded-xl mb-4",
                    identityPreviewText: "text-gray-800 font-medium",
                    identityPreviewEditButton: "text-emerald-500 hover:bg-emerald-50 rounded-lg",
                    formFieldRow: "mb-4",
                    formFieldWarningText: "text-[11px]",
                    formFieldErrorText: "text-[11px]",
                  }
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
