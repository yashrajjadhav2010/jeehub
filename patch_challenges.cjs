const fs = require('fs');
let code = fs.readFileSync('src/pages/Challenges.tsx', 'utf8');

// add Share2 to lucide imports
if (!code.includes("Share2")) {
  code = code.replace(/Copy,\n  Check,\n\} from "lucide-react";/, 'Copy,\n  Check,\n  Share2,\n} from "lucide-react";');
}

const newReferralWidget = `function ReferralWidget() {
  const [copied, setCopied] = useState(false);
  const coins = parseInt(localStorage.getItem('coins') || '0', 10);
  const refCode = localStorage.getItem('referralCode') || '';
  const refLink = \`\${window.location.origin}/?ref=\${refCode}\`;

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join me on JEE Practice Hub',
          text: 'Use my referral link to get 5 free AI request coins!',
          url: refLink,
        });
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-[2rem] p-6 md:p-8 flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-between shadow-xl w-full relative overflow-hidden group">
      <div className="absolute -right-10 -top-10 opacity-[0.05] scale-150 pointer-events-none text-emerald-400 group-hover:scale-110 transition-transform duration-700">
        <Gift size={200} />
      </div>
      <div className="flex items-center gap-4 md:gap-6 flex-1 w-full relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-400/20 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Gift size={28} className="md:w-8 md:h-8" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-lg md:text-xl font-black heading-display text-white uppercase tracking-tight">
            Refer & Earn AI Requests
          </h3>
          <p className="text-emerald-100/70 text-xs sm:text-sm max-w-md font-medium leading-relaxed">
            Out of AI limits? Share your link. Get <span className="text-yellow-400 font-bold">10 coins</span> per friend, they get <span className="text-yellow-400 font-bold">5 coins</span>. Each extra AI request costs 1 coin.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full lg:w-auto">
        <div className="flex items-center gap-3 bg-emerald-950/50 rounded-xl px-4 py-3 border border-emerald-800/50 w-full sm:w-auto shrink-0">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
            <Coins size={18} />
          </div>
          <div>
            <div className="text-[9px] font-black uppercase tracking-widest text-emerald-400/60">Your Balance</div>
            <div className="font-black text-white">{coins} Coins</div>
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto shrink-0">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-none h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          
          {navigator.share && (
            <button
              onClick={handleShare}
              className="flex-1 sm:flex-none h-12 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}`;

const widgetRegex = /function ReferralWidget\(\) \{[\s\S]*?    <\/div>\n  \);\n\}/;
code = code.replace(widgetRegex, newReferralWidget);

fs.writeFileSync('src/pages/Challenges.tsx', code);
console.log('Patched widget');
