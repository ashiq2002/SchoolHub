import type { Metadata } from "next";
import { AcademicYearForm } from "@/features/academic-years/academic-year-form";
import styles from "@/features/academic-years/academic-years.module.css";

export const metadata: Metadata = { title: "New academic year" };
export default function NewAcademicYearPage() { return <div className={styles.page}><header className={styles.pageHeader}><div><span>Academics / Academic years</span><h1>Create academic year</h1><p>Start with a draft. Terms and calendar exceptions can be configured before publication.</p></div></header><AcademicYearForm /></div>; }
