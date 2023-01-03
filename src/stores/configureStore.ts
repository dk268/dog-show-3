import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { DOGS_SLICE_TYPE } from "~constants/dogsConstants";
import dogsReducer from "./dogs/dogsDuck";

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([logger]),
  reducer: {
    [DOGS_SLICE_TYPE]: dogsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
