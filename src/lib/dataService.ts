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

  // If it starts with custom_, it's definitely from Firebase
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
        const customQuizSet: QuizSet = {
          id: set,
          title: data.title || 'Custom Test',
          description: data.description || '',
          subjectId: subjectId,
          chapterId: chapterId,
          difficulty: 'medium',
          questions: data.questions || []
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
    
    // Check for duplicates
    if (!chapter.sets.find(s => s.id === quizSet.id)) {
      chapter.sets.push({
        id: quizSet.id,
        title: quizSet.title,
        itemCount: quizSet.questions?.length || 0,
        difficulty: quizSet.difficulty || 'medium'
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
      const setId = `custom_${doc.id}`;

      const customQuizSet: QuizSet = {
        id: setId,
        title: data.title || 'Custom Test',
        description: data.description || '',
        subjectId: subjectId,
        chapterId: chapterId,
        difficulty: 'medium', // Default for custom tests
        questions: data.questions || []
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
