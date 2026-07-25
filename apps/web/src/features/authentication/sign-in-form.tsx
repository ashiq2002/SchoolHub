"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeSlash, LockKey, ShieldCheck } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField } from "./form-field";
import { signInSchema, type SignInValues } from "./auth.schemas";
import styles from "./authentication.module.css";

export function SignInForm() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInValues>({ resolver: zodResolver(signInSchema), defaultValues: { email: "", password: "", remember: false } });
  const submit = async () => { await new Promise((resolve) => setTimeout(resolve, 350)); router.push("/select-organization"); };

  return <form className={styles.form} noValidate onSubmit={handleSubmit(submit)}>
    <FormField autoComplete="username" error={errors.email?.message} id="email" label="Email address" placeholder="name@school.edu" type="email" {...register("email")} />
    <div className={styles.passwordField}><FormField autoComplete="current-password" error={errors.password?.message} id="password" label="Password" placeholder="Enter your password" type={visible ? "text" : "password"} {...register("password")} /><button aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible((value) => !value)} type="button">{visible ? <EyeSlash size={18} /> : <Eye size={18} />}</button></div>
    <div className={styles.formOptions}><label className={styles.checkbox}><input type="checkbox" {...register("remember")} /><span>Keep me signed in</span></label><Link href="/forgot-password">Forgot password?</Link></div>
    <button className={styles.submitButton} disabled={isSubmitting} type="submit">{isSubmitting ? "Signing in…" : "Sign in"}</button>
    <div className={styles.divider}><span>or continue with</span></div>
    <button className={styles.secondaryButton} type="button"><ShieldCheck size={18} /> Sign in with school SSO</button>
    <div className={styles.securityNote}><LockKey size={16} /><span>Your session is protected with secure, encrypted cookies.</span></div>
  </form>;
}
