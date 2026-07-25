"use client";

import { X } from "@phosphor-icons/react";
import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconButton } from "@/components/ui/icon-button";
import { MoreActionsButton } from "@/components/ui/more-actions-button";
import { demoCapabilities, navigationGroups } from "./navigation";
import styles from "./app-shell.module.css";

type SidebarProps = { open: boolean; onClose: () => void };

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button aria-label="Close navigation" className={clsx(styles.scrim, open && styles.scrimOpen)} onClick={onClose} type="button" />
      <aside aria-label="Primary navigation" className={clsx(styles.sidebar, open && styles.sidebarOpen)}>
        <div className={styles.brandRow}>
          <Link aria-label="SchoolHub home" className={styles.brand} href="/app/home" onClick={onClose}>
            <span aria-hidden="true" className={styles.brandMark}>S</span>
            <span>SchoolHub</span>
          </Link>
          <IconButton className={styles.closeNavigation} label="Close navigation" onClick={onClose}><X size={20} /></IconButton>
        </div>
        <nav className={styles.nav}>
          {navigationGroups.map((group, groupIndex) => (
            <div className={styles.navGroup} key={group.label ?? groupIndex}>
              {group.label ? <div className={styles.navLabel}>{group.label}</div> : null}
              {group.items.filter((item) => !item.capability || demoCapabilities.has(item.capability)).map((item) => {
                const active = pathname === item.href || (item.href === "/app/academics" && pathname.startsWith("/app/academics/"));
                const ItemIcon = item.icon;
                return (
                  <Link aria-current={active ? "page" : undefined} className={clsx(styles.navItem, active && styles.navItemActive)} href={item.href as Route} key={item.href} onClick={onClose}>
                    <ItemIcon aria-hidden="true" size={19} weight={active ? "fill" : "regular"} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <div aria-hidden="true" className={styles.avatar}>AM</div>
          <Link className={styles.userText} href="/app/account/sessions" onClick={onClose}><strong>Arif Mahmud</strong><span>Administrator · Account security</span></Link>
          <MoreActionsButton className={styles.accountMenu} label="Open account menu" />
        </div>
      </aside>
    </>
  );
}
