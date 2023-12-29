import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "../reducers/phone-reducer";

export const store = configureStore({
  reducer: {
    phonePage: phoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
