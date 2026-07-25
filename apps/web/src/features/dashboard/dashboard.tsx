import { ArrowRight, CaretRight, CheckCircle, ChartLineUp, Lightning, Plus, Pulse, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { MoreActionsButton } from "@/components/ui/more-actions-button";
import { CircularProgress } from "@/components/ui/circular-progress";
import { activity, metrics, schedule, tasks } from "./dashboard-data";
import { MetricCard } from "./metric-card";
import styles from "./dashboard.module.css";

function SectionHeader({ title, action }: { title: string; action?: string }) {
  return <div className={styles.sectionHeader}><h2>{title}</h2>{action ? <button type="button">{action}<ArrowRight size={14} /></button> : null}</div>;
}

export function Dashboard() {
  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div><span className={styles.dateLabel}>Wednesday · 22 July 2026</span><h1>Good morning, Arif <span aria-hidden="true">👋</span></h1><p>Here&apos;s what&apos;s happening at Greenfield High School today.</p></div>
        <button className={styles.primaryButton} type="button"><Plus size={17} weight="bold" /> Quick add</button>
      </header>

      <section className={styles.pulseBanner}>
        <div className={styles.pulseCopy}><span><Pulse size={14} weight="fill" /> Live school pulse</span><h2>Daily operations are on target, with two items to review.</h2><p>Attendance is above target, all scheduled classes are covered, and collections are trending up.</p></div>
        <div className={styles.pulseStats}>
          <div><i className={styles.liveDot} /><span>Students on campus</span><strong>1,236</strong><small>96.3% checked in</small></div>
          <div><ChartLineUp size={18} /><span>Classes today</span><strong>42 / 48</strong><small>6 remaining</small></div>
          <div><Lightning size={18} /><span>Open actions</span><strong>17</strong><small>4 need attention</small></div>
        </div>
      </section>

      <section aria-label="School overview" className={styles.metricsGrid}>
        {metrics.map((metric) => <MetricCard key={metric.label} metric={metric} />)}
      </section>

      <div className={styles.insightGrid}>
        <section className={`${styles.panel} ${styles.trendPanel}`}>
          <div className={styles.sectionHeader}><div><h2>Weekly attendance trend</h2><span>All grades · Last 7 school days</span></div><button type="button">View report <ArrowRight size={14} /></button></div>
          <div className={styles.trendBody}>
            <div className={styles.trendSummary}><span>Average attendance</span><strong>94.2%</strong><small><TrendUp size={13} weight="bold" /> 1.8% from last week</small></div>
            <div aria-label="Attendance ranged from 91 to 97 percent over seven school days" className={styles.barChart} role="img">
              {[92, 95, 93, 97, 94, 91, 96].map((value, index) => <div key={index}><span style={{ height: `${value}%` }} /><small>{["Mon", "Tue", "Wed", "Thu", "Sun", "Mon", "Tue"][index]}</small></div>)}
            </div>
          </div>
        </section>
        <section className={`${styles.panel} ${styles.goalPanel}`}>
          <div className={styles.sectionHeader}><div><h2>Monthly collection goal</h2><span>July 2026</span></div><button type="button">Details</button></div>
          <div className={styles.goalBody}><CircularProgress label="collected" value={72} valueLabel="72%" /><div className={styles.goalCopy}><span>৳8.42L of ৳11.70L</span><strong>৳3.28L remaining</strong><small>On track to reach the goal by 28 July</small><div><i /><span>Expected trajectory</span></div></div></div>
        </section>
      </div>

      <div className={styles.contentGrid}>
        <section className={styles.panel}>
          <SectionHeader action="View all" title="Today&apos;s schedule" />
          <div className={styles.scheduleList}>
            {schedule.map((item, index) => (
              <article className={styles.scheduleItem} key={item.time}>
                <div className={styles.scheduleTime}><strong>{item.time}</strong><span>{item.period}</span></div>
                <span aria-hidden="true" className={`${styles.timelineDot} ${index === 1 ? styles.timelineActive : ""}`} />
                <div className={styles.scheduleInfo}><strong>{item.title}</strong><span>{item.detail}</span></div>
                <span className={styles.room}>{item.room}</span>
                <span className={`${styles.status} ${item.status === "Completed" ? styles.statusComplete : item.status === "In progress" ? styles.statusActive : ""}`}>{item.status === "Completed" ? <CheckCircle size={13} weight="fill" /> : null}{item.status}</span>
                <CaretRight aria-hidden="true" className={styles.rowArrow} size={16} />
              </article>
            ))}
          </div>
        </section>

        <section className={styles.panel}>
          <SectionHeader action="View all" title="Tasks & approvals" />
          <div className={styles.taskList}>
            {tasks.map((task) => {
              const Icon = task.icon;
              return <article className={styles.taskItem} key={task.title}><div className={`${styles.taskIcon} ${styles[task.tone]}`}><Icon size={18} /></div><div><strong>{task.title}</strong><span>{task.meta}</span></div><MoreActionsButton label={`More actions for ${task.title}`} /></article>;
            })}
          </div>
        </section>

        <section className={`${styles.panel} ${styles.attendancePanel}`}>
          <SectionHeader action="View attendance" title="Attendance overview" />
          <div className={styles.attendanceBody}>
            <CircularProgress label="Present" segments={[{ value: 94.6, color: "var(--success)" }, { value: 1.6, color: "#e1aa4b" }, { value: 3.8, color: "var(--danger)" }]} size={124} strokeWidth={13} valueLabel="94.6%" />
            <div className={styles.legend}>
              <div><span className={styles.greenDot} /><span>Present</span><strong>1,215</strong></div>
              <div><span className={styles.redDot} /><span>Absent</span><strong>48</strong></div>
              <div><span className={styles.amberDot} /><span>Late</span><strong>21</strong></div>
              <div className={styles.legendTotal}><span>Total students</span><strong>1,284</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.panel}>
          <SectionHeader action="View activity" title="Recent activity" />
          <div className={styles.activityList}>
            {activity.map((item) => {
              const Icon = item.icon;
              return <article className={styles.activityItem} key={item.text}><div className={`${styles.activityIcon} ${styles[item.tone]}`}><Icon size={16} /></div><div><strong>{item.text}</strong><span>{item.context}</span></div><time>{item.time}</time></article>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
