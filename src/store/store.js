import { configureStore } from "@reduxjs/toolkit";
import { userProfileSlice } from "./userProfile";
import { authSlice } from "./auth";
import { userTypeSlice } from "./userType";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice.reducer,
    auth: authSlice.reducer,
    userType: userTypeSlice.reducer,
  },
});
