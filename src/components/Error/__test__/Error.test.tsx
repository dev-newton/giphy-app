import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../Error";

describe("Error", () => {
  it("should render correctly", () => {
    render(<Error error="" />);
  });

  it("should render correct error message passed", () => {
    render(<Error error="Testing error" />);

    const errorMsg = screen.getByRole("article");
    expect(errorMsg.textContent).toBe("Testing error");
  });
});
