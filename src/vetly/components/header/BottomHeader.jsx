import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../../hooks/useAuthStore";
import { Logout } from "../../../auth0/Logout";
export const BottomHeader = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <nav className="flex pl-5 pr-10 justify-between ">
      <button className="flex gap-3 items-center bg-gray-100 p-4 rounded-md ml-6 ">
        <i className="fa-solid fa-table"></i>
        <p>Categories</p>
        {/* TODO CAMBIAR LA FLECHA HACIA ARRIBA O ABAJO SEGUN SI ESTA DESPLEGADO EL MENU O NO */}
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      <div className="flex gap-10">
        <NavLink to="/">Home</NavLink>
        {isAuthenticated ? (
          <Logout />
        ) : (
          <NavLink to="/auth/login">Iniciar sesion</NavLink>
        )}
      </div>
    </nav>
  );
};
