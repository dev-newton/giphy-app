import { GifsProps } from "types";
import { Thumb } from "components";

const Gifs = ({ data }: GifsProps) => {
  return (
    <>
      {data.map((gif) => (
        <Thumb key={gif.id} gif={gif} />
      ))}
    </>
  );
};

export default Gifs;
