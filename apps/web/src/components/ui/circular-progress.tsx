import styles from "./circular-progress.module.css";

type Segment = { value: number; color: string };
type CircularProgressProps = { value?: number; valueLabel: string; label: string; size?: number; strokeWidth?: number; segments?: Segment[]; className?: string };

export function CircularProgress({ value = 0, valueLabel, label, size = 116, strokeWidth = 12, segments, className }: CircularProgressProps) {
  const radius = (120 - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalized = segments ?? [{ value, color: "var(--action-primary)" }];
  return <div aria-label={`${label}: ${valueLabel}`} className={`${styles.root} ${className ?? ""}`} role="img" style={{ width: size, height: size }}><svg aria-hidden="true" viewBox="0 0 120 120"><circle className={styles.track} cx="60" cy="60" fill="none" r={radius} strokeWidth={strokeWidth} />{normalized.map((segment, index) => { const gap = normalized.length > 1 ? 1.2 : 0; const visible = Math.max(segment.value - gap, 0); const consumed = normalized.slice(0, index).reduce((total, item) => total + item.value, 0); const offset = -(consumed / 100) * circumference; return <circle className={styles.segment} cx="60" cy="60" fill="none" key={`${segment.color}-${index}`} r={radius} stroke={segment.color} strokeDasharray={`${(visible / 100) * circumference} ${circumference}`} strokeDashoffset={offset} strokeWidth={strokeWidth} />; })}</svg><div className={styles.content}><strong>{valueLabel}</strong><span>{label}</span></div></div>;
}
