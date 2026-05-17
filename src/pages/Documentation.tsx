import { motion } from 'motion/react';
import { Book, Code, Zap, Target, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  const sections = [
    {
      title: 'Getting Started',
      icon: Zap,
      content: 'JEE TAPASYA is a high-performance training terminal designed for JEE Advanced aspirants. Our modular system allows you to tackle specific chapters with precision-guided micro-tests.'
    },
    {
      title: 'Practice Modules',
      icon: BookOpen,
      content: 'Navigate to the Subjects to select your subject. Each subject is divided into key chapters (Modules). Select a chapter to see available practice sets filtered by difficulty level.'
    },
    {
      title: 'Performance Radar',
      icon: Target,
      content: 'Our Radar system tracks your accuracy and session speed. Data is persisted locally to ensure your training metrics are always available, providing deep insights into your learning trajectory.'
    },
    {
      title: 'Question Quality',
      icon: ShieldCheck,
      content: 'All questions are curated to match the rigor of JEE Advanced. Each question includes a detailed explanation to ensure conceptual clarity after every attempt.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 mt-10">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <Code size={14} className="text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">System Manual v1.0</span>
        </div>
        <h1 className="text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Operator <span className="text-primary not-italic">Documentation</span>
        </h1>
        <p className="text-emerald-900/40 font-medium max-w-xl mx-auto">
          Operational guide for the JEE TAPASYA training environment. Standardized procedures for maximum efficiency.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-3xl border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-4"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary">
              <section.icon size={24} />
            </div>
            <h3 className="text-xl font-black text-emerald-950 uppercase italic tracking-tight">{section.title}</h3>
            <p className="text-emerald-900/60 leading-relaxed font-medium">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>

      <section className="p-10 bg-emerald-950 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/20 transition-all" />
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Need more intel?</h2>
          <p className="text-emerald-100/50 max-w-md font-medium">
            If you encounter any anomalies in the testing environment or have feature requests, signal the command center.
          </p>
          <div className="flex gap-4">
            <a 
              href="mailto:yaashh.tech@gmaiil.com"
              className="px-6 py-3 bg-primary text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Contact Command
            </a>
            <Link 
              to="/subjects"
              className="px-6 py-3 bg-white/10 text-white font-black text-xs uppercase tracking-widest rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
            >
              Back to Subjects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
