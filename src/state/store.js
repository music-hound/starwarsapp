import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import { swApi } from './swApi';

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
    reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swApi.middleware),
});