import { RefObject } from "react";
import "./Spinner.css";

type SpinnerProps = {
  reff?: RefObject<HTMLDivElement>;
};

const Spinner = ({ reff }: SpinnerProps) => {
  return (
    <div className="loader-wrapper">
      <div ref={reff} className="loader"></div>
    </div>
  );
};

export default Spinner;
