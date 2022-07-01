import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This is an API endpoint builder function.  (Define a service using a base URL and expected endpoints)
export const ballDontLieApi = createApi({
  reducerPath: "ballDontLieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.balldontlie.io/api/v1/",
  }),
  keepUnusedDataFor: 86400, // cache data for 24 hours for same query; this is the default for all endpoints. Can customize per endpoint below.
  endpoints: (builder) => ({
    teams: builder.query({
      query: () => `teams`,
    }),
  }),
});

export const { useTeamsQuery } = ballDontLieApi;
