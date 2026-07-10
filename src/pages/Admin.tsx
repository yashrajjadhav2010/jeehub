import React, { useEffect, useState } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { 
  Shield, Users, Activity, Settings, Database, Plus, Save, Trash2, Image, 
  AlertTriangle, ExternalLink, FileText, BookOpen, Clock, RefreshCw, 
  PenSquare, Eye, CheckCircle2, ChevronDown, Book, Sparkles, MessageSquare
} from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, getDocs, getDoc, doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { getAllData, loadQuizSet } from '../lib/dataService';

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
  const [surveysList, setSurveysList] = useState<any[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  
  // Test Builder States
  const [newSet, setNewSet] = useState({ 
    title: '', 
    subject: 'Physics', 
    chapter: '', 
    description: '',
    duration: '' // in minutes
  });
  const [questions, setQuestions] = useState([{
    text: '',
    diagramUrl: '',
    options: ['', '', '', ''],
    correctOptionIndex: 0,
    explanation: ''
  }]);
  const [savingSet, setSavingSet] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [editingSet, setEditingSet] = useState<{ subject: string; chapter: string; id: string } | null>(null);

  // Manage Sets States
  const [allSubjectsData, setAllSubjectsData] = useState<any>(null);
  const [loadingSets, setLoadingSets] = useState(false);
  const [syncingAll, setSyncingAll] = useState(false);
  const [syncResult, setSyncResult] = useState('');

  // Study Notes States
  const [customMaterials, setCustomMaterials] = useState<any[]>([]);
  const [loadingMaterials, setLoadingMaterials] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    id: '',
    title: '',
    subject: 'Physics',
    category: 'short-notes',
    content: ''
  });
  const [flashcards, setFlashcards] = useState<Array<{ front: string; back: string }>>([]);
  const [editingMaterialId, setEditingMaterialId] = useState<string | null>(null);
  const [materialSaveMessage, setMaterialSaveMessage] = useState('');
  const [savingMaterial, setSavingMaterial] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<'dashboard' | 'manage_sets' | 'create_set' | 'manage_notes' | 'users' | 'reports' | 'surveys'>('dashboard');

  const fetchStats = async () => {
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
        let userXp = 0;
        let totalSolved = 0;
        let streak = 0;

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
            userXp = data.data.stats.xp || 0;
            totalSolved = data.data.stats.totalSolved || 0;
            streak = data.data.stats.streak || 0;
          } catch (e) {}
        }

        fetchedUsers.push({
          id: doc.id,
          email: data.email || 'Unknown Email',
          name: data.name || 'Unknown User',
          errors: userErrors,
          score: userScore,
          xp: userXp,
          totalSolved: totalSolved,
          streak: streak,
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

      // Fetch surveys
      try {
        const surveysSnapshot = await getDocs(collection(db, 'surveys'));
        let fetchedSurveys: any[] = [];
        surveysSnapshot.forEach(doc => {
          const data = doc.data();
          fetchedSurveys.push({
            id: doc.id,
            ...data,
            createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString() : 'Unknown'
          });
        });
        fetchedSurveys.sort((a, b) => {
          if (a.createdAt === 'Unknown') return 1;
          if (b.createdAt === 'Unknown') return -1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        setSurveysList(fetchedSurveys);
      } catch (e) {
        console.error("Error fetching surveys", e);
      }



    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoadingStats(false);
    }
  };

  const fetchAllSets = async () => {
    setLoadingSets(true);
    try {
      const data = await getAllData();
      setAllSubjectsData(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSets(false);
    }
  };

  const fetchCustomMaterials = async () => {
    setLoadingMaterials(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'custom_materials'));
      const fetched: any[] = [];
      querySnapshot.forEach(docSnap => {
        fetched.push({
          id: docSnap.id,
          ...docSnap.data()
        });
      });
      setCustomMaterials(fetched);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMaterials(false);
    }
  };

  const adminEmails = ['yashrajjadhav2010@gmail.com', 'yashrajart1999@gmail.com'];
  const isAdmin = adminEmails.includes(user?.primaryEmailAddress?.emailAddress || '');

  useEffect(() => {
    if (isLoaded && isSignedIn && isAdmin) {
      fetchStats();
      fetchAllSets();
      fetchCustomMaterials();
    }
  }, [user, isLoaded, isSignedIn]);

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
  
  // Test Builder Helpers
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

  const handleLoadSetForEditing = async (subject: string, chapter: string, set: string) => {
    setLoadingSets(true);
    setSaveMessage('');
    try {
      const fullSet = await loadQuizSet(subject, chapter, set);
      if (fullSet) {
        // Map subjectId to display subject name
        let subName = 'Physics';
        if (fullSet.subjectId === 'chemistry') subName = 'Chemistry';
        if (fullSet.subjectId === 'maths') subName = 'Mathematics';
        if (fullSet.subjectId === 'mock-tests') subName = 'Full Syllabus';
        if (fullSet.subjectId === 'pyq') subName = 'PYQ';

        setNewSet({
          title: fullSet.title,
          subject: subName,
          chapter: fullSet.chapterId.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
          description: fullSet.description || '',
          duration: fullSet.duration ? fullSet.duration.toString() : ''
        });

        const qs = fullSet.questions.map(q => ({
          text: q.question,
          diagramUrl: (q as any).diagramUrl || '',
          options: q.options || ['', '', '', ''],
          correctOptionIndex: typeof q.answer === 'number' ? q.answer : 0,
          explanation: q.explanation || ''
        }));

        setQuestions(qs);
        setEditingSet({
          subject,
          chapter,
          id: set
        });

        // Switch tab to builder
        setActiveTab('create_set');
      } else {
        alert('Failed to load full test set data.');
      }
    } catch (e: any) {
      console.error(e);
      alert('Error fetching set: ' + e.message);
    } finally {
      setLoadingSets(false);
    }
  };

  const handleCancelEditSet = () => {
    setNewSet({ title: '', subject: 'Physics', chapter: '', description: '', duration: '' });
    setQuestions([{
      text: '',
      diagramUrl: '',
      options: ['', '', '', ''],
      correctOptionIndex: 0,
      explanation: ''
    }]);
    setEditingSet(null);
    setSaveMessage('');
  };
  
  const handleSaveSet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSet.title || !newSet.chapter || !newSet.description || questions.length === 0) return;
    
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
      const formattedQs = questions.map((q, index) => ({
        id: (q as any).id || `q_${index}_${Date.now()}`,
        question: q.text,
        options: q.options,
        answer: q.correctOptionIndex,
        explanation: q.explanation || '',
        type: 'mcq'
      }));

      const durationVal = newSet.duration ? parseInt(newSet.duration) : 0;

      const payload = {
        title: newSet.title,
        subject: newSet.subject,
        chapter: newSet.chapter,
        description: newSet.description,
        questions: formattedQs,
        duration: durationVal > 0 ? durationVal : null,
        difficulty: 'medium',
        updated_at: serverTimestamp()
      };

      if (editingSet) {
        // Document ID should reflect subject, chapter and local set code so it overrides beautifully
        const subClean = editingSet.subject.toLowerCase().replace(' ', '-');
        const chapClean = editingSet.chapter.toLowerCase().replace(/\s+/g, '-');
        const setClean = editingSet.id;
        
        const docId = `${subClean}_${chapClean}_${setClean}`.replace(/\s+/g, '-');
        await setDoc(doc(db, 'custom_sets', docId), {
          ...payload,
          id: setClean,
          created_at: serverTimestamp()
        }, { merge: true });

        setSaveMessage('Set updated successfully in the cloud database!');
      } else {
        // New custom set
        const cleanTitle = newSet.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_-]/g, '');
        const randomId = `custom_${cleanTitle}_${Date.now()}`;
        
        const subClean = newSet.subject.toLowerCase().replace(' ', '-');
        const chapClean = newSet.chapter.toLowerCase().replace(/\s+/g, '-');
        const docId = `${subClean}_${chapClean}_${randomId}`;
        
        await setDoc(doc(db, 'custom_sets', docId), {
          ...payload,
          id: randomId,
          created_at: serverTimestamp()
        });

        setSaveMessage('New set deployed and synchronized successfully!');
      }

      handleCancelEditSet();
      fetchAllSets();
      setTimeout(() => setSaveMessage(''), 4000);
    } catch (err: any) {
      setSaveMessage('Error: ' + err.message);
    } finally {
      setSavingSet(false);
    }
  };

  const handleDeleteCustomSet = async (setId: string) => {
    if (!window.confirm('Are you sure you want to delete this custom test set from the database? This cannot be undone.')) return;
    try {
      const docId = setId.startsWith('custom_') ? setId.replace('custom_', '') : setId;
      await deleteDoc(doc(db, 'custom_sets', docId));
      setSaveMessage('Set deleted successfully.');
      fetchAllSets();
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (e: any) {
      console.error(e);
      alert('Failed to delete set: ' + e.message);
    }
  };

  const syncAllStaticSetsToFirestore = async () => {
    setSyncingAll(true);
    setSyncResult('Synchronizing all questions and sets...');
    try {
      const modules = import.meta.glob('/src/questions/**/*.ts') as any;
      let count = 0;
      
      for (const path in modules) {
        const mod = await modules[path]() as any;
        if (mod && mod.default) {
          const quizSet = mod.default;
          const subId = quizSet.subjectId;
          const chapId = quizSet.chapterId;
          const setId = quizSet.id;
          
          const docId = `${subId}_${chapId}_${setId}`.replace(/\s+/g, '-');
          
          const formattedQs = (quizSet.questions || []).map((q: any, index: number) => ({
            id: q.id || `${setId}_q_${index}`,
            question: q.question || q.text || '',
            options: q.options || [],
            answer: q.answer !== undefined ? q.answer : (q.correctOptionIndex !== undefined ? q.correctOptionIndex : 0),
            explanation: q.explanation || '',
            type: q.type || 'mcq'
          }));
          
          await setDoc(doc(db, 'custom_sets', docId), {
            title: quizSet.title,
            subject: subId,
            chapter: chapId,
            description: quizSet.description || '',
            difficulty: quizSet.difficulty || 'medium',
            duration: quizSet.duration || (quizSet.questions.length * 1.5), // fallback to 1.5 min per question
            questions: formattedQs,
            created_at: serverTimestamp()
          });
          count++;
        }
      }
      setSyncResult(`Successfully pushed all ${count} local sets and all questions into the cloud database!`);
    } catch (e: any) {
      console.error(e);
      setSyncResult(`Sync failed: ${e.message}`);
    } finally {
      setSyncingAll(false);
    }
  };

  // Study Notes Helpers
  const handleAddFlashcard = () => {
    setFlashcards([...flashcards, { front: '', back: '' }]);
  };

  const handleRemoveFlashcard = (idx: number) => {
    const updated = [...flashcards];
    updated.splice(idx, 1);
    setFlashcards(updated);
  };

  const handleFlashcardChange = (idx: number, field: 'front' | 'back', val: string) => {
    const updated = [...flashcards];
    updated[idx][field] = val;
    setFlashcards(updated);
  };

  const handleLoadMaterialForEditing = (mat: any) => {
    setNewMaterial({
      id: mat.id,
      title: mat.title || '',
      subject: mat.subject || 'Physics',
      category: mat.category || 'short-notes',
      content: mat.content || ''
    });
    setFlashcards(mat.flashcards || []);
    setEditingMaterialId(mat.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEditMaterial = () => {
    setNewMaterial({
      id: '',
      title: '',
      subject: 'Physics',
      category: 'short-notes',
      content: ''
    });
    setFlashcards([]);
    setEditingMaterialId(null);
    setMaterialSaveMessage('');
  };

  const handleSaveMaterial = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMaterial.id || !newMaterial.title || !newMaterial.content) return;

    setSavingMaterial(true);
    setMaterialSaveMessage('');
    try {
      await setDoc(doc(db, 'custom_materials', newMaterial.id), {
        title: newMaterial.title,
        subject: newMaterial.subject,
        category: newMaterial.category,
        content: newMaterial.content,
        flashcards: flashcards,
        updated_at: serverTimestamp()
      }, { merge: true });

      setMaterialSaveMessage(editingMaterialId ? 'Note updated successfully!' : 'Note published successfully!');
      handleCancelEditMaterial();
      fetchCustomMaterials();
      setTimeout(() => setMaterialSaveMessage(''), 3000);
    } catch (err: any) {
      setMaterialSaveMessage('Error: ' + err.message);
    } finally {
      setSavingMaterial(false);
    }
  };

  const handleDeleteMaterial = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this study note from the cloud database?')) return;
    try {
      await deleteDoc(doc(db, 'custom_materials', id));
      setMaterialSaveMessage('Note deleted successfully.');
      fetchCustomMaterials();
      setTimeout(() => setMaterialSaveMessage(''), 3000);
    } catch (e: any) {
      console.error(e);
      alert('Failed to delete note: ' + e.message);
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
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
        
        {/* Responsive Header Section */}
        <header className="flex flex-col xl:flex-row items-start xl:items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-emerald-50 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-emerald-950 uppercase tracking-tight italic leading-none">
                Command <span className="text-primary not-italic">Center</span>
              </h1>
              <p className="text-xs font-bold text-emerald-900/40 uppercase tracking-widest mt-1.5 break-all">
                Operator Terminal • {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
          
          {/* Horizontally scrolling comfortable tabs bar for Mobile */}
          <div className="flex bg-emerald-50 rounded-xl p-1 w-full xl:w-auto overflow-x-auto whitespace-nowrap hide-scrollbar gap-1 shrink-0 snap-x">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activeTab === 'dashboard' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('manage_sets')}
              className={`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activeTab === 'manage_sets' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Manage Sets
            </button>
            <button 
              onClick={() => setActiveTab('create_set')}
              className={`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activeTab === 'create_set' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              {editingSet ? 'Test Editor' : 'Test Builder'}
            </button>
            <button 
              onClick={() => setActiveTab('manage_notes')}
              className={`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activeTab === 'manage_notes' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Manage Notes
            </button>
            <button 
              onClick={() => setActiveTab('users')}
              className={`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activeTab === 'users' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Users
            </button>
            <button 
              onClick={() => setActiveTab('reports')}
              className={`snap-center px-4 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${activeTab === 'reports' ? 'bg-white text-primary shadow-sm' : 'text-emerald-900/60 hover:text-emerald-900'}`}
            >
              Reports {reportsList.length > 0 && <span className="bg-red-500 text-white rounded-full px-1.5 py-0.5 ml-1 text-[10px]">{reportsList.length}</span>}
            </button>
          </div>
        </header>

        {/* Tab 1: Dashboard Overview */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StatCard icon={Users} title="Total Registered" value={loadingStats ? "..." : stats.totalUsers.toString()} />
              <StatCard icon={Activity} title="Total Site Visits" value={loadingStats ? "..." : stats.totalVisits.toString()} />
              <StatCard icon={Database} title="Database Size" value={loadingStats ? "..." : formatBytes(stats.dbSizeApproximation)} />
              <StatCard icon={Settings} title="Errors Logged" value={loadingStats ? "..." : stats.totalErrorsLogged.toString()} />
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50">
              <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" /> Recent Activity Logs
              </h2>
              <div className="space-y-4">
                <ActivityItem time="Just now" text="Admin Terminal session connected successfully" />
                <ActivityItem time="Runtime" text={`Connected to ${stats.totalUsers} profiles in Firebase`} />
                <ActivityItem time="System" text="Firebase database synchronized locally" />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Manage Sets Panel */}
        {activeTab === 'manage_sets' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-50">
              <div>
                <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight flex items-center gap-3">
                  <BookOpen className="text-primary" size={24} /> 
                  Manage Test Sets
                </h2>
                <p className="text-xs text-emerald-900/60 mt-1">View, edit, or synchronize static and cloud database test sets.</p>
              </div>
              <button
                onClick={syncAllStaticSetsToFirestore}
                disabled={syncingAll}
                className="flex items-center justify-center gap-2 bg-emerald-950 text-white px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-emerald-900 transition-all disabled:opacity-50"
              >
                <RefreshCw size={14} className={syncingAll ? "animate-spin" : ""} />
                {syncingAll ? 'Syncing...' : 'Sync All Static Sets to DB'}
              </button>
            </div>

            {syncResult && (
              <div className="mb-6 p-4 rounded-2xl bg-primary/10 border border-primary/20 text-xs font-bold text-primary flex items-center gap-2">
                <CheckCircle2 size={16} />
                {syncResult}
              </div>
            )}

            {loadingSets ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs font-bold text-emerald-900/40 uppercase tracking-widest">Loading Test Sets...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {allSubjectsData && Object.keys(allSubjectsData).map((subId) => {
                  const chapters = allSubjectsData[subId] || [];
                  if (chapters.length === 0) return null;
                  
                  return (
                    <div key={subId} className="border border-emerald-100 rounded-2xl p-4 sm:p-6 space-y-4">
                      <h3 className="text-md font-black text-primary uppercase tracking-wider flex items-center justify-between border-b border-emerald-50 pb-2">
                        <span>{subId.toUpperCase().replace('-', ' ')}</span>
                        <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                          {chapters.reduce((acc: number, c: any) => acc + c.sets.length, 0)} Sets
                        </span>
                      </h3>
                      
                      <div className="space-y-4">
                        {chapters.map((chap: any) => (
                          <div key={chap.id} className="space-y-2">
                            <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wide bg-emerald-50/50 px-3 py-2 rounded-lg">{chap.title}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-2">
                              {chap.sets.map((set: any) => {
                                const isCustom = set.id.startsWith('custom_');
                                return (
                                  <div key={set.id} className="bg-white p-4 rounded-xl border border-emerald-50 hover:border-emerald-100 shadow-sm flex flex-col justify-between gap-3">
                                    <div>
                                      <div className="flex items-center justify-between mb-1">
                                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${isCustom ? 'bg-primary/10 text-primary' : 'bg-amber-100 text-amber-700'}`}>
                                          {isCustom ? 'Cloud DB' : 'Local Static'}
                                        </span>
                                        {set.duration && (
                                          <span className="text-[10px] font-mono font-bold text-emerald-900/40 flex items-center gap-1">
                                            <Clock size={12} /> {set.duration} mins
                                          </span>
                                        )}
                                      </div>
                                      <h5 className="font-bold text-emerald-950 text-sm leading-tight">{set.title}</h5>
                                      <p className="text-[11px] text-emerald-900/40 mt-1 font-medium">{set.itemCount} Questions • {set.difficulty}</p>
                                    </div>
                                    
                                    <div className="flex gap-2 pt-2 border-t border-emerald-50 mt-auto">
                                      <button
                                        onClick={() => handleLoadSetForEditing(subId, chap.id, set.id)}
                                        className="flex-1 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-1"
                                      >
                                        <PenSquare size={12} /> Edit Set
                                      </button>
                                      {isCustom && (
                                        <button
                                          onClick={() => handleDeleteCustomSet(set.id)}
                                          className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                                          title="Delete from Database"
                                        >
                                          <Trash2 size={14} />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Test Builder / Editor */}
        {activeTab === 'create_set' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-50">
              <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight flex items-center gap-3">
                <Plus className="text-primary" size={24} /> 
                {editingSet ? 'Test Set Editor' : 'Test Builder Engine'}
              </h2>
              {editingSet && (
                <button
                  type="button"
                  onClick={handleCancelEditSet}
                  className="px-4 py-2 border border-emerald-200 text-emerald-800 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-emerald-50 transition-all"
                >
                  Cancel Editing
                </button>
              )}
            </div>

            {editingSet && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 flex items-center gap-2">
                <AlertTriangle size={16} />
                <span>You are currently editing <strong>{newSet.title}</strong> (ID: {editingSet.id}). Saving will override this set in the cloud database.</span>
              </div>
            )}
            
            <form onSubmit={handleSaveSet} className="space-y-8">
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
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Time Allocation (Minutes)</label>
                  <input 
                    type="number" 
                    value={newSet.duration}
                    onChange={(e) => setNewSet({...newSet, duration: e.target.value})}
                    className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none focus:border-primary/50"
                    placeholder="e.g. 180 (leave blank to fallback based on question count)"
                    min={1}
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

                    <div className="space-y-4 pl-0 sm:pl-11">
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

              <div className="pt-6 border-t border-emerald-100 flex items-center gap-3">
                <button 
                  type="submit" 
                  disabled={savingSet}
                  className="px-12 bg-primary text-white rounded-xl py-4 font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-primary/20"
                >
                  {savingSet ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Save size={20} />}
                  {savingSet ? 'Saving to Cloud DB...' : editingSet ? 'Update Test Set' : 'Deploy Test Set'}
                </button>
                {saveMessage && (
                  <p className={`text-sm font-bold ${saveMessage.includes('Error') ? 'text-red-500' : 'text-primary'}`}>
                    {saveMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Tab 4: Manage Notes */}
        {activeTab === 'manage_notes' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Create/Edit Material Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50">
              <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
                <FileText className="text-primary" size={24} /> 
                {editingMaterialId ? 'Edit Study Note' : 'Add New Study Note'}
              </h2>
              
              <form onSubmit={handleSaveMaterial} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-emerald-50/30 p-6 rounded-2xl border border-emerald-100/50">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Note Unique Slug ID (No spaces, e.g. laws-of-motion-notes)</label>
                    <input 
                      type="text" 
                      value={newMaterial.id}
                      onChange={(e) => setNewMaterial({...newMaterial, id: e.target.value.toLowerCase().replace(/\s+/g, '-')})}
                      className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none focus:border-primary/50"
                      placeholder="laws-of-motion-notes"
                      disabled={editingMaterialId !== null}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Note Title</label>
                    <input 
                      type="text" 
                      value={newMaterial.title}
                      onChange={(e) => setNewMaterial({...newMaterial, title: e.target.value})}
                      className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none focus:border-primary/50"
                      placeholder="Laws of Motion"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Subject</label>
                    <select 
                      value={newMaterial.subject}
                      onChange={(e) => setNewMaterial({...newMaterial, subject: e.target.value})}
                      className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none"
                    >
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Mathematics">Mathematics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Category</label>
                    <select 
                      value={newMaterial.category}
                      onChange={(e) => setNewMaterial({...newMaterial, category: e.target.value})}
                      className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 font-bold focus:outline-none"
                    >
                      <option value="formulas">Formula Vault</option>
                      <option value="short-notes">Short Notes</option>
                      <option value="mind-maps">Mind Maps</option>
                      <option value="cheat-sheets">Cheat Sheets</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black uppercase tracking-widest text-emerald-900/60 mb-2">Markdown Content (LaTeX & Formula Formatting Supported)</label>
                    <textarea 
                      value={newMaterial.content}
                      onChange={(e) => setNewMaterial({...newMaterial, content: e.target.value})}
                      className="w-full bg-white border border-emerald-100 rounded-xl px-4 py-3 text-emerald-950 focus:outline-none h-64 font-mono text-sm resize-y"
                      placeholder="### Chapter Summary&#10;&#10;Write formula definitions using $F = ma$ or standard Markdown..."
                      required
                    />
                  </div>
                </div>

                {/* Flashcards Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-md font-black text-emerald-950 uppercase tracking-tight">Flashcards ({flashcards.length})</h3>
                    <button 
                      type="button" 
                      onClick={handleAddFlashcard}
                      className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-emerald-200 transition-colors"
                    >
                      <Plus size={14} /> Add Card
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {flashcards.map((fc, index) => (
                      <div key={index} className="bg-emerald-50/20 border border-emerald-100 rounded-xl p-4 space-y-3 relative group">
                        <button 
                          type="button" 
                          onClick={() => handleRemoveFlashcard(index)}
                          className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={16} />
                        </button>
                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-900/40">Card #{index + 1}</div>
                        <div>
                          <input 
                            type="text" 
                            value={fc.front}
                            onChange={(e) => handleFlashcardChange(index, 'front', e.target.value)}
                            placeholder="Front question/term..."
                            className="w-full bg-white border border-emerald-50 rounded-lg px-3 py-2 text-xs font-bold focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <input 
                            type="text" 
                            value={fc.back}
                            onChange={(e) => handleFlashcardChange(index, 'back', e.target.value)}
                            placeholder="Back answer/definition..."
                            className="w-full bg-white border border-emerald-50 rounded-lg px-3 py-2 text-xs focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-100 flex items-center gap-3">
                  <button 
                    type="submit" 
                    disabled={savingMaterial}
                    className="px-8 bg-primary hover:bg-emerald-600 text-white rounded-xl py-3.5 font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {savingMaterial ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : <Save size={16} />}
                    {savingMaterial ? 'Saving to Cloud DB...' : editingMaterialId ? 'Update Note' : 'Publish Note'}
                  </button>
                  {editingMaterialId && (
                    <button
                      type="button"
                      onClick={handleCancelEditMaterial}
                      className="px-6 border border-emerald-200 text-emerald-800 rounded-xl py-3.5 font-black uppercase tracking-widest hover:bg-emerald-50 transition-all text-xs"
                    >
                      Cancel Edit
                    </button>
                  )}
                  {materialSaveMessage && (
                    <p className={`text-xs font-bold ${materialSaveMessage.includes('Error') ? 'text-red-500' : 'text-primary'}`}>
                      {materialSaveMessage}
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Existing Materials List */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50">
              <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-4">
                Cloud Published Notes ({customMaterials.length})
              </h2>
              {loadingMaterials ? (
                <div className="flex justify-center py-8">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : customMaterials.length === 0 ? (
                <p className="text-sm font-medium text-emerald-900/40 py-4 text-center">No custom study notes have been published to the cloud database yet.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {customMaterials.map((mat) => (
                    <div key={mat.id} className="p-4 bg-emerald-50/20 border border-emerald-100 rounded-2xl flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-primary/10 text-primary rounded-full">{mat.category}</span>
                          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-emerald-950 text-white rounded-full">{mat.subject}</span>
                        </div>
                        <h4 className="font-bold text-emerald-950 text-sm leading-tight">{mat.title}</h4>
                        <p className="text-[11px] font-mono text-emerald-900/40 mt-1">Slug: {mat.id}</p>
                      </div>
                      <div className="flex gap-2 border-t border-emerald-50 pt-3">
                        <button
                          onClick={() => handleLoadMaterialForEditing(mat)}
                          className="flex-1 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-1"
                        >
                          <PenSquare size={12} /> Edit Note
                        </button>
                        <button
                          onClick={() => handleDeleteMaterial(mat.id)}
                          className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                          title="Delete Note"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 5: Users list */}
        {activeTab === 'users' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <Users className="text-primary" size={24} /> 
              User Profiles
            </h2>
            
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
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
                        <td className="py-4 px-4 font-bold text-amber-500">{u.xp}</td>
                        <td className="py-4 px-4 font-bold text-indigo-500">{u.totalSolved}</td>
                        <td className="py-4 px-4 font-bold text-red-500">{u.errors}</td>
                        <td className="py-4 px-4 text-sm text-emerald-900/60">{u.lastActive}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards for comfortable user experience */}
            <div className="sm:hidden space-y-4">
              {usersList.length === 0 ? (
                <div className="text-center text-emerald-900/40 py-8">No users found or still loading...</div>
              ) : (
                usersList.map((u, i) => (
                  <div key={i} className="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100/50 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-emerald-950 leading-tight">{u.name}</h4>
                        <p className="text-xs text-emerald-900/60 truncate max-w-[200px]">{u.email}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40">Score</span>
                        <p className="font-black text-primary text-md leading-none mt-0.5">{u.score}</p>
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900/40 mt-1 block">XP</span>
                        <p className="font-black text-amber-500 text-md leading-none mt-0.5">{u.xp}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-emerald-100/40 text-[11px]">
                      <div>
                        <span className="text-emerald-900/40 font-bold uppercase tracking-wider block">ID</span>
                        <span className="font-mono text-emerald-950">{u.id.substring(0, 8)}...</span>
                      </div>
                      <div>
                        <span className="text-emerald-900/40 font-bold uppercase tracking-wider block">Errors</span>
                        <span className="font-bold text-red-500">{u.errors}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-emerald-900/40 pt-1 text-right border-t border-emerald-50/50">
                      Active: {u.lastActive}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Tab 6: User Reports */}
        
        {/* Tab 7: User Surveys */}
        {activeTab === 'surveys' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <MessageSquare className="text-primary" size={24} /> 
              User Feedback Surveys
            </h2>
            
            <div className="space-y-4">
              {surveysList.length === 0 ? (
                <div className="text-center text-emerald-900/40 py-8">No surveys found.</div>
              ) : (
                surveysList.map((s, i) => (
                  <div key={i} className="bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100/50 space-y-3">
                    <div className="flex justify-between items-start gap-2 border-b border-emerald-100 pb-2">
                      <div>
                        <div className="font-bold text-emerald-950 text-sm leading-tight break-all">{s.name}</div>
                        <div className="text-xs text-emerald-900/60">{s.email}</div>
                      </div>
                      <span className="text-[9px] text-emerald-900/40 font-mono shrink-0">{s.createdAt}</span>
                    </div>
                    {s.issues && (
                      <div className="text-xs bg-red-50/50 p-3 rounded-xl border border-red-100/30">
                        <div className="text-[9px] font-black text-red-900/60 uppercase tracking-widest mb-1">Reported Issues</div>
                        <p className="text-red-950 font-medium leading-normal whitespace-pre-wrap">{s.issues}</p>
                      </div>
                    )}
                    {s.suggestions && (
                      <div className="text-xs bg-primary/10 p-3 rounded-xl border border-primary/20">
                        <div className="text-[9px] font-black text-emerald-900/60 uppercase tracking-widest mb-1">Suggestions</div>
                        <p className="text-emerald-950 font-medium leading-normal whitespace-pre-wrap">{s.suggestions}</p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-emerald-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-black text-emerald-950 uppercase tracking-tight mb-6 flex items-center gap-3">
              <AlertTriangle className="text-red-500" size={24} /> 
              User Reports
            </h2>
            
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
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

            {/* Mobile Cards for comfortable user experience */}
            <div className="sm:hidden space-y-4">
              {reportsList.length === 0 ? (
                <div className="text-center text-emerald-900/40 py-8">No reports found.</div>
              ) : (
                reportsList.map((r, i) => (
                  <div key={i} className="bg-red-50/10 p-4 rounded-2xl border border-red-100/30 space-y-3">
                    <div className="flex justify-between items-start gap-2">
                      <div className="font-bold text-emerald-950 text-sm leading-tight break-all">{r.reporter}</div>
                      <span className="text-[9px] text-emerald-900/40 font-mono shrink-0">{r.createdAt}</span>
                    </div>
                    <div className="text-xs bg-emerald-50/30 p-2.5 rounded-xl border border-emerald-100/30">
                      {r.quizTitle ? (
                        <div>
                          <div className="text-[9px] font-black text-emerald-900/60 uppercase tracking-widest mb-1">Quiz: {r.quizTitle}</div>
                          <p className="text-emerald-950 font-medium leading-normal">{r.questionText?.substring(0, 80)}...</p>
                        </div>
                      ) : (
                        <div>
                          <div className="text-[9px] font-black text-purple-900/60 uppercase tracking-widest mb-1">Material: {r.materialTitle}</div>
                        </div>
                      )}
                    </div>
                    <p className="text-xs font-bold text-red-600 border-l-2 border-red-400 pl-2 leading-relaxed">{r.description}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, title, value }: { icon: any, title: string, value: string }) {
  return (
    <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-emerald-50 flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-emerald-900/40 leading-none">{title}</p>
        <p className="text-xl sm:text-2xl font-black text-emerald-950 mt-1.5 leading-none">{value}</p>
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
