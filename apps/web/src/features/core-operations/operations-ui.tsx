import type { ReactNode } from "react";
import { ArrowRight, Plus } from "@phosphor-icons/react/dist/ssr";
import styles from "./core-operations.module.css";

export type StatusTone = "success" | "warning" | "danger" | "info" | "neutral";

export function PageHeader({ eyebrow, title, description, action, secondaryAction }: { eyebrow: string; title: string; description: string; action: string; secondaryAction?: string }) {
  return <header className={styles.pageHeader}><div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div><div className={styles.headerActions}>{secondaryAction ? <button className={styles.secondaryButton} type="button">{secondaryAction}</button> : null}<button className={styles.primaryButton} type="button"><Plus size={16} weight="bold" />{action}</button></div></header>;
}

export function StatCard({ icon, label, value, detail, tone = "blue" }: { icon: ReactNode; label: string; value: string; detail: string; tone?: "blue" | "green" | "violet" | "amber" }) {
  return <article className={styles.statCard}><div className={`${styles.statIcon} ${styles[tone]}`}>{icon}</div><div><span>{label}</span><strong>{value}</strong><small>{detail}</small></div></article>;
}

export function Panel({ title, description, action, children, className = "" }: { title: string; description?: string; action?: string; children: ReactNode; className?: string }) {
  return <section className={`${styles.panel} ${className}`}><header><div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div>{action ? <button type="button">{action}<ArrowRight size={13} /></button> : null}</header>{children}</section>;
}

export function StatusPill({ children, tone }: { children: ReactNode; tone: StatusTone }) {
  return <span className={`${styles.status} ${styles[tone]}`}><i />{children}</span>;
}

export function ProgressRow({ label, value, detail, tone = "default" }: { label: string; value: number; detail: string; tone?: "default" | "warning" | "success" }) {
  return <div className={styles.progressRow}><div><strong>{label}</strong><span>{detail}</span></div><b>{value}%</b><div className={styles.progressTrack}><i className={styles[tone]} style={{ width: `${value}%` }} /></div></div>;
}
