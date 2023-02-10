import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taksSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
