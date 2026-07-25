import type { Metadata } from "next";
import { CalendarWorkspace } from "@/features/core-operations/calendar-tabs-workspace";
export const metadata: Metadata = { title: "Calendar" };
export default function CalendarPage() { return <CalendarWorkspace />; }
