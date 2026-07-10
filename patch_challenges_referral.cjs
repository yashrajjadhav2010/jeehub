const fs = require('fs');
let code = fs.readFileSync('src/pages/Challenges.tsx', 'utf8');

const widgetCode = `
function ReferralWidget() {
  const [copied, setCopied] = useState(false);
  const coins = parseInt(localStorage.getItem('coins') || '0', 10);
  const refCode = localStorage.getItem('referralCode') || '';
  const refLink = \`\${window.location.origin}/?ref=\${refCode}\`;

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between shadow-xl w-full relative overflow-hidden group">
      <div className="absolute -right-10 -top-10 opacity-[0.05] scale-150 pointer-events-none text-primary group-hover:scale-110 transition-transform duration-700">
        <Gift size={200} />
      </div>

      <div className="flex items-center gap-4 md:gap-6 flex-1 w-full relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/20 border border-primary/30 text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Gift size={28} className="md:w-8 md:h-8" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg md:text-xl font-black heading-display text-white uppercase tracking-tight">
            Refer & Earn AI Requests
          </h3>
          <p className="text-emerald-100/70 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
            Out of AI limits? Share your link. Get <span className="text-primary font-bold">10 coins</span> per friend, they get <span className="text-primary font-bold">5 coins</span>. Each extra AI request costs 1 coin.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
        <div className="flex items-center gap-3 bg-emerald-950/50 rounded-xl px-4 py-3 border border-emerald-800/50 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
            <Coins size={18} />
          </div>
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400/60">Your Balance</div>
            <div className="font-black text-white">{coins} Coins</div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-6 py-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? 'Copied Link!' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
`;

code = code.replace(/export default function Challenges/, widgetCode + '\nexport default function Challenges');

code = code.replace(
  /<WeeklyGoalWidget stats=\{stats\} setStats=\{setStats\} \/>\n        <PomodoroWidget \/>\n      <\/div>/,
  '<WeeklyGoalWidget stats={stats} setStats={setStats} />\n        <PomodoroWidget />\n      </div>\n      <ReferralWidget />'
);

fs.writeFileSync('src/pages/Challenges.tsx', code);
console.log('Challenges referral widget patched');
