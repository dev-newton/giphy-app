import { ReactNode } from "react";
import "./Gif.css";

type GifWrapperProps = {
  children: ReactNode;
  cols: number;
};

const GifWrapper = ({ children, cols }: GifWrapperProps) => {
  return (
    <div
      className="gif-wrapper"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default GifWrapper;
