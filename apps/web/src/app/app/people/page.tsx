import type { Metadata } from "next";
import { PeopleWorkspace } from "@/features/core-operations/people-workspaces";
export const metadata: Metadata = { title: "People" };
export default function PeoplePage() { return <PeopleWorkspace />; }
