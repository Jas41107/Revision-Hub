import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateDueTasks,
  calculateHabitCompletion,
  calculateNextReview,
  calculateProgress,
  calculateStreak,
  calculateStudyStats,
  calculateWeakTopics,
} from "./calculations.js";

test("calculateNextReview advances based on review interval", () => {
  const next = calculateNextReview(2, 3);
  assert.ok(next instanceof Date);
  const daysAhead = Math.round((next.getTime() - Date.now()) / 86400000);
  assert.ok(daysAhead >= 7 && daysAhead <= 12);
});

test("calculateStreak counts consecutive completed sessions", () => {
  assert.equal(calculateStreak([1, 1, 1, 0, 1, 1]), 2);
  assert.equal(calculateStreak([1, 1, 1, 1]), 4);
  assert.equal(calculateStreak([]), 0);
});

test("calculateProgress clamps percent values", () => {
  assert.equal(calculateProgress(3, 5), 60);
  assert.equal(calculateProgress(9, 5), 100);
  assert.equal(calculateProgress(0, 0), 0);
});

test("calculateDueTasks counts items due by now", () => {
  const items = [{ due: new Date(Date.now() - 60_000).toISOString() }, { due: new Date(Date.now() + 60_000).toISOString() }];
  assert.equal(calculateDueTasks(items), 1);
});

test("calculateWeakTopics picks the weakest topics", () => {
  const items = [{ score: 78 }, { score: 44 }, { score: 59 }, { score: 71 }];
  const result = calculateWeakTopics(items);
  assert.deepEqual(result.map((item) => item.score), [44, 59, 71]);
});

test("calculateHabitCompletion sums completed tasks across habits", () => {
  const items = [
    { completed: 5, total: 7 },
    { completed: 3, total: 5 },
    { completed: 4, total: 7 },
  ];
  assert.equal(calculateHabitCompletion(items), 63);
});

test("calculateStudyStats reports total and average values", () => {
  const result = calculateStudyStats([{ value: 10 }, { value: 30 }, { value: 50 }]);
  assert.equal(result.total, 90);
  assert.equal(result.average, 30);
  assert.equal(result.best, 50);
});
