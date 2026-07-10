const fs = require('fs');
let code = fs.readFileSync('src/pages/Subjects.tsx', 'utf-8');

// The unifiedCards array is used before it is defined, inside useMemo.
// Move the unifiedCards array definition above the searchResults useMemo.

const unifiedCardsDefinition = `
  const unifiedCards = [
    {
      id: 'physics' as SubjectId,
      link: \`/subjects/physics\`,
      title: 'Physics',
      shortTitle: 'PHY-01',
      desc: 'Master the laws of nature from Mechanics to Modern Physics. Detailed simulations and conceptual deep-dives.',
      img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=800',
      icon: Zap,
      color: 'bg-emerald-950',
      accentColor: 'text-emerald-400',
      btnColor: 'bg-emerald-500',
      stats: \`\${allChapters.physics.reduce((acc, c) => acc + c.sets.length, 0)} Units\`,
      score: \`\${userStats.subjectProgress.physics || 0}%\`,
      status: userStats.subjectProgress.physics > 80 ? 'Advanced' : userStats.subjectProgress.physics > 0 ? 'Active' : 'Initiate',
      span: 'md:col-span-12 lg:col-span-8',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl lg:text-5xl',
      delay: 0.1
    },
    {
      id: 'chemistry' as SubjectId,
      link: \`/subjects/chemistry\`,
      title: 'Chemistry',
      shortTitle: 'CHM-02',
      desc: 'Understand atoms, molecules and complex reactions. Focus on Organic synthesis and Inorganic trends.',
      img: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800',
      icon: FlaskConical,
      color: 'bg-[#1a0f0a]',
      accentColor: 'text-amber-500',
      btnColor: 'bg-amber-600',
      stats: \`\${allChapters.chemistry.reduce((acc, c) => acc + c.sets.length, 0)} Units\`,
      score: \`\${userStats.subjectProgress.chemistry || 0}%\`,
      status: userStats.subjectProgress.chemistry > 80 ? 'Advanced' : userStats.subjectProgress.chemistry > 0 ? 'Active' : 'Standby',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.2
    },
    {
      id: 'maths' as SubjectId,
      link: \`/subjects/maths\`,
      title: 'Mathematics',
      shortTitle: 'MAT-03',
      desc: 'Build logical reasoning and problem-solving speed. Advanced Calculus and Algebra mastery.',
      img: 'https://images.unsplash.com/photo-1509228468518-180dd482195e?auto=format&fit=crop&q=80&w=800',
      icon: Binary,
      color: 'bg-red-950',
      accentColor: 'text-red-400',
      btnColor: 'bg-red-500',
      stats: \`\${allChapters.maths.reduce((acc, c) => acc + c.sets.length, 0)} Units\`,
      score: \`\${userStats.subjectProgress.maths || 0}%\`,
      status: userStats.subjectProgress.maths > 80 ? 'Advanced' : userStats.subjectProgress.maths > 0 ? 'Active' : 'Baseline',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.3
    },
    {
      id: 'pyq' as any,
      link: \`/subjects/pyq\`,
      title: 'Previous Year',
      shortTitle: 'PYQ-04',
      desc: 'Master real patterns. Attempt authentic historical questions from past main and advanced papers.',
      img: 'https://images.unsplash.com/photo-1555529902-5261145633bf?auto=format&fit=crop&q=80&w=1200',
      icon: Clock,
      color: 'bg-blue-950',
      accentColor: 'text-blue-400',
      btnColor: 'bg-blue-600',
      stats: \`\${allChapters.pyq.reduce((acc, c) => acc + c.sets.length, 0)} Exams\`,
      score: \`0%\`,
      status: 'Historical',
      span: 'md:col-span-6 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.4
    },
    {
      id: 'mock-tests' as any,
      link: \`/mock-tests\`,
      title: 'Mock Tests',
      shortTitle: 'SIM-05',
      desc: 'Test your readiness against complete 3-hour standard rigorous exams out of your comfort zone.',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      icon: Target,
      color: 'bg-purple-950',
      accentColor: 'text-purple-400',
      btnColor: 'bg-purple-600',
      stats: \`\${allChapters['mock-tests']?.reduce((acc, c) => acc + c.sets.length, 0) || 0} Simulations\`,
      score: \`0%\`,
      status: 'Simulation',
      span: 'md:col-span-12 lg:col-span-4',
      height: 'h-[320px] lg:h-[380px]',
      titleClass: 'text-4xl',
      delay: 0.5
    }
  ];
`;

const extractTarget = (text, startMarker, endMarker) => {
    const startIndex = text.indexOf(startMarker);
    const endIndex = text.indexOf(endMarker, startIndex) + endMarker.length;
    return text.substring(startIndex, endIndex);
};

const originalUnifiedCards = extractTarget(code, "const unifiedCards = [", "];");

// Delete original definition
code = code.replace(originalUnifiedCards, "");

// Add new definition before searchResults
code = code.replace("const searchResults = useMemo(() => {", unifiedCardsDefinition + "\\n  const searchResults = useMemo(() => {");

fs.writeFileSync('src/pages/Subjects.tsx', code);
console.log("Moved unifiedCards up");
