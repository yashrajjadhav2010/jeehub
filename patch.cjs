const fs = require('fs');
let code = fs.readFileSync('src/pages/Quiz.tsx', 'utf-8');

// 1. Initial time setting
code = code.replace(
  /const defaultDuration = subjectId === 'mock-tests' \|\| subjectId === 'pyq' \? 10800 : data\.questions\.length \* 90;/g,
  `const defaultDuration = subjectId === 'mock-tests' ? 10800 : (subjectId === 'pyq' ? 0 : data.questions.length * 90);`
);

// 2. Timer effect
code = code.replace(
  `  useEffect(() => {
    if (timeLeft <= 0 || isFinished || !isStarted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setQuestionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isStarted]);`,
  `  useEffect(() => {
    if (isFinished || !isStarted) return;
    const isPyq = subjectId === 'pyq';
    if (!isPyq && timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => isPyq ? prev + 1 : prev - 1);
      setQuestionTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished, isStarted, subjectId]);`
);

// 3. Time taken
code = code.replace(
  `      timeTaken: (quizSet?.duration ? quizSet.duration * 60 : (quizSet?.questions.length || 0) * 90) - timeLeft,`,
  `      timeTaken: subjectId === 'pyq' ? timeLeft : (quizSet?.duration ? quizSet.duration * 60 : (subjectId === 'mock-tests' ? 10800 : (quizSet?.questions.length || 0) * 90)) - timeLeft,`
);

// 4. Auto finish at 0
code = code.replace(
  `  useEffect(() => {
    if (isStarted && !isFinished && timeLeft === 0 && quizSet) {
      handleFinish();
    }
  }, [timeLeft, isStarted, isFinished, handleFinish, quizSet]);`,
  `  useEffect(() => {
    if (isStarted && !isFinished && timeLeft === 0 && quizSet && subjectId !== 'pyq') {
      handleFinish();
    }
  }, [timeLeft, isStarted, isFinished, handleFinish, quizSet, subjectId]);`
);

// 5. Briefing duration
code = code.replace(
  `             <span className="text-sm font-bold uppercase">{formatTime(quizSet.duration ? quizSet.duration * 60 : quizSet.questions.length * 90)}</span>`,
  `             <span className="text-sm font-bold uppercase">{subjectId === 'pyq' ? 'No Time Limit' : formatTime(quizSet.duration ? quizSet.duration * 60 : quizSet.questions.length * 90)}</span>`
);

// 6. Header T-minus
code = code.replace(
  `             <span className="text-[8px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1 md:mb-2 hidden md:block">T-Minus Remaining</span>`,
  `             <span className="text-[8px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1 md:mb-2 hidden md:block">{subjectId === 'pyq' ? 'Time Elapsed' : 'T-Minus Remaining'}</span>`
);
code = code.replace(
  `             <span className="text-[7px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1">Grand Timer</span>`,
  `             <span className="text-[7px] font-black uppercase tracking-widest text-emerald-700/40 leading-none mb-1">{subjectId === 'pyq' ? 'Elapsed' : 'Grand Timer'}</span>`
);

fs.writeFileSync('src/pages/Quiz.tsx', code);
console.log('Patched Quiz.tsx successfully!');
