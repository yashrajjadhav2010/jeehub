import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coins, ShoppingBag, Sparkles, Shield, Palette, Zap, ArrowRight, Check, X, Coffee, Brain, Crown, Code, Star, Fingerprint, Lock, Power } from 'lucide-react';
import { cn } from '../lib/utils';
import { useUser } from '@clerk/clerk-react';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-amber-400/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight + window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Unique Card Backgrounds for different items
const CardSpecialFX = ({ id }: { id: string }) => {
  if (id === 'dark_mode_extreme') {
    return (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2.5rem] bg-black">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-[-100%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnPjxyZWN0IHdpZHRoPSc0JyBoZWlnaHQ9JzQnIGZpbGw9JyNmZmYnIGZpbGwtb3BhY2l0eT0nMC4xJy8+PC9zdmc+')] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
    );
  }

  if (id === 'premium_avatar') {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(245,158,11,0.4)_360deg)]"
        />
      </div>
    );
  }

  if (id === 'ai_mentor') {
    return (
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2.5rem]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyMCcgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-emerald-500/10 blur-xl"
        />
      </div>
    );
  }

  if (id === 'secret_formula_vault') {
    return (
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-[2.5rem]">
        <motion.div
          animate={{ y: [0, -100] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 flex font-mono text-[8px] text-purple-600 font-bold opacity-30 break-all select-none p-4"
        >
          {`∫e^x=e^x F=ma E=mc^2 ∑n=1 ∞ 1/n^2=π^2/6 ∇×B=μ0J+μ0ε0∂E/∂t ∫udv=uv-∫vdu d/dx(sin x)=cos x e^(iπ)+1=0 V=IR P=IV F=G(m1m2)/r^2 c^2=a^2+b^2`}
        </motion.div>
      </div>
    );
  }

  return null;
};

export default function RewardStore() {
  const [coins, setCoins] = useState(0);
  const [ownedItems, setOwnedItems] = useState<string[]>([]);
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const { user } = useUser();
  
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'yashrajjadhav2010@gmail.com';

  useEffect(() => {
    const storedCoins = parseInt(localStorage.getItem('coins') || '0', 10);
    setCoins(storedCoins);

    try {
      const owned = JSON.parse(localStorage.getItem('owned_rewards') || '[]');
      setOwnedItems(owned);
      const active = JSON.parse(localStorage.getItem('active_rewards') || '[]');
      setActiveItems(active);
    } catch (e) {
      console.error('Failed to parse rewards', e);
    }
  }, []);

  const rewards = [
    {
      id: 'premium_avatar',
      title: 'Holo-Ring Avatar',
      description: 'A glowing holographic border for your profile picture across the platform.',
      price: 150,
      icon: Crown,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      gradient: 'from-amber-400 to-yellow-600',
      activeColor: 'bg-amber-500'
    },
    {
      id: 'dark_mode_extreme',
      title: 'Midnight Stealth Theme',
      description: 'Unlock an exclusive pitch-black UI theme designed for late-night grinding sessions.',
      price: 250,
      icon: Palette,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      gradient: 'from-indigo-400 to-purple-600',
      activeColor: 'bg-indigo-500'
    },
    {
      id: 'ai_mentor',
      title: '1-on-1 AI Mentor',
      description: '30 minutes of priority access to an advanced AI mentor for personalized strategy.',
      price: 500,
      icon: Brain,
      color: 'text-primary',
      bg: 'bg-primary/10',
      border: 'border-primary/20',
      gradient: 'from-emerald-400 to-teal-600',
      activeColor: 'bg-emerald-500'
    },
    {
      id: 'focus_shield',
      title: 'Ad-Free Focus Mode',
      description: 'Permanent removal of all motivational banners and pop-ups for pure deep work.',
      price: 300,
      icon: Shield,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      gradient: 'from-emerald-400 to-primary',
      activeColor: 'bg-emerald-500'
    },
    {
      id: 'secret_formula_vault',
      title: 'Secret Formula Vault',
      description: 'Unlock a hidden archive of advanced shortcuts and derivation cheat sheets.',
      price: 200,
      icon: Code,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      gradient: 'from-purple-400 to-pink-600',
      activeColor: 'bg-purple-500'
    },
    {
      id: 'coffee_boost',
      title: 'Virtual Espresso',
      description: 'Send a virtual coffee to the developers and get a special contributor badge.',
      price: 50,
      icon: Coffee,
      color: 'text-orange-500',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      gradient: 'from-orange-400 to-red-500',
      activeColor: 'bg-orange-500'
    }
  ];

  const handleRedeem = () => {
    if (!selectedItem) return;

    if (coins >= selectedItem.price || isAdmin) {
      if (!isAdmin) {
        const newCoins = coins - selectedItem.price;
        setCoins(newCoins);
        localStorage.setItem('coins', newCoins.toString());
      }

      const newOwned = [...ownedItems, selectedItem.id];
      const newActive = [...activeItems, selectedItem.id];
      
      setOwnedItems(newOwned);
      setActiveItems(newActive);
      
      localStorage.setItem('owned_rewards', JSON.stringify(newOwned));
      localStorage.setItem('active_rewards', JSON.stringify(newActive));
      
      window.dispatchEvent(new Event('rewards_updated'));
      setSelectedItem(null);
    }
  };

  const handleToggleActive = (id: string) => {
    let newActive;
    if (activeItems.includes(id)) {
      newActive = activeItems.filter(item => item !== id);
    } else {
      newActive = [...activeItems, id];
    }
    setActiveItems(newActive);
    localStorage.setItem('active_rewards', JSON.stringify(newActive));
    window.dispatchEvent(new Event('rewards_updated'));
  };

  return (
    <div className="min-h-screen pb-20 pt-10 relative bg-[#fbfdfb] overflow-hidden">
      <FloatingParticles />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 space-y-12 relative z-10">
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20"
            >
              <ShoppingBag size={14} className="text-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-700">Tapasya Store</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black heading-display tracking-tight text-emerald-950 uppercase italic"
            >
              Reward <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 not-italic">Center</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-emerald-900/60 font-medium max-w-xl text-lg"
            >
              Exchange your hard-earned Tapasya Coins for exclusive platform upgrades, themes, and power-ups.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 bg-white p-5 rounded-[2rem] border-2 border-emerald-50 shadow-2xl shadow-emerald-900/5 shrink-0"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 relative overflow-hidden group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-amber-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <Coins size={28} className="text-amber-500 relative z-10" />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-900/40 uppercase tracking-widest">Balance</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-emerald-950 tracking-tight">{isAdmin ? '∞' : coins}</span>
                <span className="text-sm font-bold text-emerald-900/40">TC</span>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward, idx) => {
            const isOwned = isAdmin || ownedItems.includes(reward.id);
            const isActive = activeItems.includes(reward.id);
            const canAfford = isAdmin || coins >= reward.price;

            return (
              <motion.div
                key={reward.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={cn(
                  "relative group overflow-hidden bg-white rounded-[2.5rem] border-2 transition-all duration-500 flex flex-col",
                  isOwned && isActive
                    ? `border-${reward.id === 'dark_mode_extreme' ? 'slate' : 'emerald'}-500/30 shadow-2xl shadow-${reward.id === 'dark_mode_extreme' ? 'slate' : 'emerald'}-500/10` 
                    : "border-emerald-50 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-500/10"
                )}
              >
                {isActive && <CardSpecialFX id={reward.id} />}
                <div className={cn("absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br z-0 pointer-events-none", reward.gradient)} />

                {isOwned && (
                  <div className={cn("absolute top-5 right-5 z-20 flex items-center gap-1.5 px-4 py-2 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl transition-colors", isActive ? reward.activeColor : 'bg-emerald-900/20 text-emerald-900')}>
                    {isAdmin ? <Star size={12} className="fill-current" /> : <Check size={12} />}
                    {isAdmin ? 'Admin Unlocked' : 'Owned'}
                  </div>
                )}
                
                <div className="p-8 space-y-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-center justify-between">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner border-2", reward.bg, reward.color, reward.border, isActive && reward.id === 'dark_mode_extreme' ? 'bg-black/50 border-white/10 text-white' : '')}>
                      <reward.icon size={32} />
                    </div>
                    {!isOwned && (
                      <div className="flex items-center gap-1.5 px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100 shadow-sm backdrop-blur-md">
                        <Coins size={16} className="text-amber-500" />
                        <span className="text-base font-black text-emerald-950">{reward.price}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className={cn("text-2xl font-black uppercase italic tracking-tight transition-colors", isActive && reward.id === 'dark_mode_extreme' ? 'text-white' : 'text-emerald-950')}>{reward.title}</h3>
                    <p className={cn("text-base leading-relaxed font-medium transition-colors", isActive && reward.id === 'dark_mode_extreme' ? 'text-slate-300' : 'text-emerald-900/60')}>{reward.description}</p>
                  </div>
                  
                  {!isOwned ? (
                    <button
                      onClick={() => setSelectedItem(reward)}
                      disabled={!canAfford}
                      className={cn(
                        "w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 z-10",
                        canAfford 
                          ? "bg-emerald-950 text-white hover:bg-emerald-900 active:scale-95 shadow-xl shadow-emerald-900/10 group-hover:shadow-emerald-900/20"
                          : "bg-emerald-50 text-emerald-900/40 cursor-not-allowed"
                      )}
                    >
                      {canAfford ? (
                        <>
                          <Sparkles size={16} />
                          Redeem Upgrade
                        </>
                      ) : (
                        <>
                          <Lock size={16} />
                          Insufficient Coins
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleToggleActive(reward.id)}
                      className={cn(
                        "w-full py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 z-10 border-2",
                        isActive 
                          ? "bg-emerald-50/50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                          : "bg-emerald-950 text-white hover:bg-emerald-900 active:scale-95 shadow-xl shadow-emerald-900/10 group-hover:shadow-emerald-900/20"
                      )}
                    >
                      <Power size={16} />
                      {isActive ? 'Deactivate' : 'Activate'}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-emerald-950/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white rounded-[3rem] p-10 shadow-2xl border border-emerald-50 overflow-hidden"
            >
              <div className={cn("absolute -top-32 -right-32 w-64 h-64 rounded-full blur-[80px] opacity-30 bg-gradient-to-br", selectedItem.gradient)} />

              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100 transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center space-y-8 relative z-10">
                <div className={cn("w-24 h-24 rounded-[2rem] flex items-center justify-center border-4 shadow-inner", selectedItem.bg, selectedItem.color, selectedItem.border)}>
                  <selectedItem.icon size={48} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-black text-emerald-950 uppercase italic tracking-tight leading-tight">{selectedItem.title}</h3>
                  <p className="text-emerald-900/60 font-medium text-lg">Are you sure you want to redeem this item?</p>
                </div>
                
                <div className="w-full flex items-center justify-between px-8 py-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-1">Balance</span>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black text-emerald-950">{isAdmin ? '∞' : coins}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-emerald-300" size={20} />
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-600/60 mb-1">Cost</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="text-2xl font-black">{isAdmin ? '0' : `-${selectedItem.price}`}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-emerald-300" size={20} />
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-1">Remaining</span>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black text-emerald-950">{isAdmin ? '∞' : coins - selectedItem.price}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full flex gap-4">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="flex-1 py-4 rounded-2xl bg-emerald-50 text-emerald-700 font-black text-xs uppercase tracking-widest hover:bg-emerald-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleRedeem}
                    className="flex-1 py-4 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-primary/20 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Sparkles size={16} />
                    Confirm
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
