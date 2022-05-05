import { GifProps } from "types";
import { GifWrapper, GifModal } from "components";
import useModal from "../Modal/useModal";
import "./Thumb.css";

type ThumbProps = {
  gif: GifProps;
};

const Thumb = ({ gif: { id, images, title } }: ThumbProps) => {
  const { openModal, closeModal, isOpen } = useModal();

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => openModal();

  const animatedGifs = Object.entries(images).filter(
    (prop: any) => !prop[0].includes("still") && images
  );

  return (
    <>
      <div key={id} className="thumb-img-wrapper" onClick={handleClick}>
        <img
          className="thumb-img"
          src={images.original_still.url}
          alt="thumb-img"
        />
      </div>
      <GifModal isOpen={isOpen} onClose={closeModal}>
        <div className="container">
          <h1 className="thumb-header">{title}</h1>
          <GifWrapper cols={2}>
            {animatedGifs.map((gif) => {
              const size = gif[0];
              const size_props = gif[1];
              return (
                <div key={size}>
                  <p className="thumb-title">{size}</p>
                  {size_props.url ? (
                    <img
                      width={size_props.width}
                      height={size_props.height}
                      src={size_props.url}
                      alt="img"
                    />
                  ) : (
                    <video
                      width={size_props.width}
                      height={size_props.height}
                      controls
                      autoPlay
                      loop
                    >
                      <source src={size_props.mp4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              );
            })}
          </GifWrapper>
        </div>
      </GifModal>
    </>
  );
};

export default Thumb;
