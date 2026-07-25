"use client";

import { ArrowRight, Buildings, Check, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import styles from "./authentication.module.css";

const organizations = [
  { id: "greenfield", name: "Greenfield Education Trust", schools: "3 schools", role: "Organization administrator", initials: "GE", color: "blue" },
  { id: "northstar", name: "Northstar Academy", schools: "1 school", role: "School administrator", initials: "NA", color: "violet" },
  { id: "demo", name: "SchoolHub Training Campus", schools: "Training environment", role: "Instructor", initials: "ST", color: "green" },
];

export function OrganizationSelector() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(organizations[0]?.id ?? "");
  const filtered = useMemo(() => organizations.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())), [query]);
  return <div className={styles.chooser}>
    <div className={styles.searchField}><MagnifyingGlass size={17} /><label className={styles.srOnly} htmlFor="organization-search">Search organizations</label><input id="organization-search" onChange={(event) => setQuery(event.target.value)} placeholder="Search organizations" type="search" value={query} /></div>
    <div aria-label="Available organizations" className={styles.organizationList} role="radiogroup">
      {filtered.map((item) => <button aria-checked={selected === item.id} className={`${styles.organizationItem} ${selected === item.id ? styles.organizationSelected : ""}`} key={item.id} onClick={() => setSelected(item.id)} role="radio" type="button"><span className={`${styles.organizationMark} ${styles[item.color]}`}>{item.initials}</span><span className={styles.organizationText}><strong>{item.name}</strong><span>{item.schools} · {item.role}</span></span><span className={styles.selectionMark}>{selected === item.id ? <Check size={15} weight="bold" /> : null}</span></button>)}
      {filtered.length === 0 ? <div className={styles.noResults}><Buildings size={24} /><strong>No organizations found</strong><span>Try a different name.</span></div> : null}
    </div>
    <button className={styles.submitButton} disabled={!selected} onClick={() => router.push("/app/home")} type="button">Continue <ArrowRight size={17} /></button>
    <button className={styles.joinButton} type="button"><Plus size={16} /> Join another organization</button>
  </div>;
}
