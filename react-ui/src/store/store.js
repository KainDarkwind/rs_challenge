import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ballDontLieApi } from "../utils/ballDontLieApi";
import { weatherApi } from "../utils/weatherApi";

export const store = configureStore({
  reducer: {
    [ballDontLieApi.reducerPath]: ballDontLieApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer, // https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      ballDontLieApi.middleware,
      weatherApi.middleware
    );
  },
});

// https://redux-toolkit.js.org/tutorials/rtk-query/#add-the-service-to-your-store
setupListeners(store.dispatch);
