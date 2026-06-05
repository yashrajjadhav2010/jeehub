import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  if (seconds < 60) {
    return `${seconds} Secs`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} Mins`;
  } else {
    const hours = seconds / 3600;
    return `${hours.toFixed(1)} Hrs`;
  }
}

export function calculatePredictedRank(stats: any): string {
  const totalSolved = stats?.totalSolved || 0;
  const correctAnswers = stats?.correctAnswers || 0;
  const accuracy = totalSolved > 0 ? (correctAnswers / totalSolved) : 0;
  const streak = stats?.streak || 0;

  if (totalSolved < 10) return 'UNRANKED';

  const baseAspirants = 1400000;
  const wrongAnswers = totalSolved - correctAnswers;
  const rawScore = (correctAnswers * 4) - (wrongAnswers * 1);

  if (rawScore <= 0) return `#${baseAspirants.toLocaleString()}`;

  const maxExpectedScore = 5000;
  const normalizedScore = Math.min((rawScore + (streak * 10)) / maxExpectedScore, 1.0);

  const curvePower = 4;
  let rank = 1 + (baseAspirants - 1) * Math.pow(1 - normalizedScore, curvePower);

  if (rank < 50000) {
     if (accuracy < 0.6) rank = Math.max(rank, 100000);
     else if (accuracy < 0.8) rank = Math.max(rank, 50000);
     else if (accuracy < 0.9) rank = Math.max(rank, 10000);
  }

  return `#${Math.max(1, Math.floor(rank)).toLocaleString()}`;
}
