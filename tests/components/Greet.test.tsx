import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Greet from "../../src/components/Greet";

describe("group", () => {
  it("should render Hello with the name when name is provided", () => {
    render(<Greet name="Nabin" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveTextContent(/nabin/i);
  });

  it("should render Login Button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent(/login/i);
  });
});
