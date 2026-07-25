import type { Icon } from "@phosphor-icons/react";
import { ArrowLeft, Plus } from "@phosphor-icons/react/dist/ssr";
import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./academics.module.css";

export function AcademicPageHeader({ eyebrow = "Academics", title, description, action }: { eyebrow?: string; title: string; description: string; action?: string }) {
  return <header className={styles.pageHeader}><div><Link href="/app/academics"><ArrowLeft size={14} /> {eyebrow}</Link><h1>{title}</h1><p>{description}</p></div>{action ? <button type="button"><Plus size={16} weight="bold" />{action}</button> : null}</header>;
}

export function AcademicStat({ label, value, detail, icon: Icon, tone = "blue", progress }: { label: string; value: string; detail: string; icon: Icon; tone?: "blue" | "green" | "amber" | "violet"; progress?: number }) {
  return <article className={styles.statCard}><div className={`${styles.statIcon} ${styles[tone]}`}><Icon size={19} /></div><span>{label}</span><strong>{value}</strong><small>{detail}</small>{progress !== undefined ? <div aria-label={`${label}: ${progress}%`} aria-valuemax={100} aria-valuemin={0} aria-valuenow={progress} className={styles.progress} role="progressbar"><i style={{ width: `${progress}%` }} /></div> : null}</article>;
}

export function StatusPill({ children, tone = "neutral" }: { children: ReactNode; tone?: "success" | "warning" | "danger" | "info" | "neutral" }) { return <span className={`${styles.pill} ${styles[tone]}`}><i />{children}</span>; }

export function WorkspacePanel({ title, description, action, children, className = "" }: { title: string; description?: string; action?: string; children: ReactNode; className?: string }) {
  return <section className={`${styles.panel} ${className}`}><header><div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div>{action ? <button type="button">{action}</button> : null}</header>{children}</section>;
}

export function RowLink({ href, children }: { href: string; children: ReactNode }) { return <Link className={styles.rowLink} href={href as Route}>{children}</Link>; }
