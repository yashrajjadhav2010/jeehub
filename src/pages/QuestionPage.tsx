import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ArrowLeft, BookOpen, CheckCircle2, Search, Zap } from 'lucide-react';
import { loadQuizSet } from '../lib/dataService';
import { QuizSet, Question } from '../types';

export default function QuestionPage() {
  const { subjectId, chapterId, setId, questionId } = useParams<{ subjectId: string; chapterId: string; setId: string; questionId: string }>();
  const [quizSet, setQuizSet] = useState<QuizSet | null>(null);
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      if (!subjectId || !chapterId || !setId || !questionId) return;
      try {
        const set = await loadQuizSet(subjectId, chapterId, setId);
        if (set) {
          setQuizSet(set);
          const q = set.questions.find(q => q.id === questionId);
          if (q) setQuestion(q);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [subjectId, chapterId, setId, questionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!question || !quizSet) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 text-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-emerald-950">Question not found</h1>
        <Link to="/" className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform uppercase tracking-widest text-xs">
          Return Home
        </Link>
      </div>
    );
  }

  // Generate plain text question for meta tags (stripping markdown simply for description)
  const plainTextQuestion = question.question.replace(/(\$\$?.*?\$?\$)|([*#_])/g, '').substring(0, 150) + '...';

  // Build JSON-LD structured data
  // QAPage schema requires a Question and an Answer
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": `Question from ${quizSet.title}`,
      "text": question.question,
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": question.type === 'integer' 
          ? String(question.answer)
          : (question.options ? question.options[question.answer] : ''),
        "url": typeof window !== 'undefined' ? window.location.href : '',
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full min-h-screen flex flex-col">
      <Helmet>
        <title>{`Question: ${quizSet.title} | JEE Tapasya`}</title>
        <meta name="description" content={plainTextQuestion} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="mb-8">
        <Link 
          to={`/browse`}
          className="inline-flex items-center gap-2 text-emerald-900/60 hover:text-primary transition-colors font-medium text-sm bg-white/50 px-4 py-2 rounded-xl border border-emerald-50"
        >
          <Search size={16} />
          Browse All Questions
        </Link>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-emerald-900/5 border border-emerald-100 flex-1">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-emerald-50">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <BookOpen className="text-primary" size={20} />
          </div>
          <div>
            <h1 className="font-bold text-emerald-950 capitalize">{subjectId} • {chapterId.replace(/-/g, ' ')}</h1>
            <p className="text-sm font-medium text-emerald-900/40 uppercase tracking-widest">{quizSet.title}</p>
          </div>
        </div>

        <div className="prose prose-emerald max-w-none mb-12">
           <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex]}
           >
              {question.question}
           </ReactMarkdown>
        </div>

        {question.options && question.options.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {question.options.map((opt, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border-2 transition-colors ${idx === question.answer ? 'border-primary bg-primary/5' : 'border-emerald-50 bg-emerald-50/30'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${idx === question.answer ? 'bg-primary text-white' : 'bg-emerald-100 text-emerald-900/60'}`}>
                    <span className="text-xs font-black uppercase">{String.fromCharCode(65 + idx)}</span>
                  </div>
                  <div className="flex-1 prose prose-sm prose-emerald">
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {opt}
                    </ReactMarkdown>
                  </div>
                  {idx === question.answer && (
                    <CheckCircle2 className="text-primary shrink-0" size={20} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {question.type === 'integer' && (
          <div className="mb-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
            <p className="text-sm font-black text-emerald-900/60 uppercase tracking-widest mb-2">Numerical Answer</p>
            <p className="text-2xl font-black text-emerald-950">{question.answer}</p>
          </div>
        )}

        {question.explanation && (
          <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-100">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-amber-500" size={18} />
              <h3 className="font-bold text-amber-900">Solution</h3>
            </div>
            <div className="prose prose-sm prose-amber max-w-none">
               <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkMath]}
                  rehypePlugins={[rehypeKatex]}
               >
                  {question.explanation}
               </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
