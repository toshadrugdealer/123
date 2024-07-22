import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setNews } from "../modal/newsSlice";
import { NewsApiResponse } from "..";
import { ParamsType } from "../../../shared/interfaces";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, ParamsType>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const {
          page_number = 1,
          page_size = 10,
          category,
          keywords,
        } = params || {};
        return {
          url: "search",
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          },
        };
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(setNews(data.news));
      },
    }),
    getLatestNews: builder.query<NewsApiResponse, ParamsType>({
      query: (params) => {
        const { page_size = 12 } = params || {};
        return {
          url: "latest-news",
          params: {
            apiKey: API_KEY,
            page_size,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
