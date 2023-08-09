import { configureStore } from "@reduxjs/toolkit";
import { userProfileSlice } from "./auth";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice.reducer,
  },
});
