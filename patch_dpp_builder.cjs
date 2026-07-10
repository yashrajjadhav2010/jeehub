const fs = require('fs');
const code = `import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Settings, Play, ArrowLeft, Target, Book, BrainCircuit, CheckCircle2, Circle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { getQuestions, getAllData } from '../lib/dataService';
import { SubjectId, Chapter } from '../types';

export default function DPPBuilder() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState<SubjectId>('physics');
  const [difficulty, setDifficulty] = useState('medium');
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [onlyCustom, setOnlyCustom] = useState(false);

  useEffect(() => {
    getAllData().then(data => {
      const subjectChapters = data[subject] || [];
      setChapters(subjectChapters);
      setSelectedChapters([]); // Reset on subject change
    });
  }, [subject]);

  const toggleChapter = (chapterId: string) => {
    setSelectedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const selectAllChapters = () => {
    setSelectedChapters(chapters.map(c => c.id));
  };

  const deselectAllChapters = () => {
    setSelectedChapters([]);
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const allQuestions = await getQuestions();
      const filtered = allQuestions.filter(q => {
        if (q.subjectId !== subject) return false;
        if (difficulty !== 'all' && q.difficulty && q.difficulty !== difficulty) return false;
        if (selectedChapters.length > 0 && !selectedChapters.includes(q.chapterId)) return false;
        if (onlyCustom && !q.isCustom) return false;
        return true;
      });

      const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, count);

      if (selected.length === 0) {
        alert("Not enough questions in the bank for these criteria. Try selecting more chapters or lowering the question count.");
        setLoading(false);
        return;
      }

      const setId = \`dpp-\${Date.now()}\`;
      const dppSet = {
        id: setId,
        title: \`Custom DPP: \${subject.toUpperCase()}\`,
        subjectId: subject,
        chapterId: 'dpp',
        questions: selected,
        duration: count * 3, // 3 mins per question
        difficulty: difficulty === 'all' ? 'medium' : difficulty,
      };

      localStorage.setItem(\`quiz_dpp_dpp_\${setId}\`, JSON.stringify(dppSet));
      navigate(\`/quiz/\${subject}/dpp/\${setId}\`);
    } catch (e) {
      console.error(e);
      alert("Failed to generate DPP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link to="/study" className="p-2 hover:bg-emerald-50 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-emerald-700" />
        </Link>
        <div>
          <h1 className="text-3xl font-black text-emerald-950 uppercase tracking-tight flex items-center gap-3">
            <Settings className="w-7 h-7 text-emerald-600" />
            Custom DPP Builder
          </h1>
          <p className="text-sm font-medium text-emerald-600/60 uppercase tracking-widest mt-1">
            Generate on-demand practice tests
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-emerald-100 p-8 shadow-sm space-y-8">
        <div className="space-y-4">
          <label className="text-sm font-bold uppercase tracking-widest text-emerald-950 flex items-center gap-2">
            <Book className="w-4 h-4 text-emerald-600" />
            Subject
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['physics', 'chemistry', 'maths'].map(sub => (
              <button
                key={sub}
                onClick={() => setSubject(sub as SubjectId)}
                className={cn(
                  "py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all",
                  subject === sub ? "bg-emerald-900 text-white shadow-md" : "bg-emerald-50 text-emerald-900/60 hover:bg-emerald-100"
                )}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-bold uppercase tracking-widest text-emerald-950 flex items-center gap-2">
              <Book className="w-4 h-4 text-emerald-600" />
              Chapters (Optional)
            </label>
            <div className="flex items-center gap-2">
              <button onClick={selectAllChapters} className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">Select All</button>
              <button onClick={deselectAllChapters} className="text-[10px] font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">Clear</button>
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto space-y-2 border border-emerald-100 rounded-xl p-2 hide-scrollbar">
            {chapters.length === 0 && <p className="text-center text-xs text-emerald-900/40 py-4 uppercase font-bold tracking-widest">Loading chapters...</p>}
            {chapters.map(chapter => (
              <button
                key={chapter.id}
                onClick={() => toggleChapter(chapter.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors",
                  selectedChapters.includes(chapter.id) ? "bg-emerald-100" : "hover:bg-emerald-50"
                )}
              >
                <span className={cn(
                  "text-sm font-bold",
                  selectedChapters.includes(chapter.id) ? "text-emerald-900" : "text-emerald-900/70"
                )}>
                  {chapter.title}
                </span>
                {selectedChapters.includes(chapter.id) ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Circle className="w-5 h-5 text-emerald-900/20" />
                )}
              </button>
            ))}
          </div>
          <p className="text-[10px] font-medium text-emerald-900/50 uppercase tracking-widest">
            {selectedChapters.length === 0 ? "All chapters will be included" : \`\${selectedChapters.length} chapter(s) selected\`}
          </p>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold uppercase tracking-widest text-emerald-950 flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600" />
            Difficulty
          </label>
          <div className="grid grid-cols-4 gap-3">
            {['all', 'easy', 'medium', 'hard'].map(diff => (
              <button
                key={diff}
                onClick={() => setDifficulty(diff)}
                className={cn(
                  "py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all",
                  difficulty === diff ? "bg-emerald-900 text-white shadow-md" : "bg-emerald-50 text-emerald-900/60 hover:bg-emerald-100"
                )}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold uppercase tracking-widest text-emerald-950 flex items-center gap-2">
            <Settings className="w-4 h-4 text-emerald-600" />
            Source
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setOnlyCustom(false)}
              className={cn(
                "py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all",
                !onlyCustom ? "bg-emerald-900 text-white shadow-md" : "bg-emerald-50 text-emerald-900/60 hover:bg-emerald-100"
              )}
            >
              All Questions
            </button>
            <button
              onClick={() => setOnlyCustom(true)}
              className={cn(
                "py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all",
                onlyCustom ? "bg-emerald-900 text-white shadow-md" : "bg-emerald-50 text-emerald-900/60 hover:bg-emerald-100"
              )}
            >
              Only Added/Custom
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-sm font-bold uppercase tracking-widest text-emerald-950 flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-emerald-600" />
            Number of Questions
          </label>
          <div className="grid grid-cols-4 gap-3">
            {[5, 10, 15, 25].map(num => (
              <button
                key={num}
                onClick={() => setCount(num)}
                className={cn(
                  "py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all",
                  count === num ? "bg-emerald-900 text-white shadow-md" : "bg-emerald-50 text-emerald-900/60 hover:bg-emerald-100"
                )}
              >
                {num} Qs
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-4 rounded-xl bg-emerald-600 text-white font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-md disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate DPP"}
          {!loading && <Play className="w-5 h-5 fill-current" />}
        </button>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/pages/DPPBuilder.tsx', code);
console.log('DPPBuilder.tsx rewritten');
