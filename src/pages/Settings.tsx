import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  User,
  Shield,
  Bell,
  Trash2,
  Save,
  CheckCircle2,
  AlertTriangle,
  Camera,
  Trophy,
  Target,
  Flame,
  Sword,
  Crown,
  Medal,
  Award,
} from "lucide-react";
import { cn } from "../lib/utils";

export default function Settings() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prefs, setPrefs] = useState({
    timeWarnings: true,
    soundEffects: false,
    autoFullscreen: true,
    darkMode: false,
    pushNotifications: false,
  });
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedName = localStorage.getItem("operatorName") || "";
    const savedPfp = localStorage.getItem("operatorPfp") || null;
    const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
    const savedPrefs = JSON.parse(localStorage.getItem("systemPrefs") || "{}");
    setName(savedName);
    setProfilePic(savedPfp);
    setStreak(stats.streak || 0);
    const mergedPrefs = { ...prefs, ...savedPrefs };
    
    if (mergedPrefs.pushNotifications && Notification.permission !== 'granted') {
      mergedPrefs.pushNotifications = false;
    }
    
    setPrefs(mergedPrefs);
    if (mergedPrefs.darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, []);

  const handleSaveName = () => {
    if (name.trim()) {
      localStorage.setItem("operatorName", name.trim());
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      window.dispatchEvent(new Event("storage"));
    }
  };

  const handlePfpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfilePic(base64String);
        localStorage.setItem("operatorPfp", base64String);
        window.dispatchEvent(new Event("storage"));
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePref = async (key: keyof typeof prefs) => {
    if (key === "pushNotifications" && !prefs[key]) {
      // User is turning ON push notifications
      try {
        const { requestNotificationPermission } = await import("../lib/firebase");
        const token = await requestNotificationPermission();
        if (!token) {
          alert("Push notification permission denied or failed to get token. Ensure you have allowed notifications in browser settings.");
          return; // Don't enable it if we couldn't get a token
        }
        
        // Save token to Firebase User doc so admin can send notifications
        const { auth, db } = await import("../lib/firebase");
        const { doc, setDoc } = await import("firebase/firestore");
        if (auth.currentUser) {
           await setDoc(doc(db, "user_data", auth.currentUser.uid), { fcmToken: token }, { merge: true });
        }
      } catch (err) {
        console.error("Error setting up push notifications", err);
        return;
      }
    }

    const newPrefs = { ...prefs, [key]: !prefs[key] };
    setPrefs(newPrefs);
    localStorage.setItem("systemPrefs", JSON.stringify(newPrefs));
    if (key === "darkMode") {
      if (newPrefs.darkMode) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
    }
    window.dispatchEvent(new Event("storage"));
  };

  const clearHistory = () => {
    if (
      window.confirm(
        "CRITICAL: This will purge all mission data and performance metrics. Proceed?",
      )
    ) {
      localStorage.clear();
      window.location.href = "/";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 px-4 xl:px-0 w-full overflow-hidden">
      <section className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-black heading-display tracking-tight text-emerald-950 uppercase italic">
          Terminal <span className="text-primary not-italic">Settings</span>
        </h1>
        <p className="text-emerald-900/40 font-medium text-sm sm:text-base">
          Configure your operational environment and identity protocols.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 min-w-0">
          {/* Identity Section */}
          <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-primary/5 blur-3xl -z-10 rounded-full translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700 neon-glow" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center relative z-10 w-full">
              <div className="flex flex-col items-center gap-3 shrink-0 mx-auto md:mx-0">
                <div
                  className="w-24 h-24 md:w-32 md:h-32 bg-emerald-50 rounded-full md:rounded-[2rem] flex items-center justify-center text-primary relative overflow-hidden cursor-pointer shadow-xl border-4 border-white ring-[4px] md:ring-[6px] ring-emerald-50 group/pfp transition-all hover:scale-105 hover:ring-emerald-100"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {profilePic ? (
                    <>
                      <img
                        src={profilePic}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-emerald-950/60 flex flex-col items-center justify-center opacity-0 group-hover/pfp:opacity-100 transition-all backdrop-blur-sm -translate-y-2 group-hover/pfp:translate-y-0">
                        <Camera
                          size={24}
                          className="text-white mb-1 shadow-lg md:w-7 md:h-7"
                        />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/90">
                          Change
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <User
                        size={36}
                        className="text-emerald-900/20 md:w-12 md:h-12"
                      />
                      <div className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center opacity-0 group-hover/pfp:opacity-100 transition-all backdrop-blur-sm scale-110 group-hover/pfp:scale-100">
                        <Camera
                          size={24}
                          className="text-white mb-1 shadow-lg md:w-7 md:h-7"
                        />
                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/90">
                          Upload
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePfpChange}
                accept="image/*"
                className="hidden"
              />
              <div className="space-y-5 flex-1 w-full text-center md:text-left">
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-emerald-950 uppercase italic tracking-tight mb-1 md:mb-2">
                    Operator Profile
                  </h3>
                  <p className="text-[9px] md:text-xs text-emerald-900/50 font-black uppercase tracking-[0.15em] md:tracking-[0.2em] px-2 md:px-0">
                    Update your identity and command handle
                  </p>
                </div>

                <div className="space-y-4 md:space-y-5 max-w-md mx-auto md:mx-0 w-full px-2 md:px-0">
                  <div className="space-y-2 text-left relative">
                    <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-900/50 ml-3 md:ml-4 absolute -top-2.5 bg-white px-2">
                      Display Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your operational name..."
                      className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-transparent rounded-xl md:rounded-2xl border-2 border-emerald-100 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-emerald-950 text-sm md:text-lg placeholder:text-emerald-900/20"
                    />
                  </div>

                  <button
                    onClick={handleSaveName}
                    className={cn(
                      "w-full md:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 md:gap-3 shadow-xl group/btn mx-auto md:mx-0",
                      success
                        ? "bg-emerald-500 text-white shadow-emerald-500/20"
                        : "bg-[#0d0d0d] text-white shadow-[#0d0d0d]/20 hover:scale-[1.02] hover:-translate-y-1",
                    )}
                  >
                    {success ? (
                      <CheckCircle2 size={16} className="animate-in zoom-in" />
                    ) : (
                      <Save
                        size={16}
                        className="group-hover/btn:rotate-12 transition-transform"
                      />
                    )}
                    {success ? "IDENTITY SECURED" : "SAVE PROFILE"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Earned Badges */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900/40">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-lg font-black text-emerald-950 uppercase italic tracking-tight">
                  Earned Badges
                </h3>
                <p className="text-[10px] text-emerald-900/40 font-black uppercase tracking-widest">
                  Your milestone achievements
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Day Streak Badges */}
              {[5, 10, 25].some(req => streak >= req) && (
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">
                    Consistency (Day Streak)
                  </h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                    {[5, 10, 25].map((req) => {
                      const achieved = streak >= req;
                      if (!achieved) return null;
                      const badgeImg = {
                        5: "https://i.ibb.co/k61CnZqB/day5.png",
                        10: "https://i.ibb.co/NdYTCBPN/day10.png",
                        25: "https://i.ibb.co/NnxD5y23/day25.png",
                      }[req as 5 | 10 | 25];

                      return (
                        <div
                          key={req}
                          className={cn(
                            "min-w-[120px] max-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden bg-orange-50 border-orange-200"
                          )}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />
                          <div
                            className={cn(
                              "w-16 h-16 flex items-center justify-center",
                            )}
                          >
                            {badgeImg ? (
                              <img src={badgeImg} alt={`${req} Day Streak`} className="w-full h-full object-contain drop-shadow-sm" />
                            ) : (
                              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 bg-orange-500 text-white border-orange-300">
                                <Flame size={28} className="fill-orange-400" />
                              </div>
                            )}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">
                            {req} Day
                            <br />
                            Streak
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Questions Solved Badges */}
              {[50, 100, 300, 1000].some(req => (JSON.parse(localStorage.getItem("userStats") || "{}").totalSolved || 0) >= req) && (
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">
                    Endurance (Missions Cleared)
                  </h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                    {[50, 100, 300, 1000].map((req) => {
                      const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
                      const achieved = (stats.totalSolved || 0) >= req;
                      if (!achieved) return null;
                      
                      const getBadgeInfo = (req: number) => {
                        switch (req) {
                          case 50:
                            return {
                              image: "https://i.ibb.co/Xr6zZtNY/50.png",
                              color: "blue",
                              name: "Tapasya Starter",
                            };
                          case 100:
                            return {
                              image: "https://i.ibb.co/p6kc7WKX/100.png",
                              color: "indigo",
                              name: "Tapasya Warrior",
                            };
                          case 300:
                            return {
                              image: "https://i.ibb.co/RGV0tD6k/300.png",
                              color: "purple",
                              name: "Problem Crusher",
                            };
                          case 1000:
                            return {
                              image: "https://i.ibb.co/5bqYMrh/file-00000000c88472078520c8a8552cfb9f.png",
                              color: "rose",
                              name: "Tapasya Grandmaster",
                            };
                          default:
                            return { image: null, color: "emerald", name: "" };
                        }
                      };
                      const badge = getBadgeInfo(req);
                      const colorStyles = {
                            blue: "bg-blue-50 border-blue-200",
                            indigo: "bg-indigo-50 border-indigo-200",
                            purple: "bg-purple-50 border-purple-200",
                            amber: "bg-amber-50 border-amber-200",
                            rose: "bg-rose-50 border-rose-200",
                            emerald: "bg-emerald-50 border-emerald-200",
                          }[badge.color as string] || "bg-emerald-50 border-emerald-200";

                      return (
                        <div
                          key={req}
                          className={cn(
                            "min-w-[120px] max-w-[120px] snap-center flex flex-col items-center gap-3 p-4 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden",
                            colorStyles,
                          )}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />
                          <div
                            className={cn(
                              "w-16 h-16 flex items-center justify-center",
                            )}
                          >
                            {badge.image && (
                              <img src={badge.image} alt={badge.name} className="w-full h-full object-contain drop-shadow-sm" />
                            )}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">
                            {badge.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Accuracy Badges */}
              {[60, 80, 90, 100].some(req => {
                const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
                const acc = stats.totalSolved > 0 ? (stats.correctAnswers / stats.totalSolved) * 100 : 0;
                return acc >= req && stats.totalSolved >= 10;
              }) && (
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mb-3 px-2">
                    Precision (Accuracy)
                  </h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x custom-scrollbar">
                    {[60, 80, 90, 100].map((req) => {
                      const stats = JSON.parse(
                        localStorage.getItem("userStats") || "{}",
                      );
                      const acc =
                        stats.totalSolved > 0
                          ? (stats.correctAnswers / stats.totalSolved) * 100
                          : 0;
                      const achieved = acc >= req && stats.totalSolved >= 10; // Need at least 10 solved to get accuracy badges
                      
                      if (!achieved) return null;

                      const badgeImg = {
                        60: "https://i.ibb.co/gM4n3Nmk/file-00000000e7387209a361e4c313ba5a82.png", 
                        80: "https://i.ibb.co/Kjv3bRwV/file-000000002ab8720792e649569ee2cdcf.png", 
                        90: "https://i.ibb.co/Q7gwBmPZ/file-00000000a5807206bfb202a4d85a02e6.png",
                        100: "https://i.ibb.co/XxKHFLH4/file-00000000d1407207ab4a5ab18dcb8003.png",
                      }[req as 60 | 80 | 90 | 100];
                      
                      const badgeName = {
                        60: "Sharp Shooter",
                        80: "Accuracy Master",
                        90: "Accuracy Legend",
                        100: "Perfect Strategist",
                      }[req as 60 | 80 | 90 | 100];

                      return (
                        <div
                          key={req}
                          className={cn(
                            "min-w-[120px] max-w-[120px] snap-center flex flex-col items-center gap-3 p-5 rounded-3xl border-2 transition-all shrink-0 relative overflow-hidden bg-emerald-50 border-emerald-200"
                          )}
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rotate-45 -translate-x-full animate-[shimmer_2s_infinite]" />
                          <div
                            className={cn(
                              "w-16 h-16 flex items-center justify-center",
                            )}
                          >
                            {badgeImg ? (
                              <img src={badgeImg} alt={`${req}% Accuracy`} className="w-full h-full object-contain drop-shadow-sm" />
                            ) : (
                              <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-2 bg-emerald-500 text-white border-white">
                                <CheckCircle2 size={24} />
                              </div>
                            )}
                          </div>
                          <span className="text-[9px] font-black uppercase tracking-widest text-emerald-950 text-center leading-tight">
                            {badgeName}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-emerald-50 shadow-xl shadow-emerald-900/5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-900/40">
                <Bell size={24} />
              </div>
              <h3 className="text-lg font-black text-emerald-950 uppercase italic tracking-tight">
                System Alerts
              </h3>
            </div>

            <div className="space-y-3">
              {[
                { id: "pushNotifications", label: "Push Notifications (Updates/Alerts)" },
                { id: "darkMode", label: "Dark Mode (Experimental)" },
                { id: "timeWarnings", label: "Time-limit Warnings" },
                { id: "soundEffects", label: "Sound Effects (Beta)" },
                { id: "autoFullscreen", label: "Auto-fullscreen on Quiz" },
              ].map((pref) => {
                const isEnabled = prefs[pref.id as keyof typeof prefs];
                return (
                  <div
                    key={pref.id}
                    onClick={() => togglePref(pref.id as keyof typeof prefs)}
                    className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl border border-emerald-50 cursor-pointer hover:bg-emerald-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-emerald-900/70">
                      {pref.label}
                    </span>
                    <div
                      className={cn(
                        "w-12 h-6 rounded-full relative transition-colors",
                        isEnabled ? "bg-primary" : "bg-emerald-100",
                      )}
                    >
                      <div
                        className={cn(
                          "absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all",
                          isEnabled ? "left-7" : "left-1",
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6 min-w-0">
          {/* Danger Zone */}
          <div className="bg-red-50 p-8 rounded-[2.5rem] border-2 border-red-100 space-y-6">
            <div className="flex items-center gap-4 text-red-600">
              <Shield size={24} />
              <h3 className="text-lg font-black uppercase italic tracking-tight">
                Security
              </h3>
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
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
              System Status
            </p>
            <p className="text-xs font-medium text-emerald-100/50 leading-relaxed">
              Terminal v1.4.2 stable. All subsystems operational. Local
              encryption active.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
