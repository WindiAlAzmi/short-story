import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import notificationReducer from "../features/notificationSlice";
import alertReducer from "../features/alertSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notification:notificationReducer,
    alert:alertReducer
  },
});
