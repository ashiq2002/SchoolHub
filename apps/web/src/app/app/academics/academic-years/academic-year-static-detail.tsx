import { AcademicYearDetail } from "@/features/academic-years/academic-year-detail";
import { getAcademicYear } from "@/features/academic-years/academic-year.data";
import styles from "@/features/academic-years/academic-years.module.css";

export function AcademicYearStaticDetail({ id }: { id: string }) {
  const year = getAcademicYear(id);
  if (!year) throw new Error(`Unknown static academic year: ${id}`);
  return <div className={styles.page}><AcademicYearDetail year={year} /></div>;
}
