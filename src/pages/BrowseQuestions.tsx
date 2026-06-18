import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ChevronRight, Hash } from 'lucide-react';
import { getAllData, loadQuizSet } from '../lib/dataService';
import { SubjectId, Chapter, QuizSet } from '../types';

interface BrowseData {
  chapter: Chapter;
  sets: QuizSet[];
}

export default function BrowseQuestions() {
  const [data, setData] = useState<Record<SubjectId, BrowseData[]>>({} as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAll() {
      try {
        const subjects = await getAllData();
        const fullData: Record<SubjectId, BrowseData[]> = {} as any;
        
        for (const [subjectId, chapters] of Object.entries(subjects)) {
          fullData[subjectId as SubjectId] = [];
          for (const chap of chapters) {
            const loadedSets = await Promise.all(
              chap.sets.map(s => loadQuizSet(subjectId, chap.id, s.id))
            );
            fullData[subjectId as SubjectId].push({
              chapter: chap,
              sets: loadedSets.filter(Boolean) as QuizSet[]
            });
          }
        }
        setData(fullData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadAll();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full min-h-screen">
      <Helmet>
        <title>Browse All Questions | JEE Tapasya</title>
        <meta name="description" content="Browse all physics, chemistry, and maths questions for JEE preparation." />
      </Helmet>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black heading-display tracking-tight text-emerald-950 uppercase italic mb-4">
          Question <span className="text-primary not-italic">Archive</span>
        </h1>
        <p className="text-emerald-900/60 font-medium max-w-2xl mx-auto">
          Directory of all practice questions. Select any question to view its detailed solution and structured explanation.
        </p>
      </div>

      <div className="space-y-16">
        {Object.entries(data).map(([subjectId, chapters]) => {
          if (chapters.length === 0) return null;
          return (
            <div key={subjectId}>
              <h2 className="text-2xl font-black text-emerald-950 capitalize flex items-center gap-3 mb-8 border-b-2 border-emerald-50 pb-4">
                <BookOpen className="text-primary" size={24} />
                {subjectId.replace('-', ' ')}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {chapters.map(({ chapter, sets }) => (
                  <div key={chapter.id} className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xl shadow-emerald-900/5 hover:border-primary/20 transition-colors">
                    <h3 className="font-bold text-lg text-emerald-950 mb-6">{chapter.title}</h3>
                    
                    <div className="space-y-6">
                      {sets.map(set => (
                        <div key={set.id}>
                          <h4 className="text-xs font-black uppercase tracking-widest text-emerald-900/40 mb-3 ml-2">
                            {set.title}
                          </h4>
                          <div className="space-y-2">
                            {set.questions.map((q, idx) => (
                              <Link 
                                key={q.id}
                                to={`/question/${subjectId}/${chapter.id}/${set.id}/${q.id}`}
                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors"
                              >
                                <div className="mt-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md shrink-0">
                                  Q{idx + 1}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-emerald-950 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                    {q.question.replace(/(\$\$?.*?\$?\$)|([*#_])/g, '')}
                                  </p>
                                </div>
                                <ChevronRight className="text-emerald-900/20 group-hover:text-primary shrink-0 transition-colors" size={16} />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
