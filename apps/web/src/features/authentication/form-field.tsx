import type { InputHTMLAttributes } from "react";
import styles from "./authentication.module.css";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };

export function FormField({ label, error, id, ...props }: FormFieldProps) {
  const errorId = `${id}-error`;
  return <div className={styles.field}><label htmlFor={id}>{label}</label><input aria-describedby={error ? errorId : undefined} aria-invalid={Boolean(error)} id={id} {...props} />{error ? <span className={styles.fieldError} id={errorId} role="alert">{error}</span> : null}</div>;
}
