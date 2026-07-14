import { SignUp } from "@clerk/clerk-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Register() {
  return (
    <div className="min-h-[100dvh] w-full bg-[#f8fafc] flex flex-col items-center justify-start sm:justify-center relative p-0 sm:p-6 md:p-8 overflow-y-auto overflow-x-hidden select-none">
      
      {/* Inject custom CSS for Clerk inputs */}
      <style>{`
        .custom-clerk-input[name="firstName"],
        .custom-clerk-input[name="lastName"],
        .custom-clerk-input[name="username"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'%3E%3C/path%3E%3C/svg%3E");
          background-position: 14px center;
          background-repeat: no-repeat;
          background-size: 20px;
          padding-left: 44px !important;
        }
        .custom-clerk-input[name="emailAddress"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'%3E%3C/path%3E%3C/svg%3E");
          background-position: 14px center;
          background-repeat: no-repeat;
          background-size: 20px;
          padding-left: 44px !important;
        }
        .custom-clerk-input[name="password"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'%3E%3C/path%3E%3C/svg%3E");
          background-position: 14px center;
          background-repeat: no-repeat;
          background-size: 20px;
          padding-left: 44px !important;
        }
        .custom-clerk-btn::after {
          content: "→";
          margin-left: 8px;
          font-size: 18px;
          transition: transform 0.2s ease;
        }
        .custom-clerk-btn:hover::after {
          transform: translateX(4px);
        }
      `}</style>

      {/* Main Card Container */}
      <div 
        className="w-full h-full sm:h-auto sm:min-h-[680px] sm:max-w-[420px] lg:max-w-[1000px] lg:min-h-[600px] lg:flex-row sm:rounded-[40px] lg:rounded-3xl bg-white sm:shadow-2xl sm:shadow-blue-900/10 overflow-hidden flex flex-col relative z-10 border-0 sm:border border-slate-100/50"
      >
        
        {/* Curvy Blue Header */}
        <div className="relative bg-[#1e40af] w-full lg:w-1/2 pt-12 pb-24 lg:pb-12 px-8 shrink-0 flex flex-col justify-center">
          
          {/* Back Button */}
          <Link to="/" className="absolute top-8 left-6 lg:left-8 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-20">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </Link>
          
          <div className="relative z-20 mt-12 lg:mt-0">
            <motion.h1 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-[32px] lg:text-[44px] font-extrabold tracking-tight mb-4"
            >
              Sign Up
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-100 text-base lg:text-lg max-w-[280px] leading-relaxed font-medium"
            >
              Join us and start your learning journey
            </motion.p>
          </div>
          
          {/* Background Wavy SVGs */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none translate-y-[1px] lg:hidden">
            <motion.svg 
              animate={{ x: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[150%] h-auto md:w-[150%] opacity-30 absolute bottom-0"
            >
              <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="white"/>
            </motion.svg>
            <motion.svg 
              animate={{ x: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-auto md:w-[150%] absolute bottom-0 opacity-60"
            >
              <path d="M0,64L48,90.7C96,117,192,171,288,186.7C384,203,480,181,576,149.3C672,117,768,75,864,74.7C960,75,1056,117,1152,144C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="white"/>
            </motion.svg>
            <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto absolute bottom-0">
               <path d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,144C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Floating Illustration */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute top-[170px] lg:top-auto lg:bottom-12 lg:left-[10%] left-0 right-0 lg:right-auto flex justify-center pointer-events-none z-30"
        >
          <img 
            src="https://illustrations.popsy.co/blue/student-going-to-school.svg" 
            alt="Learning Illustration" 
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-[300px] lg:h-[300px] object-contain drop-shadow-sm"
          />
        </motion.div>

        {/* Clerk Form Wrapper */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-1 lg:w-1/2 bg-white px-8 pt-[120px] lg:pt-16 pb-8 flex flex-col justify-center items-center z-20 custom-scrollbar overflow-y-auto"
        >
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
                rootBox: "w-full max-w-[360px]",
                card: "shadow-none w-full max-w-full bg-transparent p-0 flex flex-col gap-4",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                logoBox: "hidden",
                formFieldLabel: "text-[12px] font-bold text-slate-500 mb-1.5",
                formFieldInput: "custom-clerk-input rounded-xl border-2 border-slate-100 bg-white px-4 h-[52px] text-sm font-semibold text-slate-800 focus:border-[#2563eb] focus:ring-0 shadow-sm transition-all w-full",
                formButtonPrimary: "custom-clerk-btn rounded-xl bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-[14px] h-[52px] w-full flex items-center justify-center transition-all mt-3 shadow-lg shadow-blue-600/25 active:scale-[0.98]",
                dividerRow: "my-5",
                dividerLine: "bg-slate-200",
                dividerText: "text-slate-400 font-bold text-[11px] px-4 tracking-widest uppercase",
                socialButtonsBlockButton: "rounded-xl border-2 border-slate-100 bg-white hover:bg-slate-50 text-slate-700 font-bold text-[14px] h-[52px] transition-all flex items-center justify-center active:scale-[0.98]",
                socialButtonsProviderIcon: "w-5 h-5 mr-3",
                footerActionText: "text-slate-600 text-[13px] font-semibold",
                footerActionLink: "text-[#2563eb] font-bold hover:text-blue-700 ml-1",
                formFieldAction: "text-[#2563eb] hover:text-blue-700 font-bold text-[12px]",
                footer: "mt-3",
                identityPreview: "bg-slate-50 border border-slate-200 rounded-2xl mb-3",
                identityPreviewText: "text-slate-800 font-semibold",
                identityPreviewEditButton: "text-[#2563eb] hover:bg-blue-50 rounded-xl",
                formFieldRow: "mb-4",
              }
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
