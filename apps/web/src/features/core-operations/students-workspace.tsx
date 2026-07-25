"use client";

import { useState } from "react";
import { Archive, CheckCircle, Clock, FileText, GraduationCap, MagnifyingGlass, SlidersHorizontal, Student, TrendUp, UsersThree, WarningCircle } from "@phosphor-icons/react";
import { MoreActionsButton } from "@/components/ui/more-actions-button";
import { PageHeader, Panel, ProgressRow, StatCard, StatusPill } from "./operations-ui";
import styles from "./core-operations.module.css";

type Tone = "success" | "warning" | "danger" | "info" | "neutral";
type Tab = "Active students" | "Admissions" | "Enrollment changes" | "Documents" | "Alumni";

const tabs: Tab[] = ["Active students", "Admissions", "Enrollment changes", "Documents", "Alumni"];
const students = [
  ["Ayesha Rahman", "STU-2026-0142", "Grade 8 · A", "Masud Rahman", "100%", "Active", "success"],
  ["Rafi Islam", "STU-2026-0158", "Grade 9 · B", "Tasnim Islam", "96%", "Active", "success"],
  ["Nafisa Akter", "STU-2026-0189", "Grade 6 · B", "Kamal Akter", "82%", "Documents due", "warning"],
  ["Saad Hasan", "STU-2026-0201", "Grade 10 · C", "Rashida Hasan", "100%", "Active", "success"],
  ["Maya Chowdhury", "STU-2026-0208", "Grade 7 · A", "Amin Chowdhury", "91%", "Review", "info"],
] as const;

const admissions = [
  ["Mahira Ahmed", "APP-2026-0281", "Grade 5", "23 Jul 2026", "Eligibility review", "warning"],
  ["Tahmid Hasan", "APP-2026-0276", "Grade 8", "21 Jul 2026", "Offer accepted", "success"],
  ["Anika Sultana", "APP-2026-0269", "Grade 3", "19 Jul 2026", "Documents due", "danger"],
  ["Fahim Rahman", "APP-2026-0264", "Grade 6", "18 Jul 2026", "Ready to enroll", "info"],
] as const;

const changes = [
  ["Nabil Hossain", "STU-2026-0118", "Section transfer", "8A → 8B", "28 Jul 2026", "Approved", "success"],
  ["Zara Islam", "STU-2026-0094", "Temporary hold", "Medical leave", "25 Jul 2026", "Pending", "warning"],
  ["Adnan Karim", "STU-2026-0062", "Withdrawal", "Family relocation", "31 Jul 2026", "Review", "info"],
  ["Sadia Ahmed", "STU-2026-0048", "School transfer", "Dhaka Model School", "20 Jul 2026", "Completed", "success"],
] as const;

const documents = [
  ["Nafisa Akter", "STU-2026-0189", "Birth registration", "Required", "30 Jul 2026", "Missing", "danger"],
  ["Anika Sultana", "APP-2026-0269", "Previous school record", "Required", "27 Jul 2026", "Due soon", "warning"],
  ["Maya Chowdhury", "STU-2026-0208", "Guardian identity", "Verification", "22 Jul 2026", "In review", "info"],
  ["Rafi Islam", "STU-2026-0158", "Medical consent", "Annual renewal", "18 Jul 2027", "Verified", "success"],
] as const;

const alumni = [
  ["Rumana Kabir", "STU-2025-0011", "Class of 2025", "SSC completed", "Certificate issued", "success"],
  ["Irfan Mahmud", "STU-2025-0037", "Class of 2025", "Transferred", "Archive complete", "success"],
  ["Nusrat Jahan", "STU-2024-0082", "Class of 2024", "SSC completed", "Transcript request", "info"],
  ["Samiul Haque", "STU-2024-0106", "Class of 2024", "Withdrawn", "Contact update", "warning"],
] as const;

function Toolbar({ label }: { label: string }) {
  return <div className={styles.toolbar}><label className={styles.search}><MagnifyingGlass size={15}/><input aria-label={`Search ${label}`} placeholder="Search name or ID…" type="search"/></label><button className={styles.toolButton} type="button"><SlidersHorizontal size={15}/>Filters</button></div>;
}

function ActiveStudents() {
  return <><section aria-label="Student statistics" className={styles.stats}><StatCard detail="28 joined this academic year" icon={<Student size={19}/>} label="Active enrollment" value="1,284"/><StatCard detail="Against 1,490 approved seats" icon={<TrendUp size={19}/>} label="Capacity used" tone="green" value="86.2%"/><StatCard detail="6 await required documents" icon={<Clock size={19}/>} label="Admissions in progress" tone="violet" value="18"/><StatCard detail="Transfers, holds, and reviews" icon={<WarningCircle size={19}/>} label="Lifecycle exceptions" tone="amber" value="12"/></section><div className={styles.grid}><div className={styles.stack}><Panel description="2025–2026 academic year · approved section capacity" title="Enrollment by grade"><div className={styles.progressList}><ProgressRow detail="214 of 240 seats · 7 sections" label="Grades 1–3" value={89}/><ProgressRow detail="376 of 450 seats · 12 sections" label="Grades 4–6" value={84}/><ProgressRow detail="418 of 480 seats · 13 sections" label="Grades 7–9" value={87}/><ProgressRow detail="276 of 320 seats · 6 sections" label="Grade 10" value={86}/></div></Panel><Panel description="Active enrollment · Academic year 2025–2026" title="Student roster"><Toolbar label="students"/><div className={styles.tableWrap}><table aria-label="Student roster" className={styles.table}><thead><tr><th>Student</th><th>Class & section</th><th>Primary guardian</th><th>Profile</th><th>Enrollment</th><th>Actions</th></tr></thead><tbody>{students.map(row=><tr key={row[1]}><td><div className={styles.person}><strong>{row[0]}</strong><span>{row[1]}</span></div></td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td><StatusPill tone={row[6]}>{row[5]}</StatusPill></td><td className={styles.moreCell}><MoreActionsButton label={`Actions for ${row[0]}`}/></td></tr>)}</tbody></table></div></Panel></div><aside className={styles.stack}><Panel description="Current admission pipeline" title="Enrollment lifecycle"><div className={styles.funnel}>{[["Applications received","42"],["Eligibility reviewed","31"],["Offers accepted","24"],["Enrollment completed","18"]].map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></Panel><Panel action="Open document desk" description="Items blocking complete student files" title="Document exceptions"><Queue items={[["Birth registration","4 students","Required","danger"],["Previous school record","2 students","Due","warning"],["Guardian identity evidence","3 relationships","Review","info"]]}/></Panel></aside></div></>;
}

function Queue({ items }: { items: readonly (readonly [string,string,string,string])[] }) {
  return <div className={styles.queueList}>{items.map(([title,detail,status,tone])=><article className={styles.queueItem} key={title}><div><strong>{title}</strong><span>{detail}</span></div><StatusPill tone={tone as Tone}>{status}</StatusPill></article>)}</div>;
}

function Admissions() {
  return <><section className={styles.stats}><StatCard detail="Across all grade levels" icon={<UsersThree size={19}/>} label="Applications received" value="42"/><StatCard detail="74% of received applications" icon={<CheckCircle size={19}/>} label="Eligibility reviewed" tone="green" value="31"/><StatCard detail="6 responses still pending" icon={<Clock size={19}/>} label="Offers accepted" tone="violet" value="24"/><StatCard detail="Ready for student IDs" icon={<GraduationCap size={19}/>} label="Enrollment completed" tone="amber" value="18"/></section><div className={styles.grid}><Panel description="Applications requiring action · 2026 intake" title="Admission pipeline"><Toolbar label="applications"/><div className={styles.tableWrap}><table aria-label="Admission applications" className={styles.table}><thead><tr><th>Applicant</th><th>Applying for</th><th>Submitted</th><th>Stage</th><th>Actions</th></tr></thead><tbody>{admissions.map(row=><tr key={row[1]}><td><div className={styles.person}><strong>{row[0]}</strong><span>{row[1]}</span></div></td><td>{row[2]}</td><td>{row[3]}</td><td><StatusPill tone={row[5]}>{row[4]}</StatusPill></td><td><MoreActionsButton label={`Actions for ${row[0]}`}/></td></tr>)}</tbody></table></div></Panel><aside className={styles.stack}><Panel description="Conversion by application stage" title="Pipeline progress"><div className={styles.progressList}><ProgressRow detail="31 of 42 reviewed" label="Eligibility review" value={74}/><ProgressRow detail="24 of 30 offers accepted" label="Offer acceptance" tone="success" value={80}/><ProgressRow detail="18 of 24 enrolled" label="Enrollment completion" value={75}/></div></Panel><Panel description="Oldest items first" title="Admission exceptions"><Queue items={[["Missing identity evidence","3 applicants","Required","danger"],["Eligibility decision overdue","2 applicants","Overdue","warning"],["Possible duplicate person","1 applicant","Review","info"]]}/></Panel></aside></div></>;
}

function EnrollmentChanges() {
  return <><section className={styles.stats}><StatCard detail="This academic year" icon={<TrendUp size={19}/>} label="Section transfers" value="36"/><StatCard detail="Medical and administrative" icon={<Clock size={19}/>} label="Active holds" tone="violet" value="5"/><StatCard detail="4 awaiting final approval" icon={<WarningCircle size={19}/>} label="Withdrawals" tone="amber" value="11"/><StatCard detail="Records safely closed" icon={<CheckCircle size={19}/>} label="Completed changes" tone="green" value="48"/></section><div className={styles.grid}><Panel description="Transfers, holds, withdrawals, and status transitions" title="Change requests"><Toolbar label="enrollment changes"/><div className={styles.tableWrap}><table aria-label="Enrollment change requests" className={styles.table}><thead><tr><th>Student</th><th>Change</th><th>Details</th><th>Effective</th><th>Status</th><th>Actions</th></tr></thead><tbody>{changes.map(row=><tr key={row[1]}><td><div className={styles.person}><strong>{row[0]}</strong><span>{row[1]}</span></div></td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td><StatusPill tone={row[6]}>{row[5]}</StatusPill></td><td><MoreActionsButton label={`Actions for ${row[0]}`}/></td></tr>)}</tbody></table></div></Panel><aside className={styles.stack}><Panel description="Decisions requiring authorized review" title="Approval queue"><Queue items={[["Withdrawal requests","4 students","Approve","warning"],["Cross-grade transfer","1 student","Review","info"],["Hold extension","2 students","Due today","danger"]]}/></Panel><Panel description="Current academic year" title="Change completion"><div className={styles.progressList}><ProgressRow detail="36 of 38 closed" label="Section transfers" tone="success" value={95}/><ProgressRow detail="11 of 15 closed" label="Withdrawals" value={73}/><ProgressRow detail="8 of 10 closed" label="Temporary holds" value={80}/></div></Panel></aside></div></>;
}

function Documents() {
  return <><section className={styles.stats}><StatCard detail="Across active student files" icon={<FileText size={19}/>} label="Documents stored" value="6,842"/><StatCard detail="All required items present" icon={<CheckCircle size={19}/>} label="Complete files" tone="green" value="96.4%"/><StatCard detail="Need collection or upload" icon={<WarningCircle size={19}/>} label="Missing documents" tone="amber" value="9"/><StatCard detail="Within the next 30 days" icon={<Clock size={19}/>} label="Expiring soon" tone="violet" value="14"/></section><div className={styles.grid}><Panel description="Required, expiring, and verification work" title="Document desk"><Toolbar label="student documents"/><div className={styles.tableWrap}><table aria-label="Student document desk" className={styles.table}><thead><tr><th>Student</th><th>Document</th><th>Requirement</th><th>Due / expiry</th><th>Status</th><th>Actions</th></tr></thead><tbody>{documents.map(row=><tr key={`${row[1]}-${row[2]}`}><td><div className={styles.person}><strong>{row[0]}</strong><span>{row[1]}</span></div></td><td>{row[2]}</td><td>{row[3]}</td><td>{row[4]}</td><td><StatusPill tone={row[6]}>{row[5]}</StatusPill></td><td><MoreActionsButton label={`Actions for ${row[0]}`}/></td></tr>)}</tbody></table></div></Panel><aside className={styles.stack}><Panel description="Completeness by document family" title="Coverage"><div className={styles.progressList}><ProgressRow detail="1,280 of 1,284 students" label="Identity documents" value={99}/><ProgressRow detail="1,282 of 1,284 students" label="Previous school records" tone="success" value={99}/><ProgressRow detail="1,277 of 1,284 students" label="Guardian evidence" value={99}/><ProgressRow detail="1,270 of 1,284 students" label="Annual consent" tone="warning" value={98}/></div></Panel><Panel description="Work requiring follow-up" title="Verification queue"><Queue items={[["Unverified uploads","6 documents","Review","info"],["Missing required files","9 students","Action","danger"],["Expiring this month","14 documents","Renew","warning"]]}/></Panel></aside></div></>;
}

function Alumni() {
  return <><section className={styles.stats}><StatCard detail="Graduated or safely archived" icon={<Archive size={19}/>} label="Alumni records" value="3,846"/><StatCard detail="2025 graduating cohort" icon={<GraduationCap size={19}/>} label="Latest class" tone="violet" value="126"/><StatCard detail="Issued this academic year" icon={<FileText size={19}/>} label="Transcript requests" tone="amber" value="38"/><StatCard detail="Reachable email or mobile" icon={<CheckCircle size={19}/>} label="Contactable alumni" tone="green" value="81%"/></section><div className={styles.grid}><Panel description="Completed and archived student enrollments" title="Alumni directory"><Toolbar label="alumni"/><div className={styles.tableWrap}><table aria-label="Alumni directory" className={styles.table}><thead><tr><th>Former student</th><th>Cohort</th><th>Exit outcome</th><th>Record state</th><th>Actions</th></tr></thead><tbody>{alumni.map(row=><tr key={row[1]}><td><div className={styles.person}><strong>{row[0]}</strong><span>{row[1]}</span></div></td><td>{row[2]}</td><td>{row[3]}</td><td><StatusPill tone={row[5]}>{row[4]}</StatusPill></td><td><MoreActionsButton label={`Actions for ${row[0]}`}/></td></tr>)}</tbody></table></div></Panel><aside className={styles.stack}><Panel description="Requests from former students" title="Alumni services"><Queue items={[["Transcript requests","7 open · 2 due today","Process","warning"],["Certificate verification","4 external requests","Review","info"],["Contact corrections","3 submissions","Verify","neutral"]]}/></Panel><Panel description="Latest graduating cohort" title="Archive readiness"><div className={styles.progressList}><ProgressRow detail="126 of 126 records" label="Final results attached" tone="success" value={100}/><ProgressRow detail="123 of 126 records" label="Certificates issued" value={98}/><ProgressRow detail="119 of 126 records" label="Accounts cleared" tone="warning" value={94}/></div></Panel></aside></div></>;
}

export function StudentsWorkspace() {
  const [activeTab, setActiveTab] = useState<Tab>("Active students");
  return <div className={styles.page}><PageHeader action="Enroll student" description="Manage each learner from admission through active enrollment, family relationships, required documents, transfers, and withdrawal." eyebrow="People / Students" secondaryAction="Import roster" title="Student records"/><nav aria-label="Student sections" className={styles.tabs} role="tablist">{tabs.map(tab=><button aria-controls={`student-panel-${tab.toLowerCase().replaceAll(" ","-")}`} aria-selected={activeTab===tab} className={activeTab===tab?styles.activeTab:""} key={tab} onClick={()=>setActiveTab(tab)} role="tab" type="button">{tab}</button>)}</nav><section aria-live="polite" id={`student-panel-${activeTab.toLowerCase().replaceAll(" ","-")}`} role="tabpanel">{activeTab==="Active students"?<ActiveStudents/>:activeTab==="Admissions"?<Admissions/>:activeTab==="Enrollment changes"?<EnrollmentChanges/>:activeTab==="Documents"?<Documents/>:<Alumni/>}</section></div>;
}
