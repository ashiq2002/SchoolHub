import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AcademicYearDetail } from "@/features/academic-years/academic-year-detail";
import { getAcademicYear } from "@/features/academic-years/academic-year.data";
import styles from "@/features/academic-years/academic-years.module.css";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> { const year = getAcademicYear((await params).id); return { title: year?.name ?? "Academic year" }; }
export default async function AcademicYearPage({ params }: { params: Promise<{ id: string }> }) { const year = getAcademicYear((await params).id); if (!year) notFound(); return <div className={styles.page}><AcademicYearDetail year={year} /></div>; }
