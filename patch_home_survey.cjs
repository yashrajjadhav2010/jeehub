const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const surveyModalCode = `
function SurveyModal({ isOpen, onClose, user }: { isOpen: boolean, onClose: () => void, user: any }) {
  const [issues, setIssues] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

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
      onClose();
    } catch (e) {
      console.error("Survey submission failed", e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-emerald-900/40 hover:text-emerald-900">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <h2 className="text-2xl font-black uppercase tracking-tight text-emerald-950 mb-2">Help Us Improve</h2>
        <p className="text-sm font-medium text-emerald-900/60 mb-6">We'd love to hear your feedback to make the platform better for everyone. This survey is a one-time request.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/60 mb-2">Are you facing any issues?</label>
            <textarea
              value={issues}
              onChange={(e) => setIssues(e.target.value)}
              className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-sm font-medium text-emerald-950 focus:outline-none focus:ring-2 focus:ring-primary/20"
              rows={3}
              placeholder="Describe any bugs or problems..."
            />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/60 mb-2">Any suggestions for new features?</label>
            <textarea
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              className="w-full bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-sm font-medium text-emerald-950 focus:outline-none focus:ring-2 focus:ring-primary/20"
              rows={3}
              placeholder="What should we build next?"
            />
          </div>
          <button
            type="submit"
            disabled={submitting || (!issues.trim() && !suggestions.trim())}
            className="w-full py-4 bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-emerald-500 transition-colors disabled:opacity-50 mt-4"
          >
            {submitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
}
`;

code = code.replace(
  /export default function Home\(\) \{/,
  `${surveyModalCode}\nexport default function Home() {`
);

fs.writeFileSync('src/pages/Home.tsx', code);
console.log('Home Survey modal added');
