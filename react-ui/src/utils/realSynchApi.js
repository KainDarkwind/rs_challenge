import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This is an API endpoint builder function.
export const realSynchApi = createApi({
  reducerPath: "realSynchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  keepUnusedDataFor: 3600, // cache data for 1 hour for same query; this is the default for all endpoints. Can customize per endpoint below.
  endpoints: (builder) => ({
    weather: builder.query({
      query: (city) => `weather/${city}`, // api/v1/weather/:city
    }),
  }),
});

export const { useWeatherQuery } = realSynchApi;
