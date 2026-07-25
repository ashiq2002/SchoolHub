import { AcademicYearForm } from "@/features/academic-years/academic-year-form";
import { getAcademicYear } from "@/features/academic-years/academic-year.data";
import styles from "@/features/academic-years/academic-years.module.css";

export function AcademicYearStaticEdit({ id }: { id: string }) {
  const year = getAcademicYear(id);
  if (!year) throw new Error(`Unknown static academic year: ${id}`);
  return <div className={styles.page}><header className={styles.pageHeader}><div><span>Academics / Academic years</span><h1>Edit {year.name}</h1><p>Changes to published years require an approved correction workflow.</p></div></header><AcademicYearForm year={year} /></div>;
}
