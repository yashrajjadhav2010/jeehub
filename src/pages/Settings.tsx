import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { User, Shield, Bell, Trash2, Save, CheckCircle2, AlertTriangle, Camera, Trophy, Target } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prefs, setPrefs] = useState({
    timeWarnings: true,
    soundEffects: false,
    autoFullscreen: true,
    darkMode: false
  });
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedName = localStorage.getItem('operatorName') || '';
    const savedPfp = localStorage.getItem('operatorPfp') || null;
    const stats = JSON.parse(localStorage.getItem('userStats') || '{}');
    const savedPrefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
    setName(savedName);
    setProfilePic(savedPfp);
    setStreak(stats.streak || 0);
    const mergedPrefs = { ...prefs, ...savedPrefs };
    setPrefs(mergedPrefs);
    if (mergedPrefs.darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem('operatorName', name.trim());
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      window.dispatchEvent(new Event('storage'));
    }
  };

  const handlePfpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        localStorage.setItem('operatorPfp', base64String);
        window.dispatchEvent(new Event('storage'));
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePref = (key: keyof typeof prefs) => {
    const newPrefs = { ...prefs, [key]: !prefs[key] };
    setPrefs(newPrefs);
    localStorage.setItem('systemPrefs', JSON.stringify(newPrefs));
    if (key === 'darkMode') {
      if (newPrefs.darkMode) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
    }
    window.dispatchEvent(new Event('storage'));
  };

  const clearHistory = () => {
    if (window.confirm('CRITICAL: This will purge all mission data and performance metrics. Proceed?')) {
      localStorage.clear();
      window.location.href = '/';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <section className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Terminal <span className="text-primary not-italic">Settings</span>
        </h1>
        <p className="text-emerald-900/40 font-medium text-sm sm:text-base">Configure your operational environment and identity protocols.</p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Identity Section */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary relative overflow-hidden cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                {profilePic ? (
                  <>
                    <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={20} className="text-white" />
                    </div>
                  </>
                ) : (
                  <>
                    <User size={28} />
                    <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={20} className="text-white" />
                    </div>
                  </>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handlePfpChange} 
                accept="image/*" 
                className="hidden" 
              />
              <div>
                <h3 className="text-lg font-black text-emerald-950 uppercase italic tracking-tight">Identity Protocol</h3>
                <p className="text-[10px] text-emerald-900/40 font-black uppercase tracking-widest">Update your operator handle & photo</p>
              </div>
            </div>

            <div className="space-y-4">
               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 px-2">Operational Name</label>
                 <input 
                   type="text" 
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="w-full px-6 py-4 bg-emerald-50 rounded-2xl border-2 border-emerald-50 focus:border-primary focus:bg-white outline-none transition-all font-bold text-emerald-950 placeholder:text-emerald-900/20"
                 />
               </div>
               
               <button 
                onClick={handleSaveName}
                className={cn(
                  "w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl",
                  success 
                    ? "bg-emerald-500 text-white shadow-emerald-500/20" 
                    : "bg-primary text-white shadow-primary/20 hover:scale-[1.02]"
                )}
               >
                 {success ? <CheckCircle2 size={18} /> : <Save size={18} />}
                 {success ? 'IDENTITY UPDATED' : 'SAVE CHANGES'}
               </button>
            </div>
          </div>

          {/* Earned Badges */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900/40">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-emerald-950 uppercase italic tracking-tight">Earned Badges</h3>
                <p className="text-[10px] text-emerald-900/40 font-black uppercase tracking-widest">Your milestone achievements</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Day Streak Badges */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">Consistency (Day Streak)</h4>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", streak >= 5 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                    <img src="https://i.ibb.co/rf2bDs03/day5.png" alt="5 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">5 Day<br/>Streak</span>
                  </div>
                  <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", streak >= 10 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                    <img src="https://i.ibb.co/KjNrCF0Q/day10.png" alt="10 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">10 Day<br/>Streak</span>
                  </div>
                  <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", streak >= 20 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                    <img src="https://i.ibb.co/d0pwjqRw/day25.png" alt="20 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">20 Day<br/>Streak</span>
                  </div>
                  <div className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0", streak >= 25 ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                    <img src="https://i.ibb.co/d0pwjqRw/day25.png" alt="25 Day Streak" className="w-16 h-16 object-contain drop-shadow-xl" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">25 Day<br/>Streak</span>
                  </div>
                </div>
              </div>

              {/* Questions Solved Badges */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">Endurance (Missions Cleared)</h4>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {[50, 100, 300, 500, 1000].map(req => {
                    const achieved = (JSON.parse(localStorage.getItem('userStats') || '{}').totalSolved || 0) >= req;
                    const getBadgeInfo = (req: number) => {
                       switch(req) {
                          case 50: return { img: 'https://i.ibb.co/7d9yGDc8/50.png', name: 'Tapasya Starter' };
                          case 100: return { img: 'https://i.ibb.co/My6jJ607/100.png', name: 'Tapasya Warrior' };
                          case 300: return { img: 'https://i.ibb.co/vvK33M3Q/300.png', name: 'Problem Crusher' };
                          case 500: return { img: 'https://i.ibb.co/m5VHGh7J/Chat-GPT-Image-Jun-6-2026-01-37-44-PM.png', name: 'Tapasya Master' };
                          case 1000: return { img: 'https://i.ibb.co/qLSYXW1t/file-00000000c88472078520c8a8552cfb9f.png', name: 'Tapasya Grandmaster' };
                          default: return { img: '', name: '' };
                       }
                    };
                    const badge = getBadgeInfo(req);
                    return (
                      <div key={req} className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden", achieved ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                        {achieved && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />}
                        <img src={badge.img} alt={badge.name} className="w-16 h-16 object-contain drop-shadow-xl" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">{badge.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Accuracy Badges */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">Precision (Accuracy)</h4>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                  {[80, 90, 95].map(req => {
                    const stats = JSON.parse(localStorage.getItem('userStats') || '{}');
                    const acc = stats.totalSolved > 0 ? (stats.correctAnswers / stats.totalSolved) * 100 : 0;
                    const achieved = acc >= req && stats.totalSolved >= 10; // Need at least 10 solved to get accuracy badges
                    return (
                      <div key={req} className={cn("min-w-[120px] snap-center flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden", achieved ? "bg-emerald-50 border-emerald-200" : "bg-white border-emerald-50 opacity-40 grayscale")}>
                        {achieved && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />}
                        <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2", achieved ? "bg-emerald-500 text-white border-white" : "bg-emerald-100 text-emerald-300 border-transparent")}>
                           <CheckCircle2 size={24} />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">&ge;{req}%<br/>Accuracy</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900/40">
                <Bell size={24} />
              </div>
              <h3 className="text-lg font-black text-emerald-950 uppercase italic tracking-tight">System Alerts</h3>
            </div>
            
            <div className="space-y-3">
              {[
                { id: 'darkMode', label: 'Dark Mode (Experimental)' },
                { id: 'timeWarnings', label: 'Time-limit Warnings' },
                { id: 'soundEffects', label: 'Sound Effects (Beta)' },
                { id: 'autoFullscreen', label: 'Auto-fullscreen on Quiz' },
              ].map((pref) => {
                const isEnabled = prefs[pref.id as keyof typeof prefs];
                return (
                  <div 
                    key={pref.id} 
                    onClick={() => togglePref(pref.id as keyof typeof prefs)}
                    className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl border border-emerald-50 cursor-pointer hover:bg-emerald-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-emerald-900/70">{pref.label}</span>
                    <div className={cn(
                      "w-12 h-6 rounded-full relative transition-colors",
                      isEnabled ? "bg-primary" : "bg-emerald-100"
                    )}>
                      <div className={cn(
                        "absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all",
                        isEnabled ? "left-7" : "left-1"
                      )} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Danger Zone */}
          <div className="bg-red-50 p-8 rounded-[2.5rem] border-2 border-red-100 space-y-6">
            <div className="flex items-center gap-4 text-red-600">
              <Shield size={24} />
              <h3 className="text-lg font-black uppercase italic tracking-tight">Security</h3>
            </div>
            <p className="text-xs font-medium text-red-900/40 leading-relaxed uppercase tracking-wider">
              Management of sensitive terminal data and local storage overrides.
            </p>
            <button 
              onClick={clearHistory}
              className="w-full py-4 bg-white border-2 border-red-100 text-red-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <Trash2 size={16} />
              Purge All Data
            </button>
          </div>

          <div className="p-8 bg-emerald-950 rounded-[2.5rem] text-white flex flex-col items-center text-center space-y-4">
             <AlertTriangle className="text-primary animate-pulse" size={32} />
             <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">System Status</p>
             <p className="text-xs font-medium text-emerald-100/50 leading-relaxed">
               Terminal v1.4.2 stable. All subsystems operational. Local encryption active. 
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
