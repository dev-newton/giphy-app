import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../Input";

describe("Input", () => {
  it("should render correctly", () => {
    render(<Input type="text" value="" handleChange={() => {}} size="lg" />);
  });

  it("should render correct value entered", () => {
    render(<Input type="text" handleChange={() => {}} size="lg" />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test value" } });
    expect(input).toHaveValue("test value");
  });

  it("should render input with class of 'lg' size", () => {
    render(<Input type="text" handleChange={() => {}} size="lg" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("input lg");
  });

  it("should render input with class of 'md' size", () => {
    render(<Input type="text" handleChange={() => {}} size="md" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("input md");
  });
});
