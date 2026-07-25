"use client";

import {
  Archive,
  Bell,
  CheckCircle,
  Checks,
  Clock,
  DotsThreeVertical,
  EnvelopeSimple,
  MagnifyingGlass,
  Paperclip,
  PaperPlaneTilt,
  Phone,
  Plus,
  Smiley,
  Star,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import styles from "./message-center.module.css";

type Thread = {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread: number;
  initials: string;
  context: string;
  presence: string;
  received: string;
  sent: string;
  receivedAt: string;
  sentAt: string;
};

const threads: Thread[] = [
  {
    id: 1,
    sender: "Masud Rahman",
    subject: "Question about assessment schedule",
    preview: "Thank you for sharing the schedule. Could you confirm…",
    time: "10:24 AM",
    unread: 1,
    initials: "MR",
    context: "Guardian of Ayesha Rahman · Grade 8A",
    presence: "Active 6 minutes ago",
    received: "Assalamu alaikum. Thank you for sharing the assessment schedule. Could you confirm whether students should bring their regular books on assessment days?",
    sent: "Wa alaikum assalam. Students only need the materials listed in the assessment notice. Regular classes resume after the assessment period.",
    receivedAt: "10:24 AM",
    sentAt: "10:31 AM",
  },
  {
    id: 2,
    sender: "Grade 8 · Section A",
    subject: "Attendance follow-up",
    preview: "12 families received the attendance reminder.",
    time: "9:12 AM",
    unread: 2,
    initials: "8A",
    context: "Class group · 38 students and 64 guardians",
    presence: "12 families received the latest update",
    received: "Three families have now submitted absence reasons. Nine responses are still outstanding.",
    sent: "Thank you. Please send one final reminder at 2:00 PM and route unresolved cases to the attendance office.",
    receivedAt: "9:12 AM",
    sentAt: "9:18 AM",
  },
  {
    id: 3,
    sender: "Farhana Akter",
    subject: "Mathematics assignment update",
    preview: "The due date has been extended to Thursday.",
    time: "Yesterday",
    unread: 0,
    initials: "FA",
    context: "Senior Teacher · Mathematics",
    presence: "Last active yesterday at 4:32 PM",
    received: "I extended the Grade 8 mathematics assignment deadline to Thursday because of the assessment schedule.",
    sent: "That works. Please publish the update to students and guardians, and attach the revised rubric.",
    receivedAt: "4:16 PM",
    sentAt: "4:22 PM",
  },
  {
    id: 4,
    sender: "Finance Office",
    subject: "July collection reminder",
    preview: "Campaign is ready for approval and scheduling.",
    time: "Yesterday",
    unread: 0,
    initials: "FO",
    context: "Finance team · 6 members",
    presence: "Campaign approval workflow",
    received: "The July collection reminder is ready. The audience contains 214 family accounts with balances due.",
    sent: "Approved. Schedule it for 4:00 PM and exclude accounts with a pending waiver decision.",
    receivedAt: "2:40 PM",
    sentAt: "2:48 PM",
  },
];

const initialThread = threads[0]!;

export function MessageCenter() {
  const [selectedId, setSelectedId] = useState(initialThread.id);
  const [query, setQuery] = useState("");
  const selected = threads.find((thread) => thread.id === selectedId) ?? initialThread;
  const visibleThreads = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return threads;
    return threads.filter((thread) => `${thread.sender} ${thread.subject} ${thread.preview}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div><span>Communications / Inbox</span><h1>Messages</h1><p>Keep school conversations clear, contextual, and securely connected to each learner.</p></div>
        <button type="button"><Plus size={16} weight="bold" />Compose message</button>
      </header>

      <section aria-label="Message statistics" className={styles.summary}>
        <article><EnvelopeSimple size={18} /><div><span>Unread</span><strong>34</strong></div></article>
        <article><PaperPlaneTilt size={18} /><div><span>Sent this week</span><strong>8,426</strong></div></article>
        <article><CheckCircle size={18} /><div><span>Delivery rate</span><strong>96.8%</strong></div></article>
        <article><Clock size={18} /><div><span>Scheduled</span><strong>9</strong></div></article>
      </section>

      <div className={styles.center}>
        <aside className={styles.folders}>
          <button className={styles.compose} type="button"><Plus size={16} weight="bold" />New conversation</button>
          <nav aria-label="Message folders">
            <button className={styles.active} type="button"><EnvelopeSimple size={17} />Inbox <span>34</span></button>
            <button type="button"><Star size={17} />Starred</button>
            <button type="button"><Clock size={17} />Scheduled <span>9</span></button>
            <button type="button"><PaperPlaneTilt size={17} />Sent</button>
            <button type="button"><Archive size={17} />Archived</button>
          </nav>
          <div className={styles.approval}><Bell size={18} /><div><strong>3 messages need approval</strong><span>Broad audiences require moderation.</span></div><button type="button">Review queue</button></div>
        </aside>

        <section aria-label="Conversations" className={styles.threadList}>
          <div className={styles.threadListTop}><div><strong>Chats</strong><span>34 unread</span></div><button aria-label="Start a new chat" type="button"><Plus size={18} /></button></div>
          <label className={styles.threadSearch}><MagnifyingGlass size={16} /><span className={styles.srOnly}>Search messages</span><input onChange={(event) => setQuery(event.target.value)} placeholder="Search conversations" type="search" value={query} /></label>
          <div className={styles.filterRow}><button className={styles.activeFilter} type="button">All</button><button type="button">Unread</button><button type="button">Groups</button></div>
          <div className={styles.threadScroller}>
            {visibleThreads.map((thread) => (
              <button aria-pressed={selectedId === thread.id} className={`${styles.thread} ${selectedId === thread.id ? styles.selected : ""}`} key={thread.id} onClick={() => setSelectedId(thread.id)} type="button">
                <span className={styles.avatar}>{thread.initials}<i aria-hidden="true" /></span>
                <span className={styles.threadCopy}><span><strong>{thread.sender}</strong><time>{thread.time}</time></span><b>{thread.subject}</b><small>{thread.preview}</small></span>
                {thread.unread ? <span aria-label={`${thread.unread} unread message${thread.unread > 1 ? "s" : ""}`} className={styles.unreadCount}>{thread.unread}</span> : <Checks aria-label="Read" className={styles.readMark} size={16} weight="bold" />}
              </button>
            ))}
            {visibleThreads.length === 0 ? <div className={styles.emptySearch}><MagnifyingGlass size={20} /><strong>No conversations found</strong><span>Try a person, class, or message subject.</span></div> : null}
          </div>
        </section>

        <main className={styles.conversation}>
          <header className={styles.conversationHeader}>
            <div className={styles.contact}><span className={styles.largeAvatar}>{selected.initials}<i aria-hidden="true" /></span><div><h2>{selected.sender}</h2><p>{selected.presence}</p></div></div>
            <div className={styles.chatActions}><button aria-label="Start voice call" type="button"><Phone size={18} /></button><button aria-label="Start video call" type="button"><VideoCamera size={19} /></button><button className={styles.contextButton} type="button"><UsersThree size={16} />View context</button><button aria-label="More conversation options" type="button"><DotsThreeVertical size={20} weight="bold" /></button></div>
          </header>
          <div className={styles.contextStrip}><div><strong>{selected.subject}</strong><span>{selected.context}</span></div><button type="button">Open details</button></div>

          <div aria-live="polite" className={styles.messages}>
            <div className={styles.encryption}><CheckCircle size={13} />Messages are protected and visible only to authorized school users.</div>
            <div className={styles.day}>Today</div>
            <article className={styles.received}><strong className={styles.senderName}>{selected.sender}</strong><p>{selected.received}</p><footer><span>SchoolHub</span><time>{selected.receivedAt}</time></footer></article>
            <article className={styles.sent}><p>{selected.sent}</p><footer><time>{selected.sentAt}</time><span><Checks aria-label="Read" size={16} weight="bold" />Read</span></footer></article>
          </div>

          <form className={styles.reply} onSubmit={(event) => event.preventDefault()}>
            <div className={styles.replyContext}><UsersThree size={14} /><span>Replying to {selected.sender}</span><small>In-app message</small></div>
            <div className={styles.composer}><button aria-label="Choose emoji" type="button"><Smiley size={21} /></button><button aria-label="Attach file" type="button"><Paperclip size={20} /></button><textarea aria-label="Write a reply" placeholder="Type a message" rows={1} /><button aria-label="Send reply" className={styles.sendButton} type="submit"><PaperPlaneTilt size={19} weight="fill" /></button></div>
            <span className={styles.composerHint}>Enter to send · Shift + Enter for a new line</span>
          </form>
        </main>
      </div>
    </div>
  );
}
