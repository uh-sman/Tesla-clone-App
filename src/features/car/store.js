import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../car/CarSlice";
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
