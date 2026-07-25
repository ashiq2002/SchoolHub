import type { Metadata } from "next";
import { Suspense } from "react";
import { AcademicYearList } from "@/features/academic-years/academic-year-list";
import styles from "@/features/academic-years/academic-years.module.css";

export const metadata: Metadata = { title: "Academic years" };
export default function AcademicYearsPage() { return <div className={styles.page}><header className={styles.pageHeader}><div><span>Academics / Structure</span><h1>Academic years</h1><p>Manage terms, calendar boundaries, publication, and rollover.</p></div></header><Suspense fallback={<div className={styles.loading}>Loading academic years…</div>}><AcademicYearList /></Suspense></div>; }
