import Link from "next/link";
import styles from "./status.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.mark}>404</div>
      <h1>Page not found</h1>
      <p>The page may have moved or you may not have access to it.</p>
      <Link className={styles.link} href="/app/home">Return to dashboard</Link>
    </main>
  );
}
