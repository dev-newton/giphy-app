import { fireEvent, render, screen } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { act } from "react-dom/test-utils";
import Landing from "../Landing";

describe("Landing", () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it("should render correctly", () => {
    render(<Landing />);
  });

  it("should render header with value correctly ", () => {
    render(<Landing />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("Giphy App");
  });

  it("should render search input with no value", () => {
    render(<Landing />);

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue("");
    // screen.getByRole("");
  });
});
