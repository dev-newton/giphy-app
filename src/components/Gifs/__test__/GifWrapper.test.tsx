import { fireEvent, render, screen } from "@testing-library/react";
import Thumb from "components/Thumb/Thumb";
import GifWrapper from "../GifWrapper";

describe("GifWrapper", () => {
  const data = [
    {
      id: "123",
      title: "test title 1",
      images: {
        original_still: {
          url: "https://test-img-url-1.com",
        },
      },
    },
    {
      id: "1234",
      title: "test title 2",
      images: {
        original_still: {
          url: "https://test-img-url-2.com",
        },
      },
    },
  ];

  it("should render correctly", () => {
    render(<GifWrapper key="12345" cols={3} children={<></>} />);
  });

  it("should render correct number of gifs", () => {
    render(
      <GifWrapper
        key="12345"
        cols={3}
        children={
          <>
            {data.map((item) => (
              <Thumb key={item.id} gif={item} />
            ))}
          </>
        }
      />
    );

    const ThumbImg = screen.getAllByRole("img");

    expect(ThumbImg.length).toBe(2);
  });
});
