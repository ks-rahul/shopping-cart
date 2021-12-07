import { render, screen } from "@testing-library/react";

import Home from "../pages/about";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /About/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
