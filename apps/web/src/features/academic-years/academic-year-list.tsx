"use client";

import { Archive, ArrowRight, CalendarBlank, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { academicYears } from "./academic-year.data";
import type { AcademicYearStatus } from "./academic-year.types";
import styles from "./academic-years.module.css";

const statuses: Array<{ value: "all" | AcademicYearStatus; label: string }> = [{ value: "all", label: "All" }, { value: "published", label: "Published" }, { value: "draft", label: "Draft" }, { value: "closed", label: "Closed" }];

export function StatusBadge({ status }: { status: AcademicYearStatus }) {
  return <span className={`${styles.badge} ${styles[status]}`}><i />{status[0]?.toUpperCase()}{status.slice(1)}</span>;
}

export function AcademicYearList() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const query = params.get("q") ?? "";
  const activeStatus = (params.get("status") ?? "all") as "all" | AcademicYearStatus;
  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value && value !== "all") next.set(key, value);
    else next.delete(key);
    router.replace(`${pathname}${next.size ? `?${next}` : ""}` as Route, { scroll: false });
  };
  const filtered = useMemo(() => academicYears.filter((year) => (activeStatus === "all" || year.status === activeStatus) && `${year.name} ${year.code}`.toLowerCase().includes(query.toLowerCase())), [activeStatus, query]);

  return <>
    <div className={styles.toolbar}>
      <div className={styles.search}><MagnifyingGlass size={17} /><label className={styles.srOnly} htmlFor="year-search">Search academic years</label><input id="year-search" onChange={(event) => setParam("q", event.target.value)} placeholder="Search by name or code" type="search" value={query} /></div>
      <div aria-label="Filter by status" className={styles.filters}>{statuses.map((status) => <button aria-pressed={activeStatus === status.value} key={status.value} onClick={() => setParam("status", status.value)} type="button">{status.label}</button>)}</div>
      <Link className={styles.primaryButton} href="/app/academics/academic-years/new"><Plus size={16} weight="bold" /> New academic year</Link>
    </div>
    {filtered.length ? <div className={styles.yearGrid}>{filtered.map((year) => <article className={styles.yearCard} key={year.id}>
      <div className={styles.cardTop}><div className={styles.calendarIcon}><CalendarBlank size={21} /></div><StatusBadge status={year.status} /></div>
      <div className={styles.yearHeading}><h2>{year.name}</h2>{year.isDefault ? <span className={styles.defaultBadge}>Current</span> : null}<p>{year.code} · Version {year.version}</p></div>
      <div className={styles.dateRange}><div><span>Starts</span><strong>{new Date(`${year.startDate}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</strong></div><ArrowRight size={15} /><div><span>Ends</span><strong>{new Date(`${year.endDate}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</strong></div></div>
      <div className={styles.cardFooter}><span>{year.terms.length} terms · {year.terms.reduce((total, term) => total + term.instructionalDays, 0)} instructional days</span><Link href={`/app/academics/academic-years/${year.id}` as Route}>View details <ArrowRight size={14} /></Link></div>
    </article>)}</div> : <div className={styles.empty}><Archive size={30} /><h2>No academic years found</h2><p>Change the search or status filter to see more results.</p><button onClick={() => router.replace(pathname as Route)} type="button">Clear filters</button></div>}
  </>;
}
