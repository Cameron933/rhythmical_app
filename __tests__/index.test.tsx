import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const homeImg = screen.getByRole("img", { name: /next\.js logo/i });

    expect(homeImg).toBeInTheDocument();
  });
});
