import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CircularProgress } from "./circular-progress";

describe("CircularProgress", () => {
  it("announces its label and value", () => {
    render(<CircularProgress label="Attendance" value={94.6} valueLabel="94.6%" />);
    expect(screen.getByRole("img", { name: "Attendance: 94.6%" })).toBeInTheDocument();
  });
});
