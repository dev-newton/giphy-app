export type GifProps = {
  id: string;
  title: string;
  images: {
    original_still: {
      url?: string;
      mp4?: string;
      webp?: string;
      width?: string;
      height?: string;
    };
  };
};

export type GifsProps = {
  data: GifProps[];
};
