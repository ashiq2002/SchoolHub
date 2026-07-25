"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
import styles from "./app-shell.module.css";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [navigationOpen, setNavigationOpen] = useState(false);
  return (
    <div className={styles.shell}>
      <a className={styles.skipLink} href="#main-content">Skip to main content</a>
      <Sidebar open={navigationOpen} onClose={() => setNavigationOpen(false)} />
      <div className={styles.workspace}>
        <Topbar onOpenNavigation={() => setNavigationOpen(true)} />
        <main className={styles.main} id="main-content" tabIndex={-1}>{children}</main>
      </div>
    </div>
  );
}
