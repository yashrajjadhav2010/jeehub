const fs = require('fs');
let code = fs.readFileSync('src/pages/Register.tsx', 'utf8');

const newImports = `import { useState, useEffect } from "react";
import { SignUp } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShieldCheck, Trophy, Target, BookOpen, Users } from "lucide-react";`;

code = code.replace(/import \{ useState, useEffect \} from "react";\nimport \{ SignUp \} from "@clerk\/clerk-react";\nimport \{ motion, AnimatePresence \} from "motion\/react";/, newImports);

const newSlides = `const slides = [
  {
    image: "https://illustrations.popsy.co/emerald/student-going-to-school.svg",
    title: "Start Your Journey",
    desc: "Create an account to access mock tests, performance analytics, and more.",
    badge: "🚀 Get Started",
    color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    icon: Sparkles
  },
  {
    image: "https://illustrations.popsy.co/emerald/studying.svg",
    title: "Advanced Learning Programs",
    desc: "Master concepts with AI doubt solver at your own convenience.",
    badge: "🤖 Tapasya AI Engine",
    color: "bg-amber-50 text-amber-700 border-amber-100",
    icon: Target
  },
  {
    image: "https://illustrations.popsy.co/emerald/creative-work.svg",
    title: "Personalized Roadmap",
    desc: "Adaptive learning paths that evolve with your performance.",
    badge: "🏆 Smart Planning",
    color: "bg-sky-50 text-sky-700 border-sky-100",
    icon: Trophy
  }
];`;

code = code.replace(/const slides = \[[\s\S]*?\];/, newSlides);

const mobileContent = `            {/* Branding Section */}
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
                      className={\`h-1 rounded-full transition-all duration-300 \${currentSlide === idx ? 'w-4 bg-emerald-600' : 'w-1 bg-emerald-200'}\`}
                    />
                  ))}
                </div>
              </div>

              {/* Core greeting text */}
              <div className="text-center mb-6">
                <h1 className="text-lg font-bold text-emerald-950 tracking-tight">
                  Join Your Sanctuary of Prep
                </h1>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Create an account to start your daily tapasya.
                </p>
              </div>
            </div>`;

code = code.replace(/            \{\/\* Logo \*\/\}[\s\S]*?Join JEE Tapasya[\s\S]*?<\/div>\n            <\/div>/, mobileContent);

fs.writeFileSync('src/pages/Register.tsx', code);
console.log('Patched Register.tsx mobile layout');
