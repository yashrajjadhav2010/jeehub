import { SubjectId, Chapter, QuizSet } from '../types';

// This utility will help us load questions dynamically using Vite's glob import
// It matches the folder structure requested: /questions/{subject}/{chapter}/{set}.ts

interface GlobImport {
  [key: string]: () => Promise<unknown>;
}

export async function loadQuizSet(subject: string, chapter: string, set: string): Promise<QuizSet | null> {
  try {
    // In React/Vite, we can use import.meta.glob for dynamic loading
    const modules = import.meta.glob('/src/questions/**/*.ts') as GlobImport;
    const path = `/src/questions/${subject}/${chapter}/${set}.ts`;
    
    if (modules[path]) {
      const mod = await modules[path]() as { default: QuizSet };
      return mod.default;
    }
    return null;
  } catch (error) {
    console.error(`Failed to load quiz set: ${subject}/${chapter}/${set}`, error);
    return null;
  }
}

export async function getAllData() {
  const modules = import.meta.glob('/src/questions/**/*.ts', { eager: true }) as Record<string, { default: QuizSet }>;
  
  const subjects: Record<SubjectId, Chapter[]> = {
    physics: [],
    chemistry: [],
    maths: [],
    'mock-tests': []
  };

  for (const path in modules) {
    const mod = modules[path];
    const quizSet = mod.default;
    
    if (!quizSet || !quizSet.subjectId) continue;

    const subjectChapters = subjects[quizSet.subjectId];
    let chapter = subjectChapters.find(c => c.id === quizSet.chapterId);
    
    if (!chapter) {
      chapter = {
        id: quizSet.chapterId,
        title: quizSet.chapterId.split('-').map(s => s === 'iupac' ? 'IUPAC' : s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        subjectId: quizSet.subjectId,
        sets: []
      };
      subjectChapters.push(chapter);
    }
    
    chapter.sets.push({
      id: quizSet.id,
      title: quizSet.title,
      itemCount: quizSet.questions.length,
      difficulty: quizSet.difficulty
    });
  }

  for (const subjectId in subjects) {
    subjects[subjectId as SubjectId].forEach(chapter => {
      chapter.sets.sort((a, b) => {
        if (a.difficulty === 'pyq' && b.difficulty !== 'pyq') return 1;
        if (a.difficulty !== 'pyq' && b.difficulty === 'pyq') return -1;
        return a.id.localeCompare(b.id);
      });
    });
  }

  return subjects;
}
