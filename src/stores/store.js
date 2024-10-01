import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import notificationReducer from "../features/notificationSlice";
import alertReducer from "../features/alertSlice";
import courseReducer from "../features/coursesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notification:notificationReducer,
    alert:alertReducer,
    course: courseReducer,
  },
});
