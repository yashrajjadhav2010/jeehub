import React from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { motion } from 'motion/react';
import { Shield, Users, Activity, Settings, Database } from 'lucide-react';

export default function Admin() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfdfb]">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // Check if the user is the admin
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'yashrajjadhav2010@gmail.com';

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfdfb] p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full border border-red-100">
          <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black text-emerald-950 mb-2 uppercase tracking-tight">Access Denied</h1>
          <p className="text-emerald-900/60 font-medium text-sm">
            You do not have the required clearance to access the terminal control panel.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fbfdfb] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-emerald-50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-emerald-950 uppercase tracking-tight italic leading-none">
                Command <span className="text-primary not-italic">Center</span>
              </h1>
              <p className="text-xs font-bold text-emerald-900/40 uppercase tracking-widest mt-1">
                Admin Panel • {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} title="Total Users" value="1,248" />
          <StatCard icon={Activity} title="Active Sessions" value="142" />
          <StatCard icon={Database} title="Database Size" value="84 MB" />
          <StatCard icon={Settings} title="System Status" value="Online" />
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50">
          <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem time="2 mins ago" text="New user registration: candidate_8942" />
            <ActivityItem time="15 mins ago" text="Database sync completed successfully" />
            <ActivityItem time="1 hour ago" text="System auto-scaling triggered" />
            <ActivityItem time="2 hours ago" text="Admin login detected" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value }: { icon: any, title: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 flex items-center gap-4">
      <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">{title}</p>
        <p className="text-2xl font-black text-emerald-950 mt-1">{value}</p>
      </div>
    </div>
  );
}

function ActivityItem({ time, text }: { time: string, text: string }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-emerald-50 last:border-0">
      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-bold text-emerald-950">{text}</p>
      </div>
      <div className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40 shrink-0">
        {time}
      </div>
    </div>
  );
}
