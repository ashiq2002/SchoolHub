import {
  ArrowDown,
  ArrowUp,
  BookOpenText,
  CalendarCheck,
  Clock,
  CurrencyDollar,
  Exam,
  IdentificationBadge,
  Student,
  UsersThree,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";

export const metrics = [
  { label: "Total students", value: "1,284", note: "vs. last month", delta: "+3.2%", trend: "up", icon: Student, tone: "blue" },
  { label: "Teachers", value: "86", note: "2 on leave today", delta: "Active", trend: "neutral", icon: UsersThree, tone: "violet" },
  { label: "Attendance today", value: "94.6%", note: "vs. yesterday", delta: "+1.4%", trend: "up", icon: CalendarCheck, tone: "green" },
  { label: "Fee collection", value: "৳ 8.42L", note: "72% of monthly target", delta: "72%", trend: "progress", icon: CurrencyDollar, tone: "amber" },
] as const;

export const tasks = [
  { title: "Approve leave requests", meta: "5 pending requests", icon: Clock, tone: "amber" },
  { title: "Review attendance exceptions", meta: "12 students need attention", icon: WarningCircle, tone: "red" },
  { title: "Publish mid-term results", meta: "Grade 8 · Due tomorrow", icon: Exam, tone: "blue" },
  { title: "Complete teacher profiles", meta: "3 profiles are incomplete", icon: IdentificationBadge, tone: "violet" },
] as const;

export const schedule = [
  { time: "08:00", period: "Period 1", title: "Mathematics", detail: "Grade 10 · Section A", room: "Room 201", status: "Completed" },
  { time: "09:00", period: "Period 2", title: "Physics", detail: "Grade 9 · Section B", room: "Lab 2", status: "In progress" },
  { time: "10:15", period: "Period 3", title: "English", detail: "Grade 8 · Section A", room: "Room 104", status: "Upcoming" },
  { time: "11:15", period: "Period 4", title: "Faculty meeting", detail: "Academic coordination", room: "Meeting room", status: "Upcoming" },
] as const;

export const activity = [
  { text: "Nadia Rahman marked attendance", context: "Grade 7 · Section B", time: "8 min ago", icon: CalendarCheck, tone: "green" },
  { text: "Fee payment received", context: "Rafi Islam · Invoice #INV-2048", time: "24 min ago", icon: CurrencyDollar, tone: "blue" },
  { text: "New assignment published", context: "Physics · Grade 9", time: "46 min ago", icon: BookOpenText, tone: "violet" },
  { text: "Attendance dropped below target", context: "Grade 6 · Section C", time: "1 hr ago", icon: ArrowDown, tone: "red" },
] as const;

export { ArrowUp };
