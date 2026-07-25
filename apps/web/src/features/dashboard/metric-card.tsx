import { ArrowUp } from "./dashboard-data";
import styles from "./dashboard.module.css";
import type { metrics } from "./dashboard-data";

type Metric = (typeof metrics)[number];

export function MetricCard({ metric }: { metric: Metric }) {
  const Icon = metric.icon;
  return (
    <article className={styles.metricCard}>
      <div className={`${styles.metricIcon} ${styles[metric.tone]}`}><Icon aria-hidden="true" size={20} /></div>
      <div className={styles.metricLabel}>{metric.label}</div>
      <div className={styles.metricValue}>{metric.value}</div>
      <div className={styles.metricFooter}>
        <span className={metric.trend === "up" ? styles.positive : styles.metricDelta}>
          {metric.trend === "up" ? <ArrowUp aria-hidden="true" size={11} weight="bold" /> : null}{metric.delta}
        </span>
        <span>{metric.note}</span>
      </div>
      {metric.trend === "progress" ? <div aria-label="72% of monthly fee target" aria-valuemax={100} aria-valuemin={0} aria-valuenow={72} className={styles.progress} role="progressbar"><span /></div> : null}
    </article>
  );
}
