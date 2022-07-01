import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ballDontLieApi } from "../utils/ballDontLieApi";
import { realSynchApi } from "../utils/realSynchApi";

// https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
export const store = configureStore({
  reducer: {
    [ballDontLieApi.reducerPath]: ballDontLieApi.reducer,
    [realSynchApi.reducerPath]: realSynchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      ballDontLieApi.middleware,
      realSynchApi.middleware
    );
  },
});

setupListeners(store.dispatch);
