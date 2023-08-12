import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthState } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, email, nickname, picture } = useSelector(
    (state) => state.auth
  );
  const handleSetAuthState = () => {
    const payload = JSON.parse(localStorage.getItem("authUser"));
    if (payload?.isAuthenticated) {
      dispatch(setAuthState(payload));
      //   console.log(payload.email);
    }
  };
  return {
    // PROPIEDADES
    isAuthenticated,
    email,
    nickname,
    picture,
    // METODOS
    handleSetAuthState,
  };
};
