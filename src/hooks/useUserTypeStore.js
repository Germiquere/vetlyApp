import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../store/UserType";

export const useUserTypeStore = () => {
  const { userType } = useSelector((state) => state.userType);
  const dispatch = useDispatch();
  const handleSetUserType = (user) => {
    dispatch(setUserType(user));
  };
  return {
    // PROPIEDADES
    userType,
    // METODOS
    handleSetUserType,
  };
};
