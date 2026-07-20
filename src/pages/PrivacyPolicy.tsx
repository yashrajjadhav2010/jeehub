import { motion } from 'motion/react';
import { Shield, Eye, Lock, Server, FileText, UserCog, Activity, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  const policies = [
    {
      title: 'Information We Collect',
      icon: Eye,
      content: 'When you register for an account using our secure authentication provider (Clerk), we collect essential profile information including your name, email address, and authentication identifiers. This enables secure access across devices and personalized learning experiences.'
    },
    {
      title: 'Performance & Analytics Data',
      icon: Activity,
      content: 'To provide a tailored educational experience, we track your interaction with the platform. This includes test scores, experience points (XP), learning streaks, correct/incorrect answer logs (Error Book), and overall time spent on learning modules. This data powers your progress dashboard and helps us improve our content.'
    },
    {
      title: 'Administrative Operations',
      icon: UserCog,
      content: 'For platform maintenance and quality assurance, authorized administrators have access to aggregated and individual user metrics. This includes your profile data, activity logs (last active timestamp), and performance statistics (scores, errors, time spent). This visibility allows our support team to troubleshoot issues and optimize the learning ecosystem.'
    },
    {
      title: 'Data Security Protocols',
      icon: Lock,
      content: 'Your data is secured using industry-standard encryption protocols. We partner with enterprise-grade authentication services (Clerk) and cloud infrastructure (Firebase) to ensure your personal and performance data is protected against unauthorized access.'
    },
    {
      title: 'Third-Party Services',
      icon: Server,
      content: 'We integrate with trusted third-party services for core functionality, such as Clerk for authentication and Firebase for database operations. We do not sell, rent, or trade your personal information to external marketers or data brokers.'
    },
    {
      title: 'AI Intelligence & Features',
      icon: Clock,
      content: 'Features utilizing the Axiom Live Engine process your queries to provide intelligent insights. This data is processed securely and is not utilized to train external public models. Your interactions remain confined to enhancing your personal learning journey.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 mt-10 px-4 sm:px-6">
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <FileText size={14} className="text-primary" />
          <span className="text-[10px] font-black uppercase tracking-widest text-primary">Compliance Protocol 2.0</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Privacy <span className="text-primary not-italic">Policy</span>
        </h1>
        <p className="text-emerald-900/60 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          We are committed to maintaining the trust and confidence of our users. This policy outlines how we collect, use, and protect your personal and performance data.
        </p>
      </section>

      <div className="space-y-6">
        {policies.map((policy, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 sm:p-8 bg-white rounded-[2rem] border border-emerald-100/50 shadow-xl shadow-emerald-900/5 flex flex-col sm:flex-row items-start gap-6"
          >
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-primary shadow-sm border border-emerald-100/50">
              <policy.icon size={26} strokeWidth={2.5} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-black text-emerald-950 uppercase tracking-tight">{policy.title}</h3>
              <p className="text-emerald-900/70 leading-relaxed font-medium text-sm sm:text-base">
                {policy.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="p-8 sm:p-10 border-2 border-dashed border-emerald-100 rounded-[2.5rem] text-center space-y-4 bg-emerald-50/30">
        <p className="text-emerald-900/40 font-bold text-[10px] uppercase tracking-[0.3em]">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        <p className="text-sm font-medium text-emerald-900/70 max-w-lg mx-auto">
          For detailed inquiries regarding data handling, account deletion, or our privacy practices, please contact our Data Protection Officer at <span className="text-primary font-black block mt-2 sm:inline sm:mt-0">yashrajart1999@gmail.com</span>
        </p>
      </section>
    </div>
  );
}
