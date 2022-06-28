import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ballDontLieApi } from "../utils/ballDontLieApi";

export const store = configureStore({
  reducer: {
    [ballDontLieApi.reducerPath]: ballDontLieApi.reducer, // https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ballDontLieApi.middleware);
  },
});

// https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
setupListeners(store.dispatch);
