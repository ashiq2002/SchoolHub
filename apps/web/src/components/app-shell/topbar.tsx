"use client";

import { Bell, CaretDown, List, MagnifyingGlass, Question } from "@phosphor-icons/react";
import { IconButton } from "@/components/ui/icon-button";
import { IconLink } from "@/components/ui/icon-link";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import styles from "./app-shell.module.css";

export function Topbar({ onOpenNavigation }: { onOpenNavigation: () => void }) {
  return (
    <header className={styles.topbar}>
      <IconButton className={styles.menuButton} label="Open navigation" onClick={onOpenNavigation}><List size={22} /></IconButton>
      <button className={styles.contextButton} type="button">
        <span className={styles.schoolSymbol}>GH</span>
        <span className={styles.contextText}><strong>Greenfield High School</strong><small>2025–2026 Academic Year</small></span>
        <CaretDown aria-hidden="true" size={15} />
      </button>
      <button className={styles.searchButton} type="button">
        <MagnifyingGlass aria-hidden="true" size={18} />
        <span>Search students, staff, or anything...</span>
        <kbd>/</kbd>
      </button>
      <div className={styles.topbarActions}>
        <ThemeToggle />
        <IconLink href="/app/help" label="Help center"><Question size={20} /></IconLink>
        <IconLink href="/app/notifications" label="Notifications"><Bell size={20} /><span className={styles.notificationDot} /></IconLink>
      </div>
    </header>
  );
}
