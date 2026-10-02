export const REVIEW_INTERVALS = [1, 3, 7, 14, 30];

export function calculateNextReview(level = 0, daysSinceLastReview = 0): Date {
  const interval = REVIEW_INTERVALS[Math.min(level, REVIEW_INTERVALS.length - 1)] ?? 1;
  const next = new Date();
  const offset = Math.max(interval, 1) + Math.max(daysSinceLastReview, 0);
  next.setDate(next.getDate() + offset);
  return next;
}

export function calculateStreak(history: number[]): number {
  if (!history.length) return 0;

  let streak = 0;
  for (let i = history.length - 1; i >= 0; i -= 1) {
    if (history[i] > 0) {
      streak += 1;
    } else {
      break;
    }
  }

  return streak;
}

export function calculateProgress(completed: number, total: number): number {
  if (!total) return 0;
  return Math.min(100, Math.max(0, Math.round((completed / total) * 100)));
}

export function calculateDueTasks<T extends { due?: string | null }>(items: T[]): number {
  const now = new Date();
  return items.filter((item) => {
    if (!item.due) return false;
    const normalized = new Date(item.due);
    return !Number.isNaN(normalized.getTime()) && normalized <= now;
  }).length;
}

export function calculateWeakTopics<T extends { score: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.score - b.score).slice(0, 3);
}

export function calculateHabitCompletion<T extends { completed: number; total: number }>(items: T[]): number {
  const totalCompleted = items.reduce((sum, item) => sum + item.completed, 0);
  const totalNeeded = items.reduce((sum, item) => sum + item.total, 0);
  return totalNeeded === 0 ? 0 : Math.round((totalCompleted / totalNeeded) * 100);
}

export function calculateStudyStats<T extends { value: number }>(items: T[]) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  const average = items.length ? total / items.length : 0;
  const best = items.length ? Math.max(...items.map((item) => item.value)) : 0;

  return {
    total,
    average,
    best,
  };
}
