import { createSlice } from "@reduxjs/toolkit";
export const userTypeSlice = createSlice({
  name: "userType",
  initialState: {
    userType: null, //1,2,3
  },
  reducers: {
    setUserType: (state, { payload }) => {
      state.userType = payload;
    },
  },
});
export const { setUserType } = userTypeSlice.actions;
