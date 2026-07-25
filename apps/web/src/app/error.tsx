"use client";

import { useEffect } from "react";
import styles from "./status.module.css";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Emit only the opaque reference until the privacy-safe telemetry adapter is connected.
    if (error.digest) console.error("Application error reference:", error.digest);
  }, [error.digest]);

  return (
    <main className={styles.page}>
      <div className={styles.mark}>SOMETHING WENT WRONG</div>
      <h1>We couldn&apos;t load this page</h1>
      <p>Try again. If the issue continues, share the support reference shown by the API error.</p>
      <button className={styles.link} onClick={reset} type="button">Try again</button>
    </main>
  );
}
