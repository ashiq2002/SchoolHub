import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./authentication.module.css";

export function ProductLogo() {
  return <Link aria-label="SchoolHub" className={styles.logo} href="/"><span aria-hidden="true">S</span><strong>SchoolHub</strong></Link>;
}

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className={styles.authPage}>
      <section aria-label="About SchoolHub" className={styles.authAside}>
        <ProductLogo />
        <div className={styles.asideMessage}>
          <div className={styles.asideEyebrow}>One connected workspace</div>
          <h1>Help every school day run a little better.</h1>
          <p>Manage academics, people, attendance, and finance securely from one calm, reliable place.</p>
          <div aria-hidden="true" className={styles.productPreview}>
            <div className={styles.previewHeader}><span /><span /><span /><i /></div>
            <div className={styles.previewBody}>
              <div className={styles.previewRail}><span /><span /><span /><span /></div>
              <div className={styles.previewContent}>
                <div className={styles.previewTitle}><span /><i /></div>
                <div className={styles.previewMetrics}><span /><span /><span /></div>
                <div className={styles.previewChart}><i /><i /><i /><i /><i /><i /></div>
              </div>
            </div>
          </div>
          <div className={styles.trustRow}><span>Secure by design</span><span>Accessible for everyone</span></div>
        </div>
        <p className={styles.asideFooter}>Trusted tools for teachers, families, and school leaders.</p>
      </section>
      <section className={styles.authMain}>
        <div className={styles.mobileLogo}><ProductLogo /></div>
        {children}
        <footer className={styles.authFooter}><span>© 2026 SchoolHub</span><Link href="/privacy">Privacy</Link><Link href="/help">Help</Link></footer>
      </section>
    </main>
  );
}

export function AuthCard({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description: string; children: ReactNode }) {
  return <div className={styles.authCard}>{eyebrow ? <div className={styles.eyebrow}>{eyebrow}</div> : null}<h2>{title}</h2><p className={styles.description}>{description}</p>{children}</div>;
}
