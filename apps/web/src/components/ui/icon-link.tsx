import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./icon-button.module.css";

export function IconLink({ href, label, children }: { href: Route; label: string; children: ReactNode }) {
  return <Link aria-label={label} className={styles.button} href={href}>{children}</Link>;
}
