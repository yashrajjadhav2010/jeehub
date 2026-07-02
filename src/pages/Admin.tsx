import React, { useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { Shield, Users, Activity, Settings, Database, Plus, Save, Trash2, Image, AlertTriangle, ExternalLink } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, getDocs, getDoc, doc, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Admin() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalErrorsLogged: 0,
    dbSizeApproximation: 0,
    totalVisits: 0
  });
  const [usersList, setUsersList] = useState<any[]>([]);
  const [reportsList, setReportsList] = useState<any[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  
  const [newSet, setNewSet] = useState({ title: '', subject: 'Physics', chapter: '', description: '' });
  const [questions, setQuestions] = useState([{
    text: '',
    diagramUrl: '',
    options: ['', '', '', ''],
    correctOptionIndex: 0,
    explanation: ''
  }]);
  
  const [savingSet, setSavingSet] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const [activeTab, setActiveTab] = useState<'dashboard' | 'create_set' | 'users' | 'reports'>('dashboard');

  useEffect(() => {
    async function fetchStats() {
      try {
        const querySnapshot = await getDocs(collection(db, 'user_data'));
        let totalUsers = 0;
        let totalErrors = 0;
        let totalBytes = 0;
        let fetchedUsers: any[] = [];
        
        querySnapshot.forEach((doc) => {
          totalUsers++;
          const data = doc.data();
          const dataString = JSON.stringify(data);
          totalBytes += new Blob([dataString]).size;
          
          let userErrors = 0;
          let userScore = 0;

          if (data?.data?.errorBook) {
            try {
              const eb = data.data.errorBook;
              userErrors = Object.keys(eb).length;
              totalErrors += userErrors;
            } catch (e) {
              // ignore
            }
          }

          if (data?.data?.stats) {
            try {
              userScore = data.data.stats.totalScore || 0;
            } catch (e) {}
          }

          fetchedUsers.push({
            id: doc.id,
            email: data.email || 'Unknown Email',
            name: data.name || 'Unknown User',
            errors: userErrors,
            score: userScore,
            lastActive: data.updated_at ? new Date(data.updated_at.seconds * 1000).toLocaleString() : 'Unknown'
          });
        });
        
        setStats({
          totalUsers,
          totalErrorsLogged: totalErrors,
          dbSizeApproximation: totalBytes,
          totalVisits: 0
        });
        
        try {
          const analyticsDoc = await getDoc(doc(db, 'analytics', 'global'));
          if (analyticsDoc.exists()) {
            setStats(prev => ({
              ...prev,
              totalVisits: analyticsDoc.data().totalVisits || 0
            }));
          }
        } catch(e) {}

        setUsersList(fetchedUsers);
        
        // Fetch reports
        try {
          const reportsSnapshot = await getDocs(collection(db, 'reports'));
          let fetchedReports: any[] = [];
          reportsSnapshot.forEach(doc => {
            const data = doc.data();
            fetchedReports.push({
              id: doc.id,
              ...data,
              createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString() : 'Unknown'
            });
          });
          // Sort by newest
          fetchedReports.sort((a, b) => {
            if (a.createdAt === 'Unknown') return 1;
            if (b.createdAt === 'Unknown') return -1;
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          });
          setReportsList(fetchedReports);
        } catch (e) {
          console.error("Error fetching reports", e);
        }

      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoadingStats(false);
      }
    }
    
    // Only fetch if admin
    if (user?.primaryEmailAddress?.emailAddress === 'yashrajjadhav2010@gmail.com') {
      fetchStats();
    }
  }, [user]);

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
  
  const handleAddQuestion = () => {
    setQuestions([...questions, {
      text: '',
      diagramUrl: '',
      options: ['', '', '', ''],
      correctOptionIndex: 0,
      explanation: ''
    }]);
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const updated = [...questions];
    (updated[index] as any)[field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex: number, oIndex: number, value: string) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleRemoveQuestion = (index: number) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };
  
  const handleAddSet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSet.title || !newSet.description || questions.length === 0) return;
    
    // validate questions
    for (const q of questions) {
      if (!q.text) {
        setSaveMessage('Error: All questions must have text');
        return;
      }
      if (q.options.some(o => !o.trim())) {
        setSaveMessage('Error: All options must be filled');
        return;
      }
    }

    setSavingSet(true);
    setSaveMessage('');
    try {
      await addDoc(collection(db, 'custom_sets'), {
        ...newSet,
        questions,
        created_at: serverTimestamp()
      });
      setSaveMessage('Set created successfully!');
      setNewSet({ title: '', subject: 'Physics', chapter: '', description: '' });
      setQuestions([{
        text: '',
        diagramUrl: '',
        options: ['', '', '', ''],
        correctOptionIndex: 0,
        explanation: ''
      }]);
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (err: any) {
      setSaveMessage('Error: ' + err.message);
    } finally {
      setSavingSet(false);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-[#fbfdfb] p-4 sm:p-8 pb-32">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 gap-4">
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
          
          <div className="flex bg-emerald-50 rounded-xl p-1 w-full md:w-auto">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'dashboard' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('users')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'users' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Users
            </button>
            <button 
              onClick={() => setActiveTab('create_set')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'create_set' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Test Builder
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === 'reports' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Reports {reportsList.length > 0 && <span className="bg-red-500 text-white rounded-full px-2 py-0.5 ml-1">{reportsList.length}</span>}
            </button>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard icon={Users} title="Total Registered" value={loadingStats ? "..." : stats.totalUsers.toString()} />
              <StatCard icon={Activity} title="Total Site Visits" value={loadingStats ? "..." : stats.totalVisits.toString()} />
              <StatCard icon={Database} title="Database Size" value={loadingStats ? "..." : formatBytes(stats.dbSizeApproximation)} />
              <StatCard icon={Settings} title="Errors Logged" value={loadingStats ? "..." : stats.totalErrorsLogged.toString()} />
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50">
              <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6">Recent Activity Logs</h2>
              <div className="space-y-4">
                <ActivityItem time="Just now" text="Admin accessed command center" />
                <ActivityItem time="Runtime" text={`Connected to ${stats.totalUsers} profiles in Firebase`} />
                <ActivityItem time="System" text="Firebase database synchronized locally" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <Users className="text-primary" size={24} /> 
              User Profiles
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-emerald-100">
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">User Profile</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">User ID</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">XP Score</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Errors Logged</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {usersList.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-emerald-900/40 font-medium">No users found or still loading...</td>
                    </tr>
                  ) : (
                    usersList.map((u, i) => (
                      <tr key={i} className="border-b border-emerald-50 hover:bg-emerald-50/30 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-bold text-emerald-950">{u.name}</div>
                          <div className="text-xs text-emerald-900/60">{u.email}</div>
                        </td>
                        <td className="py-4 px-4 font-mono text-sm text-emerald-950">{u.id}</td>
                        <td className="py-4 px-4 font-bold text-primary">{u.score}</td>
                        <td className="py-4 px-4 font-bold text-red-500">{u.errors}</td>
                        <td className="py-4 px-4 text-sm text-emerald-900/60">{u.lastActive}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-500" size={24} /> 
              User Reports
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-emerald-100">
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Reporter</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Context</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Issue Description</th>
                    <th className="py-4 px-4 text-xs font-black uppercase tracking-widest text-emerald-900/40">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {reportsList.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-emerald-900/40 font-medium">No reports found.</td>
                    </tr>
                  ) : (
                    reportsList.map((r, i) => (
                      <tr key={i} className="border-b border-emerald-50 hover:bg-emerald-50/30 transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-bold text-emerald-950">{r.reporter}</div>
                        </td>
                        <td className="py-4 px-4">
                          {r.quizTitle ? (
                            <Link to={r.subjectId && r.chapterId && r.quizId && r.questionId ? `/question/${r.subjectId}/${r.chapterId}/${r.quizId}/${r.questionId}` : '#'} className="block hover:opacity-80 transition-opacity">
                              <div className="text-xs font-black text-emerald-900/60 uppercase tracking-widest mb-1 flex items-center gap-1 hover:text-primary transition-colors">Quiz: {r.quizTitle} {r.subjectId && <ExternalLink size={12} />}</div>
                              <div className="text-sm font-medium">{r.questionText?.substring(0, 50)}...</div>
                            </Link>
                          ) : (
                            <Link to={`/study/${r.materialId}`} className="block hover:opacity-80 transition-opacity">
                              <div className="text-xs font-black text-purple-900/60 uppercase tracking-widest mb-1 flex items-center gap-1 hover:text-primary transition-colors">Material: {r.materialTitle} <ExternalLink size={12} /></div>
                            </Link>
                          )}
                        </td>
                        <td className="py-4 px-4 text-sm font-medium text-red-600 max-w-xs break-words">{r.description}</td>
                        <td className="py-4 px-4 text-sm text-emerald-900/60">{r.createdAt}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'create_set' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <Plus className="text-primary" size={24} /> 
              Test Builder Engine
            </h2>
            
            <form onSubmit={handleAddSet} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-emerald-50/30 p-6 rounded-2xl border border-emerald-100/50">
                <div className="md:col-span-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Set Title</label>
                  <input 
                    type="text" 
                    value={newSet.title}
                    onChange={(e) => setNewSet({...newSet, title: e.target.value})}
                    className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none focus:border-primary/50"
                    placeholder="e.g. JEE Advanced Mock Test 1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Subject Category</label>
                  <select 
                    value={newSet.subject}
                    onChange={(e) => setNewSet({...newSet, subject: e.target.value})}
                    className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none focus:border-primary/50"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Full Syllabus">Full Syllabus</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Chapter / Topic</label>
                  <input 
                    type="text" 
                    value={newSet.chapter}
                    onChange={(e) => setNewSet({...newSet, chapter: e.target.value})}
                    className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none focus:border-primary/50"
                    placeholder="e.g. Kinematics, Thermodynamics..."
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Description</label>
                  <textarea 
                    value={newSet.description}
                    onChange={(e) => setNewSet({...newSet, description: e.target.value})}
                    className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 focus:outline-none focus:border-primary/50 h-24 resize-none"
                    placeholder="Describe the test contents and difficulty level..."
                    required
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black text-emerald-950 uppercase tracking-tight">Questions ({questions.length})</h3>
                  <button 
                    type="button" 
                    onClick={handleAddQuestion}
                    className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-emerald-200 transition-colors"
                  >
                    <Plus size={16} /> Add Question
                  </button>
                </div>

                {questions.map((q, qIndex) => (
                  <div key={qIndex} className="bg-white border-2 border-emerald-50 rounded-2xl p-6 relative group">
                    <button 
                      type="button"
                      onClick={() => handleRemoveQuestion(qIndex)}
                      className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={20} />
                    </button>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-black flex items-center justify-center">
                        {qIndex + 1}
                      </div>
                      <h4 className="font-bold text-emerald-950">Question Configuration</h4>
                    </div>

                    <div className="space-y-4 pl-11">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-1">Question Text (Markdown supported)</label>
                        <textarea 
                          value={q.text}
                          onChange={(e) => handleQuestionChange(qIndex, 'text', e.target.value)}
                          className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-medium focus:outline-none focus:border-primary/50 h-24 resize-none"
                          placeholder="Enter question text..."
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-1 flex items-center gap-2">
                          <Image size={12} /> Diagram URL (Optional)
                        </label>
                        <input 
                          type="url" 
                          value={q.diagramUrl}
                          onChange={(e) => handleQuestionChange(qIndex, 'diagramUrl', e.target.value)}
                          className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 text-sm focus:outline-none focus:border-primary/50"
                          placeholder="https://example.com/image.png"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {q.options.map((opt, oIndex) => (
                          <div key={oIndex} className="relative">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                              {String.fromCharCode(65 + oIndex)}
                            </div>
                            <input 
                              type="text" 
                              value={opt}
                              onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                              className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl pl-12 pr-4 py-3 text-emerald-950 text-sm focus:outline-none focus:border-primary/50"
                              placeholder={`Option ${oIndex + 1}`}
                              required
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-1">Correct Answer</label>
                          <select 
                            value={q.correctOptionIndex}
                            onChange={(e) => handleQuestionChange(qIndex, 'correctOptionIndex', parseInt(e.target.value))}
                            className="w-full bg-primary/10 border border-primary/20 text-primary font-bold rounded-xl px-4 py-3 focus:outline-none"
                          >
                            <option value={0}>Option A</option>
                            <option value={1}>Option B</option>
                            <option value={2}>Option C</option>
                            <option value={3}>Option D</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] font-black uppercase tracking-widest text-emerald-900/40 mb-1">Explanation (Optional)</label>
                          <input 
                            type="text" 
                            value={q.explanation}
                            onChange={(e) => handleQuestionChange(qIndex, 'explanation', e.target.value)}
                            className="w-full bg-emerald-50/30 border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 text-sm focus:outline-none focus:border-primary/50"
                            placeholder="Why is this correct?"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-emerald-100">
                <button 
                  type="submit" 
                  disabled={savingSet}
                  className="w-full md:w-auto px-12 bg-primary text-white rounded-xl py-4 font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/20"
                >
                  {savingSet ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Save size={20} />}
                  {savingSet ? 'Deploying to Database...' : 'Deploy Test Set'}
                </button>
                {saveMessage && (
                  <p className={`mt-4 text-sm font-bold ${saveMessage.includes('Error') ? 'text-red-500' : 'text-primary'}`}>
                    {saveMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value }: { icon: any, title: string, value: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 flex items-center gap-4 hover:shadow-md transition-shadow">
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

