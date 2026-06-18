import { motion } from 'motion/react';
import { Shield, Eye, Lock, Server, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const policies = [
    {
      title: 'Data Collection',
      icon: Eye,
      content: 'JEE TAPASYA operates primarily as a client-side terminal. Most of your training data, including session scores and progress, is stored locally in your browser storage. We do not track personal identity unless explicitly provided for system synchronization.'
    },
    {
      title: 'Security Protocols',
      icon: Lock,
      content: 'Your data is secured using standard encryption protocols. We prioritize the integrity of your learning metrics and ensure that your performance history remains private to your operator account.'
    },
    {
      title: 'Third-Party Interlink',
      icon: Server,
      content: 'We do not sell or trade your data to external entities. Any third-party connections are strictly for core system functionality, such as font rendering or MathJax processing.'
    },
    {
      title: 'Consent',
      icon: Shield,
      content: 'By operating the JEE TAPASYA terminal, you consent to our localized data persistence protocols. You may purge your system history at any time via the Settings terminal.'
    },
    {
      title: 'AI Intelligence & Features',
      icon: Eye,
      content: 'New updates feature the Axiom Live Engine to analyze and provide step-by-step solutions to problems. Query data sent to the AI processing layer is utilized solely to return intelligent insights and is not stored or shared for external model training. Our platform continually adds new features designed to provide a targeted JEE experience while upholding data integrity.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 mt-10">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <FileText size={14} className="text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Compliance Protocol 1.1</span>
        </div>
        <h1 className="text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Privacy <span className="text-primary not-italic">Policy</span>
        </h1>
        <p className="text-emerald-900/40 font-medium max-w-xl mx-auto">
          Ensuring operational secrecy and data integrity for all operators within the JEE TAPASYA network.
        </p>
      </section>

      <div className="space-y-6">
        {policies.map((policy, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-[2rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 flex items-start gap-8"
          >
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-primary">
              <policy.icon size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-emerald-950 uppercase italic tracking-tight">{policy.title}</h3>
              <p className="text-emerald-900/60 leading-relaxed font-medium">
                {policy.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="p-10 border-2 border-dashed border-emerald-100 rounded-[2.5rem] text-center space-y-4">
        <p className="text-emerald-900/40 font-bold text-[10px] uppercase tracking-[0.3em]">Last Updated: May 2026</p>
        <p className="text-sm font-medium text-emerald-900/60">
          For detailed inquiries regarding data handling, please contact our Compliance Officer at <span className="text-primary font-black">yaashh.tech@gmaiil.com</span>
        </p>
      </section>
    </div>
  );
}
