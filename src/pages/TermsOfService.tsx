import { motion } from 'motion/react';
import { Gavel, Scale, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsOfService() {
  const terms = [
    {
      title: 'Operator Licensing',
      icon: Scale,
      content: 'By accessing JEE TAPASYA, you are granted a non-exclusive license to use the training terminal for educational purposes. Commercial redistribution of the system components is strictly prohibited.'
    },
    {
      title: 'Operational Conduct',
      icon: CheckCircle,
      content: 'Operators are expected to utilize the terminal for authentic skill development. Any attempt to exploit system vulnerabilities or manipulate ranking algorithms is a violation of training protocol.'
    },
    {
      title: 'Disclaimer of Intel',
      icon: AlertCircle,
      content: 'While we strive for 100% accuracy in our module content, the terminal reports "as-is". Operators should cross-reference conceptual outcomes with standard JEE reference materials.'
    },
    {
      title: 'System Modifications',
      icon: Gavel,
      content: 'JEE TAPASYA Command reserves the right to modify system parameters, update module sets, and adjust operational thresholds without prior notice to ensure optimal training performance.'
    },
    {
      title: 'AI Usage & New Features',
      icon: CheckCircle,
      content: 'The terminal now includes integrated AI logic flows (Axiom Live Engine) and advanced UI alignments simulating main test events. Engagement with AI analysis is subject to defined daily quotas (10 per operator terminal). Any circumvention of these limitations via automated scripts or network tunneling constitutes a breach of protocol.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 mt-10">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 text-white rounded-full">
          <Gavel size={14} className="text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest">Protocol Agreement 2.0</span>
        </div>
        <h1 className="text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Terms of <span className="text-primary not-italic">Service</span>
        </h1>
        <p className="text-emerald-900/40 font-medium max-w-xl mx-auto">
          The legal framework governing the interaction between operators and the JEE TAPASYA network.
        </p>
      </section>

      <div className="grid gap-6">
        {terms.map((term, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-3xl border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
              <term.icon size={24} />
            </div>
            <h3 className="text-xl font-black text-emerald-950 uppercase italic tracking-tight">{term.title}</h3>
            <p className="text-emerald-900/60 leading-relaxed font-medium">
              {term.content}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs font-black text-emerald-900/20 uppercase tracking-widest">
          © 2026 JEE TAPASYA Command • All Protocols Enforced
        </p>
      </div>
    </div>
  );
}
