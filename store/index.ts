import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import controlReducer from "./controlSlice";
import chatReducer from "./chatSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      control: controlReducer,
      chat: chatReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
