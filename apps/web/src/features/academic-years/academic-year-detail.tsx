"use client";

import { ArrowLeft, CalendarDots, CheckCircle, Clock, Copy, Gear, LockKey, PencilSimple, RocketLaunch, WarningCircle } from "@phosphor-icons/react";
import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";
import type { AcademicYear } from "./academic-year.types";
import { StatusBadge } from "./academic-year-list";
import styles from "./academic-years.module.css";

export function AcademicYearDetail({ year }: { year: AcademicYear }) {
  const [message, setMessage] = useState("");
  const totalDays = year.terms.reduce((total, term) => total + term.instructionalDays, 0);
  const act = (next: string) => setMessage(next);
  return <>
    <div aria-live="polite" className={message ? styles.notice : styles.srOnly}>{message}</div>
    <div className={styles.detailActions}>
      <Link href="/app/academics/academic-years"><ArrowLeft size={15} /> All academic years</Link>
      <div>{year.status !== "closed" ? <Link href={`/app/academics/academic-years/${year.id}/edit` as Route}><PencilSimple size={15} /> Edit</Link> : null}<button onClick={() => act("A rollover draft was prepared for review.")} type="button"><Copy size={15} /> Roll over</button>{year.status === "draft" ? <button className={styles.publishButton} onClick={() => act("Readiness review started. Complete required items before publishing.")} type="button"><RocketLaunch size={15} /> Review & publish</button> : null}</div>
    </div>
    <section className={styles.detailHero}><div className={styles.detailHeroIcon}><CalendarDots size={27} /></div><div><div className={styles.detailTitle}><h1>{year.name}</h1><StatusBadge status={year.status} />{year.isDefault ? <span className={styles.defaultBadge}>Current context</span> : null}</div><p>{year.code} · {year.startDate} to {year.endDate} · Version {year.version}</p></div></section>
    <div className={styles.detailGrid}>
      <section className={styles.detailPanel}><header><h2>Terms</h2><button onClick={() => act("Term editor will open after the API workflow is connected.")} type="button"><Gear size={14} /> Manage terms</button></header><div className={styles.termList}>{year.terms.map((term, index) => <article key={term.id}><div className={styles.termNumber}>{index + 1}</div><div><strong>{term.name}</strong><span>{term.startDate} — {term.endDate}</span></div><div><strong>{term.instructionalDays}</strong><span>Instructional days</span></div><CheckCircle size={17} weight="fill" /></article>)}</div><footer>{year.terms.length} terms <span /> {totalDays} instructional days</footer></section>
      <aside className={styles.detailSide}>
        <section className={styles.readiness}><header><h2>Readiness</h2><span>3 of 4</span></header><div><p><CheckCircle size={16} weight="fill" /> Date range is valid</p><p><CheckCircle size={16} weight="fill" /> Terms are configured</p><p><CheckCircle size={16} weight="fill" /> Working week is defined</p><p className={styles.pending}><WarningCircle size={16} /> Add holiday calendar</p></div><button onClick={() => act("The complete readiness checklist is now available for review.")} type="button">View readiness checklist</button></section>
        <section className={styles.metaPanel}><h2>Governance</h2><dl><div><dt>Last updated</dt><dd>{new Date(year.updatedAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Dhaka" })}</dd></div><div><dt>School time zone</dt><dd>Asia/Dhaka</dd></div><div><dt>Period lock</dt><dd><LockKey size={12} /> {year.status === "closed" ? "Locked" : "Open"}</dd></div><div><dt>Freshness</dt><dd><Clock size={12} /> Current</dd></div></dl></section>
      </aside>
    </div>
  </>;
}
