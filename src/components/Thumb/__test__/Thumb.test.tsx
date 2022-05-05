import { fireEvent, render, screen } from "@testing-library/react";
import Thumb from "../Thumb";

describe("Thumb", () => {
  const gif = {
    id: "123",
    title: "test title",
    images: {
      original_still: {
        url: "https://test-img-url.com",
      },
    },
  };

  it("should render correctly", () => {
    render(<Thumb key={112} gif={gif} />);
  });

  it("should open modal when clicked", () => {
    render(<Thumb key={112} gif={gif} />);

    const imgThumb = screen.getByRole("img");
    fireEvent.click(imgThumb);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("when clicked, should display correct title on modal", () => {
    render(<Thumb key={112} gif={gif} />);

    const imgThumb = screen.getByRole("img");
    fireEvent.click(imgThumb);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe(gif.title);
  });
});
