import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
	reducerPath: "articleApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
		prepareHeaders: (headers) => {
			headers.set("X-RapidAPI-Key", rapidApiKey);
			headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");

			return headers;
		},
	}),

	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) => `/summarize?url=${encodeURIComponent(params.article)}&length=3`,
		}),
	}),
});

export const { useLazyGetSummaryQuery } = articleApi;

// const options = {
// 	method: "GET",
// 	url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
// 	params: {
// 		url: "https://time.com/6266679/musk-ai-open-letter/",
// 		length: "3",
// 	},
// 	headers: {
// 		"X-RapidAPI-Key": "a1087d2daamsh01e40a6aa6075b1p1e4698jsn2a4bf1ca3b35",
// 		"X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
// 	},
// };
