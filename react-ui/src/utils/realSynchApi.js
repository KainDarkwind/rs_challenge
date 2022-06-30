import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const realSynchApi = createApi({
  reducerPath: "realSynchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  keepUnusedDataFor: 3600, // cache data for 1 hour for same query; this is the default for all endpoints. can customize per endpoint below.
  endpoints: (builder) => ({
    weather: builder.query({
      query: (city) => `weather/${city}`, // api/v1/weather/:city
    }),
  }),
});

export const { useWeatherQuery } = realSynchApi;
