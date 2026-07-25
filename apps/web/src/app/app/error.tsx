"use client";

import { ArrowClockwise, House, WarningCircle } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./route-state.module.css";

export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { if (error.digest) console.error("Route error reference:", error.digest); }, [error.digest]);
  return <div className={styles.error}><div><WarningCircle size={25} weight="fill" /></div><span>We couldn’t load this workspace</span><h1>Your data is safe</h1><p>Retry the page. If the issue continues, give support the reference below so they can investigate without exposing your data.</p>{error.digest ? <code>Reference: {error.digest}</code> : null}<div className={styles.errorActions}><button onClick={reset} type="button"><ArrowClockwise size={15} /> Try again</button><Link href="/app/home"><House size={15} /> Dashboard</Link></div></div>;
}
