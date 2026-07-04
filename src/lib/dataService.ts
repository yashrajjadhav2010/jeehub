import { SubjectId, Chapter, QuizSet } from '../types';
import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

// This utility will help us load questions dynamically using Vite's glob import
// It matches the folder structure requested: /questions/{subject}/{chapter}/{set}.ts

interface GlobImport {
  [key: string]: () => Promise<unknown>;
}

// Keep track of fetched custom sets to return them in loadQuizSet
let cachedCustomSets: Record<string, QuizSet> = {};

export async function loadQuizSet(subject: string, chapter: string, set: string): Promise<QuizSet | null> {
  // Check if it's a custom set from Firebase
  const customSetKey = `${subject}-${chapter}-${set}`;
  if (cachedCustomSets[customSetKey]) {
    return cachedCustomSets[customSetKey];
  }

  // 1. Try to check if there is an overridden set in Firestore with document ID = `${subject}_${chapter}_${set}`
  try {
    const cleanDocId = `${subject}_${chapter}_${set}`.toLowerCase().replace(/\s+/g, '-');
    const docRef = doc(db, 'custom_sets', cleanDocId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      let subjectId = (data.subject || subject).toLowerCase().replace(' ', '-') as SubjectId;
      if (subjectId === 'mathematics' as any) subjectId = 'maths';
      if (subjectId === 'full-syllabus' as any) subjectId = 'mock-tests';

      const chapterId = (data.chapter || chapter).toLowerCase().replace(/\s+/g, '-');
      
      const rawQuestions = data.questions || [];
      const formattedQuestions = rawQuestions.map((q: any, index: number) => ({
        id: q.id || `${set}_q_${index}`,
        question: q.question || q.text || '',
        options: q.options || [],
        answer: q.answer !== undefined ? q.answer : (q.correctOptionIndex !== undefined ? q.correctOptionIndex : 0),
        explanation: q.explanation || '',
        type: q.type || 'mcq'
      }));

      const customQuizSet: QuizSet = {
        id: set,
        title: data.title || 'Custom Test',
        description: data.description || '',
        subjectId: subjectId,
        chapterId: chapterId,
        difficulty: data.difficulty || 'medium',
        duration: data.duration || undefined,
        questions: formattedQuestions
      };
      cachedCustomSets[customSetKey] = customQuizSet;
      return customQuizSet;
    }
  } catch (e) {
    console.error("Failed to check overridden set in Firestore", e);
  }

  // 2. If it starts with custom_, it's definitely from Firebase
  if (set.startsWith('custom_')) {
    try {
      const docId = set.replace('custom_', '');
      const docRef = doc(db, 'custom_sets', docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        let subjectId = (data.subject || 'physics').toLowerCase().replace(' ', '-') as SubjectId;
        if (subjectId === 'mathematics' as any) subjectId = 'maths';
        if (subjectId === 'full-syllabus' as any) subjectId = 'mock-tests';
  
        const chapterId = (data.chapter || 'custom').toLowerCase().replace(/\s+/g, '-');
        
        const rawQuestions = data.questions || [];
        const formattedQuestions = rawQuestions.map((q: any, index: number) => ({
          id: q.id || `${set}_q_${index}`,
          question: q.question || q.text || '',
          options: q.options || [],
          answer: q.answer !== undefined ? q.answer : (q.correctOptionIndex !== undefined ? q.correctOptionIndex : 0),
          explanation: q.explanation || '',
          type: q.type || 'mcq'
        }));

        const customQuizSet: QuizSet = {
          id: set,
          title: data.title || 'Custom Test',
          description: data.description || '',
          subjectId: subjectId,
          chapterId: chapterId,
          difficulty: data.difficulty || 'medium',
          duration: data.duration || undefined,
          questions: formattedQuestions
        };
        cachedCustomSets[customSetKey] = customQuizSet;
        return customQuizSet;
      }
    } catch(e) {
      console.error("Failed to load custom test", e);
    }
  }

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
    'mock-tests': [],
    'pyq': []
  };

  const addQuizSetToSubjects = (quizSet: QuizSet) => {
    if (!quizSet || !quizSet.subjectId) return;

    let targetSubjectId = quizSet.subjectId;
    if (!subjects[targetSubjectId]) {
      // In case we map standard subjects like "Physics" to "physics"
      targetSubjectId = targetSubjectId.toLowerCase() as SubjectId;
    }
    
    const subjectChapters = subjects[targetSubjectId];
    if (!subjectChapters) return;

    let chapter = subjectChapters.find(c => c.id === quizSet.chapterId);
    
    if (!chapter) {
      chapter = {
        id: quizSet.chapterId,
        title: quizSet.chapterId.split('-').map(s => s === 'iupac' ? 'IUPAC' : s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
        subjectId: targetSubjectId,
        sets: []
      };
      subjectChapters.push(chapter);
    }
    
    // Check for duplicates/existing local sets to override
    const existingIndex = chapter.sets.findIndex(s => s.id === quizSet.id);
    if (existingIndex !== -1) {
      chapter.sets[existingIndex] = {
        id: quizSet.id,
        title: quizSet.title,
        itemCount: quizSet.questions?.length || 0,
        difficulty: quizSet.difficulty || 'medium',
        duration: quizSet.duration || undefined
      };
    } else {
      chapter.sets.push({
        id: quizSet.id,
        title: quizSet.title,
        itemCount: quizSet.questions?.length || 0,
        difficulty: quizSet.difficulty || 'medium',
        duration: quizSet.duration || undefined
      });
    }
  };

  // 1. Process local static files
  for (const path in modules) {
    const mod = modules[path];
    if (mod.default) {
      addQuizSetToSubjects(mod.default);
    }
  }

  // 2. Fetch custom sets from Firebase
  try {
    const querySnapshot = await getDocs(collection(db, 'custom_sets'));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      let subjectId = (data.subject || 'physics').toLowerCase().replace(' ', '-') as SubjectId;
      if (subjectId === 'mathematics' as any) subjectId = 'maths';
      if (subjectId === 'full-syllabus' as any) subjectId = 'mock-tests';

      const chapterId = (data.chapter || 'custom').toLowerCase().replace(/\s+/g, '-');
      
      // Check if it's an overridden local set
      let setId = `custom_${doc.id}`;
      if (doc.id.includes('_')) {
        const parts = doc.id.split('_');
        if (parts.length >= 3) {
          const docSub = parts[0];
          const docChap = parts[1];
          const docSet = parts.slice(2).join('_');
          if (docSub === subjectId && docChap === chapterId) {
            setId = docSet; // Restore original setId for overriding!
          }
        }
      }

      const rawQuestions = data.questions || [];
      const formattedQuestions = rawQuestions.map((q: any, index: number) => ({
        id: q.id || `${setId}_q_${index}`,
        question: q.question || q.text || '',
        options: q.options || [],
        answer: q.answer !== undefined ? q.answer : (q.correctOptionIndex !== undefined ? q.correctOptionIndex : 0),
        explanation: q.explanation || '',
        type: q.type || 'mcq'
      }));

      const customQuizSet: QuizSet = {
        id: setId,
        title: data.title || 'Custom Test',
        description: data.description || '',
        subjectId: subjectId,
        chapterId: chapterId,
        difficulty: data.difficulty || 'medium',
        duration: data.duration || undefined,
        questions: formattedQuestions
      };

      const customSetKey = `${subjectId}-${chapterId}-${setId}`;
      cachedCustomSets[customSetKey] = customQuizSet;
      
      addQuizSetToSubjects(customQuizSet);
    });
  } catch (error) {
    console.error("Failed to load custom sets from Firebase", error);
  }

  // 3. Sort sets
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
