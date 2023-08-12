import React from "react";
import { NavLink } from "react-router-dom";

export const CategoryClient = () => {
  return (
    <nav className="w-56 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-96 flex flex-col  pl-5">
      <NavLink to="/cliente/mascotas" className="flex gap-2  items-center p-2">
        {/* TODO: en cada uno de los "i" iria remplazado por el icono o imagen que me propor cione la gente de design */}
        <i className="fa-regular fa-face-smile"></i>
        <p>Mascotas</p>
      </NavLink>
      <NavLink to="/cliente/agenda" className="flex gap-2  items-center p-2">
        <i className="fa-regular fa-face-smile"></i>
        <p>Agenda</p>
      </NavLink>
      <NavLink
        to="/cliente/TurnoMedico"
        className="flex gap-2  items-center p-2"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Turno Medico</p>
      </NavLink>
      <NavLink to="/cliente/pagos" className="flex gap-2  items-center p-2">
        <i className="fa-regular fa-face-smile"></i>
        <p>Pagos</p>
      </NavLink>
      <NavLink
        to="/cliente/historiaClinica"
        className="flex gap-2  items-center p-2"
      >
        <i className="fa-regular fa-face-smile"></i>
        <p>Historia Clinica</p>
      </NavLink>
    </nav>
  );
};
