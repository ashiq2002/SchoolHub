"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { recoverySchema, type RecoveryValues } from "./auth.schemas";
import { FormField } from "./form-field";
import styles from "./authentication.module.css";

export function RecoveryForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RecoveryValues>({ resolver: zodResolver(recoverySchema), defaultValues: { email: "" } });
  const submit = async () => { await new Promise((resolve) => setTimeout(resolve, 300)); setSent(true); };
  if (sent) return <div aria-live="polite" className={styles.successBox}><strong>Check your inbox</strong><p>If an account matches that address, we sent password recovery instructions. The link expires soon for your security.</p><Link href="/sign-in">Return to sign in</Link></div>;
  return <form className={styles.form} noValidate onSubmit={handleSubmit(submit)}><FormField autoComplete="email" error={errors.email?.message} id="email" label="Email address" placeholder="name@school.edu" type="email" {...register("email")} /><button className={styles.submitButton} disabled={isSubmitting} type="submit">{isSubmitting ? "Sending…" : "Send recovery link"}</button><Link className={styles.backLink} href="/sign-in">Back to sign in</Link></form>;
}
