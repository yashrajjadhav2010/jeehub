import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Shield, Bell, Trash2, Save, CheckCircle2, AlertTriangle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);
  const [prefs, setPrefs] = useState({
    timeWarnings: true,
    soundEffects: false,
    autoFullscreen: true
  });

  useEffect(() => {
    const savedName = localStorage.getItem('operatorName') || '';
    const savedPrefs = JSON.parse(localStorage.getItem('systemPrefs') || '{}');
    setName(savedName);
    setPrefs(prev => ({ ...prev, ...savedPrefs }));
  }, []);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem('operatorName', name.trim());
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      window.dispatchEvent(new Event('storage'));
    }
  };

  const togglePref = (key: keyof typeof prefs) => {
    const newPrefs = { ...prefs, [key]: !prefs[key] };
    setPrefs(newPrefs);
    localStorage.setItem('systemPrefs', JSON.stringify(newPrefs));
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
      <section>
        <h1 className="text-4xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Terminal <span className="text-primary not-italic">Settings</span>
        </h1>
        <p className="text-emerald-900/40 font-medium">Configure your operational environment and identity protocols.</p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Identity Section */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <User size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-emerald-950 uppercase italic tracking-tight">Identity Protocol</h3>
                <p className="text-[10px] text-emerald-900/40 font-black uppercase tracking-widest">Update your operator handle</p>
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
