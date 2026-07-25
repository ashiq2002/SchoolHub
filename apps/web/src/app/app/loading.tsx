import styles from "./route-state.module.css";

export default function AppLoading() {
  return <div aria-label="Loading page" aria-live="polite" className={styles.loading} role="status"><div className={styles.loadingHeader}><span /><span /><span /></div><div className={styles.loadingStats}>{Array.from({ length: 4 }, (_, index) => <span key={index} />)}</div><div className={styles.loadingGrid}><span /><span /></div><span className={styles.srOnly}>Loading page content…</span></div>;
}
