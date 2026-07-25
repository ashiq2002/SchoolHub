"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, FloppyDisk, Info } from "@phosphor-icons/react";
import type { Route } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { academicYearSchema, type AcademicYearFormValues } from "./academic-year.schema";
import type { AcademicYear } from "./academic-year.types";
import styles from "./academic-years.module.css";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) { return <div className={styles.field}><label><span>{label}</span>{children}</label>{error ? <span role="alert">{error}</span> : null}</div>; }

export function AcademicYearForm({ year }: { year?: AcademicYear }) {
  const router = useRouter();
  const [notice, setNotice] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AcademicYearFormValues>({ resolver: zodResolver(academicYearSchema), defaultValues: year ? { name: year.name, code: year.code, startDate: year.startDate, endDate: year.endDate, isDefault: year.isDefault } : { name: "", code: "", startDate: "", endDate: "", isDefault: false } });
  const submit = async (values: AcademicYearFormValues) => { await new Promise((resolve) => setTimeout(resolve, 450)); setNotice(`${values.name} was ${year ? "updated" : "created"}.`); setTimeout(() => router.push((year ? `/app/academics/academic-years/${year.id}` : "/app/academics/academic-years") as Route), 350); };
  return <form className={styles.formLayout} noValidate onSubmit={handleSubmit(submit)}>
    <div aria-live="polite" className={notice ? styles.notice : styles.srOnly}>{notice}</div>
    <section className={styles.formPanel}><header><h2>Academic year details</h2><p>Set the authoritative date range and identifier for this school.</p></header><div className={styles.formBody}>
      <Field error={errors.name?.message} label="Academic year name"><input aria-invalid={Boolean(errors.name)} placeholder="Academic Year 2027–2028" {...register("name")} /></Field>
      <Field error={errors.code?.message} label="Code"><input aria-invalid={Boolean(errors.code)} placeholder="AY27-28" {...register("code")} /></Field>
      <div className={styles.fieldRow}><Field error={errors.startDate?.message} label="Start date"><input aria-invalid={Boolean(errors.startDate)} type="date" {...register("startDate")} /></Field><Field error={errors.endDate?.message} label="End date"><input aria-invalid={Boolean(errors.endDate)} type="date" {...register("endDate")} /></Field></div>
      <label className={styles.checkCard}><input type="checkbox" {...register("isDefault")} /><span><strong>Use as the current academic year</strong><small>New sessions and school-wide context will default to this year after publication.</small></span></label>
    </div></section>
    <aside className={styles.formAside}><div><Info size={18} /><h3>Before you continue</h3><p>Academic-year dates cannot overlap another year in the same school. Published years require a controlled correction workflow.</p></div><div className={styles.formActions}><Link href={(year ? `/app/academics/academic-years/${year.id}` : "/app/academics/academic-years") as Route}><ArrowLeft size={15} /> Cancel</Link><button disabled={isSubmitting} type="submit"><FloppyDisk size={16} />{isSubmitting ? "Saving…" : year ? "Save changes" : "Create draft"}</button></div></aside>
  </form>;
}
