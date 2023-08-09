import React from "react";
import { NavLink } from "react-router-dom";

export const CategoryAdmin = () => {
  return (
    <nav className="w-40">
      <NavLink
        to="/administrador/usuarios"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        {/* TODO: en cada uno de los "i" iria remplazado por el icono o imagen que me propor cione la gente de design */}
        <i className="fa-regular fa-face-smile"></i>
        <p>Usuarios</p>
      </NavLink>
      <NavLink
        to="/administrador/bitacoras"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Bitacoras</p>
      </NavLink>
      <NavLink
        to="/administrador/erroresDeUsuarios"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Errores de usuarios</p>
      </NavLink>
      <NavLink
        to="/administrador/permisosDeUsuarios"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Permisos de usuarios</p>
      </NavLink>
      <NavLink
        to="/administrador/backup"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Backup</p>
      </NavLink>
    </nav>
  );
};
