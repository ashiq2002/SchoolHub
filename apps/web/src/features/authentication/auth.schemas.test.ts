import { describe, expect, it } from "vitest";
import { otpSchema, signInSchema } from "./auth.schemas";

describe("authentication schemas", () => {
  it("normalizes a valid sign-in identifier", () => {
    const result = signInSchema.parse({ email: "  admin@greenfield.edu ", password: "schoolhub-demo", remember: false });
    expect(result.email).toBe("admin@greenfield.edu");
  });

  it("rejects malformed verification codes", () => {
    expect(otpSchema.safeParse({ code: "12A45" }).success).toBe(false);
  });
});
