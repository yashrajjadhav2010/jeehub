export type SubjectId = 'physics' | 'chemistry' | 'maths';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'pyq';

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
  difficulty?: Difficulty;
}

export interface QuizSet {
  id: string;
  title: string;
  chapterId: string;
  subjectId: SubjectId;
  questions: Question[];
  difficulty?: Difficulty;
}

export interface Chapter {
  id: string;
  title: string;
  subjectId: SubjectId;
  sets: QuizSetMetadata[];
}

export interface QuizSetMetadata {
  id: string;
  title: string;
  itemCount: number;
  difficulty?: Difficulty;
}

export interface UserStats {
  totalSolved: number;
  correctAnswers: number;
  totalTime: number; // in seconds
  streak: number;
  missionsCompleted?: number;
  lastPracticeDate: string | null;
  subjectProgress: Record<SubjectId, number>; // total questions solved per subject
  chapterAccuracy: Record<string, number>; // accuracy per chapter
  weakTopics: string[];
  strongTopics: string[];
  dailyActivity?: Record<string, number>;
}

export interface QuizResult {
  totalScore: number;
  totalQuestions: number;
  correct: number;
  wrong: number;
  skipped: number;
  timeTaken: number;
  accuracy: number;
  answers: {
    questionId: string;
    selectedOption: number | null;
    isCorrect: boolean;
  }[];
}
