// require("dotenv").config();
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(process.env.REACT_APP_WEATHER_API_KEY);
console.log(process.env);
// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: " https://api.weatherapi.com/v1/",
  }),
  keepUnusedDataFor: 3600, // cache data for 1 hour for same query; this is the default for all endpoints. can customize per endpoint below.
  endpoints: (builder) => ({
    city: builder.query({
      query: (city) =>
        `current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`,
    }),
  }),
});

export const { useCityQuery } = weatherApi;
