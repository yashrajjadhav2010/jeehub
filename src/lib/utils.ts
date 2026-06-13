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

export function calculatePredictedRank(stats: any): number {
  const totalSolved = stats?.totalSolved || 0;
  const correctAnswers = stats?.correctAnswers || 0;
  
  if (totalSolved < 10) return 0; // 0 indicates UNRANKED

  const wrongAnswers = totalSolved - correctAnswers;
  const currentMarks = (correctAnswers * 4) - (wrongAnswers * 1);
  
  // Project to 300 marks (75 questions limit approximation)
  let expectedMarks = (currentMarks / totalSolved) * 75;

  if (expectedMarks >= 288) return 50; // Special case: Rank 1-50 Contender

  const moderateShiftMap = [
    { marks: 288, percentile: 99.999 },
    { marks: 265, percentile: 99.99 },
    { marks: 230, percentile: 99.90 },
    { marks: 210, percentile: 99.70 },
    { marks: 198, percentile: 99.50 },
    { marks: 178, percentile: 99.00 },
    { marks: 165, percentile: 98.50 },
    { marks: 153, percentile: 98.00 },
    { marks: 144, percentile: 97.50 },
    { marks: 135, percentile: 97.00 },
    { marks: 123, percentile: 96.00 },
    { marks: 113, percentile: 95.00 },
    { marks: 100, percentile: 93.50 },
    { marks: 88, percentile: 90.00 },
    { marks: 75, percentile: 85.00 },
    { marks: 64, percentile: 80.00 },
    { marks: 15, percentile: 15.00 },
    { marks: -75, percentile: 0.00 },
  ];

  let calculatedPercentile = 0;
  for (let i = 0; i < moderateShiftMap.length - 1; i++) {
     const upper = moderateShiftMap[i];
     const lower = moderateShiftMap[i + 1];
     if (expectedMarks >= lower.marks) {
        if (expectedMarks >= upper.marks) {
           calculatedPercentile = upper.percentile;
        } else {
           const fraction = (expectedMarks - lower.marks) / (upper.marks - lower.marks);
           calculatedPercentile = lower.percentile + fraction * (upper.percentile - lower.percentile);
        }
        break;
     }
  }

  if (expectedMarks <= 15) {
     calculatedPercentile = Math.max(0, Math.min(15.0, calculatedPercentile));
  }

  const defaultCandidates = 1400000;
  const rank = Math.max(1, ((100.0 - calculatedPercentile) * defaultCandidates) / 100.0);

  return Math.floor(rank);
}

export function formatRank(rank: number): string {
  if (rank === 0) return 'UNRANKED';
  if (rank <= 50) return '1 - 50';
  return `#${rank.toLocaleString()}`;
}

export function getAdmissionBenchmark(rank: number): string {
  if (rank === 0) return 'Complete more problems to predict rank';
  if (rank <= 140) return 'Top 100 / Absolute Merit Elite';
  if (rank <= 1400) return 'Top 3 NITs (CSE Core Tier-1)';
  if (rank <= 4200) return 'Top 5 NITs (CSE / Top Circuitals)';
  if (rank <= 7000) return 'Top 10 NITs (CSE / IT / ECE)';
  if (rank <= 14000) return 'Top 15 NITs (Core Circuitals)';
  if (rank <= 21000) return 'Mid-Tier NITs (Core Circuitals)';
  if (rank <= 28000) return 'Top 20 NITs (Mechanical / Civil / Chemical)';
  if (rank <= 35000) return 'Lower NITs (Circuitals) / IIITs Core';
  if (rank <= 42000) return 'Top GFTIs / Mid-Tier IIIT Branches';
  if (rank <= 56000) return 'State Top Engineering College Merit List';
  if (rank <= 70000) return 'Safe General Category Qualification Line';
  if (rank <= 91000) return 'General (UR) Cut-off Boundary Pool';
  if (rank <= 140000) return 'Reserved Category Tier-1 Admissions';
  if (rank <= 210000) return 'Private Universities / State Quota Pools';
  if (rank <= 280000) return 'State Spot Round Allotments Only';
  return 'Keep practicing to improve your rank';
}
