import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IconButton } from "./icon-button";

describe("IconButton", () => {
  it("exposes an accessible name for icon-only actions", () => {
    render(<IconButton label="Open notifications"><span aria-hidden="true">icon</span></IconButton>);
    expect(screen.getByRole("button", { name: "Open notifications" })).toBeInTheDocument();
  });
});
