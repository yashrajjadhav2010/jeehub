import { motion } from 'motion/react';
import { Gavel, Scale, AlertCircle, CheckCircle, UserCheck, ShieldAlert, Eye } from 'lucide-react';

export default function TermsOfService() {
  const terms = [
    {
      title: 'Account Registration',
      icon: UserCheck,
      content: 'By creating an account on JEE TAPASYA, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials (managed via Clerk) and for all activities that occur under your account.'
    },
    {
      title: 'Educational Use License',
      icon: Scale,
      content: 'We grant you a personal, non-exclusive, non-transferable license to access and use our platform for educational preparation. Commercial redistribution, scraping, or automated extraction of our question banks and study materials is strictly prohibited.'
    },
    {
      title: 'Platform Analytics & Monitoring',
      icon: Eye,
      content: 'You acknowledge that your platform usage, including time spent, test scores, error patterns, and learning streaks, is monitored and recorded. This data is visible to platform administrators to maintain quality of service, analyze educational outcomes, and provide personalized support.'
    },
    {
      title: 'Code of Conduct',
      icon: CheckCircle,
      content: 'Operators are expected to utilize the terminal for authentic skill development. Any attempt to exploit system vulnerabilities, manipulate ranking/XP algorithms, or disrupt the service for other users will result in immediate account termination.'
    },
    {
      title: 'Disclaimer of Warranties',
      icon: AlertCircle,
      content: 'While we strive for accuracy in our educational content, the platform is provided "as-is" without warranties of any kind. We do not guarantee specific outcomes or ranks in actual examinations. Users should cross-reference concepts with standard reference materials.'
    },
    {
      title: 'System Modifications & AI Quotas',
      icon: ShieldAlert,
      content: 'We reserve the right to modify system parameters, update content, or limit access to specific features (such as AI usage quotas via the Axiom Engine) without prior notice to ensure optimal platform performance and sustainability.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 mt-10 px-4 sm:px-6">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 text-white rounded-full">
          <Gavel size={14} className="text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest">Terms & Conditions 2.0</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Terms of <span className="text-primary not-italic">Service</span>
        </h1>
        <p className="text-emerald-900/60 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          The legal framework governing your access to and use of the JEE TAPASYA educational platform.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {terms.map((term, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-6 sm:p-8 bg-white rounded-3xl border border-emerald-100/50 shadow-xl shadow-emerald-900/5 flex flex-col items-center text-center space-y-4 hover:border-primary/30 transition-colors"
          >
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-primary shadow-sm">
              <term.icon size={26} strokeWidth={2.5} />
            </div>
            <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight">{term.title}</h3>
            <p className="text-emerald-900/70 leading-relaxed font-medium text-sm">
              {term.content}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center pt-8 border-t border-emerald-100/50">
        <p className="text-xs font-black text-emerald-900/40 uppercase tracking-widest">
          © {new Date().getFullYear()} JEE TAPASYA Platform • All Rights Reserved
        </p>
      </div>
    </div>
  );
}
