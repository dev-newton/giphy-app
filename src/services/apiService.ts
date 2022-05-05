import axios from "axios";
import { GifsProps } from "types";
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
/* eslint-disable import/no-anonymous-default-export */

export default {
  url: REACT_APP_API_URL,
  headers() {
    let header: { [k: string]: any } = {};
    header["Content-Type"] = "application/json";

    return header;
  },

  searchGifs(searchText: string, searchType: string, offset: number) {
    return axios.get<GifsProps>(
      `${this.url}/${searchType}?api_key=${REACT_APP_API_KEY}${
        (searchType === "search" && "&q=" + searchText) || ""
      }&limit=25&rating=g${offset ? `&offset=` + offset : ""}`
    );
  },
};
