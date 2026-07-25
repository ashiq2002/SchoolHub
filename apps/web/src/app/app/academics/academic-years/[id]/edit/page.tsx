import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcademicYearForm } from "@/features/academic-years/academic-year-form";
import { getAcademicYear } from "@/features/academic-years/academic-year.data";
import styles from "@/features/academic-years/academic-years.module.css";

export const metadata: Metadata = { title: "Edit academic year" };
export default async function EditAcademicYearPage({ params }: { params: Promise<{ id: string }> }) { const year = getAcademicYear((await params).id); if (!year) notFound(); return <div className={styles.page}><header className={styles.pageHeader}><div><span>Academics / Academic years</span><h1>Edit {year.name}</h1><p>Changes to published years require an approved correction workflow.</p></div></header><AcademicYearForm year={year} /></div>; }
