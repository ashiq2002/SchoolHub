import {
  Buildings,
  CalendarBlank,
  ChartBar,
  ChalkboardTeacher,
  ChatCircleDots,
  GearSix,
  House,
  IdentificationCard,
  Money,
  SquaresFour,
  Student,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export type NavigationItem = { label: string; href: string; icon: Icon; capability?: string };
export type NavigationGroup = { label?: string; items: NavigationItem[] };

export const navigationGroups: NavigationGroup[] = [
  { items: [{ label: "Home", href: "/app/home", icon: House }] },
  {
    label: "Workspace",
    items: [
      { label: "Students", href: "/app/people/students", icon: Student, capability: "people.student.view" },
      { label: "Teachers", href: "/app/people/teachers", icon: ChalkboardTeacher, capability: "people.employee.view" },
      { label: "Attendance", href: "/app/academics/attendance", icon: IdentificationCard, capability: "academics.attendance.view" },
      { label: "Academics", href: "/app/academics", icon: SquaresFour, capability: "academics.structure.view" },
      { label: "Finance", href: "/app/finance", icon: Money, capability: "finance.fee.view" },
      { label: "People", href: "/app/people", icon: UsersThree, capability: "people.directory.view" },
    ],
  },
  {
    label: "Management",
    items: [
      { label: "Calendar", href: "/app/communications/calendar", icon: CalendarBlank, capability: "communication.calendar.view" },
      { label: "Messages", href: "/app/communications/messages", icon: ChatCircleDots, capability: "communication.message.view" },
      { label: "Reports", href: "/app/insights/reports", icon: ChartBar, capability: "insight.report.view" },
      { label: "School settings", href: "/app/admin/settings", icon: Buildings, capability: "institution.settings.manage" },
      { label: "Settings", href: "/app/admin", icon: GearSix, capability: "platform.settings.view" },
    ],
  },
];

// This fixture is replaced by capabilities returned with the authenticated session.
// It shapes the interface only; API authorization remains authoritative.
export const demoCapabilities = new Set(navigationGroups.flatMap((group) => group.items.flatMap((item) => item.capability ? [item.capability] : [])));
