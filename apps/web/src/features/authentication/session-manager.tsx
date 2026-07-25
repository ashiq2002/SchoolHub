"use client";

import { CheckCircle, Desktop, DeviceMobile, MapPin, ShieldCheck, SignOut, Warning } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./sessions.module.css";

type Session = { id: string; device: string; browser: string; location: string; active: string; current?: boolean; trusted?: boolean };
const initialSessions: Session[] = [
  { id: "current", device: "Windows PC", browser: "Chrome 140 · Linux", location: "Dhaka, Bangladesh", active: "Active now", current: true, trusted: true },
  { id: "phone", device: "Android phone", browser: "SchoolHub mobile web", location: "Dhaka, Bangladesh", active: "2 hours ago", trusted: true },
  { id: "laptop", device: "MacBook Pro", browser: "Safari 19 · macOS", location: "Chattogram, Bangladesh", active: "3 days ago" },
];

export function SessionManager() {
  const [sessions, setSessions] = useState(initialSessions);
  const [message, setMessage] = useState("");
  const revoke = (session: Session) => { setSessions((items) => items.filter((item) => item.id !== session.id)); setMessage(`${session.device} was signed out.`); };
  const revokeOthers = () => { setSessions((items) => items.filter((item) => item.current)); setMessage("All other devices were signed out."); };
  return <>
    <div aria-live="polite" className={message ? styles.notice : styles.hidden}>{message}</div>
    <section className={styles.securitySummary}>
      <div className={styles.securityIcon}><ShieldCheck size={22} weight="fill" /></div><div><strong>Your account is protected</strong><span>Multi-factor authentication is enabled. Your last password change was 42 days ago.</span></div><button type="button">Manage security</button>
    </section>
    <section className={styles.panel}>
      <header><div><h2>Active sessions</h2><p>Devices currently signed in to your SchoolHub account.</p></div>{sessions.length > 1 ? <button className={styles.outlineButton} onClick={revokeOthers} type="button"><SignOut size={16} /> Sign out other devices</button> : null}</header>
      <div className={styles.sessionList}>
        {sessions.map((session) => <article className={styles.session} key={session.id}>
          <div className={styles.deviceIcon}>{session.id === "phone" ? <DeviceMobile size={21} /> : <Desktop size={21} />}</div>
          <div className={styles.sessionInfo}><div className={styles.sessionTitle}><strong>{session.device}</strong>{session.current ? <span className={styles.currentBadge}><CheckCircle size={12} weight="fill" /> This device</span> : null}</div><span>{session.browser}</span><span className={styles.location}><MapPin size={12} /> {session.location} · {session.active}</span></div>
          <div className={styles.sessionActions}>{session.trusted ? <span className={styles.trusted}>Trusted</span> : <span className={styles.review}><Warning size={12} /> Review</span>}{session.current ? null : <button aria-label={`Sign out ${session.device}`} onClick={() => revoke(session)} type="button">Sign out</button>}</div>
        </article>)}
      </div>
    </section>
    <section className={styles.panel}>
      <header><div><h2>Sign-in notifications</h2><p>We notify you when a new or unusual device accesses your account.</p></div><label className={styles.switch}><input defaultChecked type="checkbox" /><span>Enabled</span></label></header>
    </section>
  </>;
}
