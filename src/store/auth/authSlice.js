import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    email: null,
    nickname: null,
    picture: null,
  },
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
    setAuthState: (state, { payload }) => {
      state.isAuthenticated = payload.isAuthenticated;
      state.email = payload.email;
      state.nickname = payload.nickname;
      state.picture = payload.picture;
    },
  },
});
export const { setIsAuthenticated, setAuthState } = authSlice.actions;
