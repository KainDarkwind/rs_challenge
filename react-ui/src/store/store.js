import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ballDontLieApi } from "../utils/ballDontLieApi";
import { weatherApi } from "../utils/weatherApi";
import { realSynchApi } from "../utils/realSynchApi";

export const store = configureStore({
  reducer: {
    [ballDontLieApi.reducerPath]: ballDontLieApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [realSynchApi.reducerPath]: realSynchApi.reducer, // https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      ballDontLieApi.middleware,
      weatherApi.middleware,
      realSynchApi.middleware
    );
  },
});

// https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
setupListeners(store.dispatch);
