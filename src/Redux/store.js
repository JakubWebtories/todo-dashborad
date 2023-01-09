import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Features/taskSlice"

const store = configureStore({
  reducer: {
    tasks: taskReducer
  },
})

export default store;
