const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newSurveyModal = `function SurveyModal({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: any }) {
  const [issues, setIssues] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user.id) return;
    setSubmitting(true);
    try {
      await setDoc(doc(db, 'surveys', user.id), {
        userId: user.id,
        email: user.primaryEmailAddress?.emailAddress || '',
        name: user.fullName || '',
        issues,
        suggestions,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (e) {
      console.error("Survey submission failed", e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-emerald-950/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-xl mx-auto my-8 bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Top decorative banner */}
            <div className="h-32 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-700 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 flex items-center justify-center shadow-xl">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Close button */}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 text-white rounded-full backdrop-blur-sm transition-colors z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="p-6 sm:p-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-emerald-950 mb-3">Help Us Improve</h2>
                <p className="text-sm font-medium text-emerald-800/60 leading-relaxed max-w-sm mx-auto">
                  We're building this for you. Tell us what's broken or what you'd love to see next.
                </p>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 space-y-4"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-emerald-950">Thank You!</h3>
                  <p className="text-sm text-emerald-800/60 text-center font-medium">Your feedback is incredibly valuable to us.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/60 group-focus-within:text-emerald-600 transition-colors">
                      <TriangleAlert className="w-3.5 h-3.5" />
                      Facing any issues?
                    </label>
                    <textarea
                      value={issues}
                      onChange={(e) => setIssues(e.target.value)}
                      className="w-full bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 text-sm font-medium text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/30 focus:bg-white transition-all resize-none shadow-sm"
                      rows={3}
                      placeholder="Describe any bugs, lag, or problems..."
                    />
                  </div>
                  
                  <div className="space-y-2 group">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-900/60 group-focus-within:text-primary transition-colors">
                      <Sparkles className="w-3.5 h-3.5" />
                      Feature Suggestions
                    </label>
                    <textarea
                      value={suggestions}
                      onChange={(e) => setSuggestions(e.target.value)}
                      className="w-full bg-orange-50/30 border border-orange-100/50 rounded-2xl p-4 text-sm font-medium text-emerald-950 placeholder:text-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:bg-white transition-all resize-none shadow-sm"
                      rows={3}
                      placeholder="What should we build next to help your prep?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || (!issues.trim() && !suggestions.trim())}
                    className="w-full py-4 sm:py-5 bg-emerald-950 text-white rounded-2xl text-xs sm:text-sm font-black uppercase tracking-widest hover:bg-emerald-900 hover:shadow-xl hover:shadow-emerald-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none mt-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        'Send Feedback'
                      )}
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}`;

const oldSurveyModalRegex = /function SurveyModal\(\{ isOpen, onClose, user \}: \{ isOpen: boolean, onClose: \(\) => void, user: any \}\) \{[\s\S]*?\}\n\nexport default function Home/m;
code = code.replace(oldSurveyModalRegex, newSurveyModal + '\n\nexport default function Home');

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Survey modal styling patched');
