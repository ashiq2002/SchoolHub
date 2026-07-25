import { AuthShell } from "@/features/authentication/auth-shell";

export default function AuthenticationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <AuthShell>{children}</AuthShell>;
}
