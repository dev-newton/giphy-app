import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../Modal";

describe("Modal", () => {
  it("should render correctly", () => {
    render(<Modal isOpen={true} onClose={() => {}} children={<></>} />);
  });

  it("should render correct child elements when open", () => {
    render(
      <Modal
        isOpen={true}
        onClose={() => {}}
        children={
          <>
            <h1>Testing Modal</h1>
          </>
        }
      />
    );

    const dialog = screen.getByRole("dialog");
    const heading = screen.getByRole("heading");
    expect(dialog).toContainElement(heading);
  });
});
