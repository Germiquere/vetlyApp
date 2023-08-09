import React from "react";
import { NavLink } from "react-router-dom";

export const BottomHeader = () => {
  return (
    <nav className="flex pl-5 pr-10 justify-between mb-5">
      <button className="flex gap-3 items-center hover:bg-gray-100">
        <i className="fa-solid fa-table"></i>
        <p>Categories</p>
        {/* TODO CAMBIAR LA FLECHA HACIA ARRIBA O ABAJO SEGUN SI ESTA DESPLEGADO EL MENU O NO */}
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      <div className="flex gap-10">
        {/* TODO HACER QUE VARIE LA RUTA SEGUN EL TIPO DE USUARIO */}
        <NavLink to="/">Home</NavLink>

        <NavLink to="/auth/login">Sign in</NavLink>
      </div>
    </nav>
  );
};