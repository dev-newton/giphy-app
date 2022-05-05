import { useEffect, useState, useRef, useMemo } from "react";
import { GifProps } from "types";
import apiService from "services/apiService";
import { getUniqueBy, debounce } from "helpers";
import useObserver from "./useObserver";

const useGifs = () => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("trending");
  const [gifs, setGifs] = useState<GifProps[]>([]);
  const [offset, setOffset] = useState(0);
  const [cols, setCols] = useState(3);
  const [error, setError] = useState(false);

  let limit = 25;
  const loader = useRef<HTMLDivElement>(null);

  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 0,
  };

  useEffect(() => {
    fetchGifs(searchText, searchType, offset);
    // eslint-disable-next-line
  }, [searchText, searchType, offset]);

  // The first param of the useObserver hook is the element to observe,
  // and the second is the options object. The hook returns a boolean
  // which tells us whether or not the element has been observed
  const isVisible = useObserver(loader, options);

  useEffect(() => {
    if (isVisible && gifs.length) {
      setOffset((offset) => offset + limit);
    }
    // eslint-disable-next-line
  }, [isVisible]);

  const fetchGifs: any = useMemo(
    () =>
      debounce(
        async (searchText: string, searchType: string, offset: number) => {
          try {
            const res = await apiService.searchGifs(
              searchText,
              searchType,
              offset
            );

            if (offset > 0) {
              return setGifs((prev) =>
                getUniqueBy([...prev, ...res.data.data], "id")
              );
            }
            setGifs(getUniqueBy(res.data.data, "id"));
          } catch (error: any) {
            setError(error.response.data.message);
          }
        },
        500
      ),

    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      setSearchType("search");
      setOffset(0);
      window.scrollTo(0, 0);
    } else {
      setSearchType("trending");
    }

    setSearchText(e.target.value);
  };

  const handleColsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCols(+e.target.value);
  };

  return {
    searchText,
    searchType,
    cols,
    gifs,
    handleColsChange,
    handleSearch,
    loader,
    error,
  };
};

export default useGifs;
