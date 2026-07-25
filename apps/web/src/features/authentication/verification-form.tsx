"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Key } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { otpSchema } from "./auth.schemas";
import styles from "./authentication.module.css";

export function VerificationForm({ purpose = "mfa" }: { purpose?: "mfa" | "email" }) {
  const router = useRouter();
  const [resent, setResent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{ code: string }>({ resolver: zodResolver(otpSchema), defaultValues: { code: "" } });
  const submit = async () => { await new Promise((resolve) => setTimeout(resolve, 300)); router.push(purpose === "mfa" ? "/select-organization" : "/sign-in"); };

  return <form className={styles.form} noValidate onSubmit={handleSubmit(submit)}>
    <div className={styles.codeField}><label htmlFor="code">6-digit verification code</label><input aria-describedby={errors.code ? "code-error" : "code-help"} aria-invalid={Boolean(errors.code)} autoComplete="one-time-code" id="code" inputMode="numeric" maxLength={6} placeholder="000000" {...register("code")} /><span className={errors.code ? styles.fieldError : styles.fieldHelp} id={errors.code ? "code-error" : "code-help"}>{errors.code?.message ?? "Enter the code from your authenticator app."}</span></div>
    <button className={styles.submitButton} disabled={isSubmitting} type="submit">{isSubmitting ? "Verifying…" : "Verify and continue"}</button>
    {purpose === "mfa" ? <button className={styles.secondaryButton} type="button"><Key size={18} /> Use a recovery code</button> : <button className={styles.textButton} onClick={() => setResent(true)} type="button">{resent ? "A new code was sent" : "Send a new code"}</button>}
    <Link className={styles.backLink} href="/sign-in"><ArrowLeft size={15} /> Back to sign in</Link>
  </form>;
}
