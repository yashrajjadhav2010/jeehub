import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Target, Clock, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function MockTests() {
  const tests = [
    {
      id: "mock-1",
      title: "JEE Mock Test 1 (Class 11)",
      difficulty: "Simulation",
      duration: "180 Mins",
      questions: 75,
      status: "Available",
      syllabus: "Physics: Basic Maths, Vector & Calculus | Chemistry: Basic Inorganic, IUPAC, Periodic Properties | Maths: Basic Maths, Inequality, Sets, Log"
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      <div className="mb-8 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8">
        <div className="relative flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-12 h-[1px] bg-purple-500/50" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-purple-600/60">Phase 02 / Simulation</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black heading-display leading-[0.85] text-purple-950 uppercase tracking-tighter mb-6">
            Mock <span className="text-purple-500 italic lowercase font-serif font-light tracking-normal">Tests</span>
          </h1>
          
          <p className="text-purple-800/60 max-w-lg text-sm sm:text-base font-medium leading-relaxed">
            Full-length 3-hour JEE standard simulation exams across Physics, Chemistry, and Mathematics.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <Link 
            to="/subjects" 
            className="group flex items-center gap-4 px-8 py-4 bg-purple-950 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-2xl hover:bg-purple-900 transition-all active:scale-95"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Subjects
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test, index) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white border border-purple-900/10 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <span className={cn(
                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                test.status === 'Available' ? "bg-emerald-50 text-emerald-600" : "bg-orange-50 text-orange-600"
              )}>
                {test.status}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-black text-purple-950 uppercase tracking-tight mb-2">{test.title}</h3>
              <div className="flex items-center gap-4 mb-4">
                 <span className="text-[10px] font-mono text-purple-800/40 font-bold uppercase tracking-widest">{test.duration}</span>
                 <span className="w-1 h-1 rounded-full bg-purple-300" />
                 <span className="text-[10px] font-mono text-purple-800/40 font-bold uppercase tracking-widest">{test.questions} Qs</span>
                 <span className="w-1 h-1 rounded-full bg-purple-300" />
                 <span className="text-[10px] font-mono text-purple-800/40 font-bold uppercase tracking-widest">{test.difficulty}</span>
              </div>
              
              <div className="mb-6 p-4 rounded-xl bg-purple-50/50 border border-purple-100">
                 <h4 className="text-[10px] uppercase tracking-widest font-black text-purple-900/40 mb-2">Syllabus Covered</h4>
                 <p className="text-xs text-purple-800/70 font-medium leading-relaxed">
                   {test.syllabus}
                 </p>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-900/5 mt-auto">
              {test.status === 'Available' ? (
                <Link
                  to={`/quiz/mock-tests/full-syllabus/${test.id}`}
                  className="w-full inline-block text-center py-4 bg-purple-50 text-purple-600 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-colors"
                >
                  Start Simulation
                </Link>
              ) : (
                <div className="flex items-center justify-center gap-2 py-4 bg-gray-50 text-gray-400 font-bold text-[10px] uppercase tracking-widest rounded-xl">
                  <Clock size={14} />
                  Unlocks Soon
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-[2rem] bg-amber-50 border border-amber-500/20 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <div className="w-12 h-12 rounded-full bg-amber-100 flex-shrink-0 flex items-center justify-center text-amber-600">
          <AlertCircle size={24} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-amber-900 uppercase tracking-widest mb-1">Testing Environment</h4>
          <p className="text-xs font-medium text-amber-800/70 leading-relaxed">
            These simulations are designed to exactly replicate the JEE Main environment. Ensure you have 3 uninterrupted hours before starting a test. The timer cannot be paused once initiated.
          </p>
        </div>
      </div>
    </div>
  );
}
