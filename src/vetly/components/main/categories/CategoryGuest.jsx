import React from "react";
import { NavLink } from "react-router-dom";

export const CategoryGuest = () => {
  return (
    <nav className="w-40">
      <NavLink
        to="/literas"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        {/* TODO: en cada uno de los "i" iria remplazado por el icono o imagen que me propor cione la gente de design */}
        <i className="fa-regular fa-face-smile"></i>
        <p>Literas</p>
      </NavLink>
      <NavLink
        to="/comidaDePerro"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Comida de Perro</p>
      </NavLink>
      <NavLink
        to="/comidaDeGato"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Comida de Gato</p>
      </NavLink>
      <NavLink
        to="/transportadoras"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Transportadoras</p>
      </NavLink>
      <NavLink
        to="/juguetes"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Juguetes</p>
      </NavLink>
      <NavLink
        to="/peluqueria"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Peluqueria</p>
      </NavLink>
      <NavLink
        to="/vacunas"
        className="flex gap-2 hover:bg-gray-100 items-center"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>vacunas</p>
      </NavLink>
    </nav>
  );
};
