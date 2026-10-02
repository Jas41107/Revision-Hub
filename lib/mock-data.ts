export const dashboardStats = [
  { label: "Study hours", value: "18.4h", change: "+12%", tone: "sky" },
  { label: "Revision score", value: "89%", change: "+4%", tone: "emerald" },
  { label: "Due today", value: "7", change: "-2", tone: "amber" },
  { label: "Habit streak", value: "21 days", change: "+3", tone: "violet" },
];

export const achievementVault = [
  {
    icon: "🥉",
    title: "First Problem",
    description: "Solved your first problem",
    unlockDate: "Oct 2, 2026",
    unlocked: true,
    progress: 100,
  },
  {
    icon: "🔥",
    title: "7 Day Streak",
    description: "Maintained a 7-day streak",
    unlockDate: "Oct 9, 2026",
    unlocked: true,
    progress: 100,
  },
  {
    icon: "🔒",
    title: "DSA Grinder",
    description: "Solve 50 DSA problems",
    unlockDate: "In progress",
    unlocked: false,
    progress: 74,
    current: "37 / 50",
  },
];

export const studyTrend = [
  { day: "Mon", value: 52 },
  { day: "Tue", value: 64 },
  { day: "Wed", value: 76 },
  { day: "Thu", value: 72 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 90 },
  { day: "Sun", value: 96 },
];

export const revisionQueue = [
  { title: "Arrays & Hashing", topic: "DSA", due: "Today, 6:30 PM", strength: 82 },
  { title: "Pointers", topic: "C Programming", due: "Today, 8:00 PM", strength: 74 },
  { title: "Dynamic Programming", topic: "Learning", due: "Tomorrow, 9:00 AM", strength: 67 },
  { title: "LinkedIn post draft", topic: "LinkedIn", due: "Tomorrow, 12:00 PM", strength: 91 },
];

export const weakTopics = [
  { name: "Recursion", score: 48, trend: "Needs review" },
  { name: "Trees", score: 53, trend: "Improving" },
  { name: "Memory management", score: 56, trend: "Practice" },
  { name: "Graphs", score: 59, trend: "Review soon" },
];

export const learningTasks = [
  { title: "Finish bitwise operations notes", status: "In progress", progress: 72, due: "Today" },
  { title: "Solve 3 heap problems", status: "Planned", progress: 36, due: "Tomorrow" },
  { title: "Revise C strings module", status: "Due soon", progress: 64, due: "Thu" },
  { title: "Review dynamic programming patterns", status: "Completed", progress: 100, due: "Done" },
];

export const habits = [
  { name: "Deep work", completed: 5, total: 7 },
  { name: "Revision sprint", completed: 4, total: 6 },
  { name: "Read & reflect", completed: 6, total: 7 },
  { name: "Contest practice", completed: 2, total: 5 },
];

export const dsaTopics = [
  { name: "Arrays", mastery: 88 },
  { name: "Hashing", mastery: 80 },
  { name: "Trees", mastery: 58 },
  { name: "Graphs", mastery: 49 },
  { name: "DP", mastery: 64 },
];

export const cTopics = [
  { name: "Pointers", mastery: 76 },
  { name: "Structs", mastery: 82 },
  { name: "Memory allocation", mastery: 53 },
  { name: "File I/O", mastery: 72 },
  { name: "Bitwise operations", mastery: 69 },
];

export const contestSchedule = [
  { name: "CodeChef Weekly", date: "Fri 8:00 PM", type: "Rated" },
  { name: "LeetCode Sprint", date: "Sun 10:00 AM", type: "Practice" },
  { name: "Hackerrank Challenge", date: "Mon 8:30 PM", type: "Warmup" },
];
