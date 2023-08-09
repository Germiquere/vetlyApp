import React from "react";
import { NavLink } from "react-router-dom";

export const LoginForm = () => {
  return (
    <form className="my-8 p-2 border-l-[2px]">
      {/* email input */}
      <div className="relative mb-2">
        <input
          id="email"
          className="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-purple focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none"
          type="text"
          autoFocus
        />
        <label
          htmlFor="email"
          className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"
        >
          Ingresa tu email aquí
        </label>
      </div>
      {/* password input */}
      <div className="relative mb-2">
        <input
          id="password"
          className="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-purple focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none"
          type="password"
        />
        <label
          htmlFor="password"
          className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text"
        >
          Ingresa tu contraseña
        </label>
      </div>
      <div className="space-y-9 text-right">
        <div>
          <NavLink to="#" className="text-sm font-bold text-purple">
            Ooops. Olvidé mi contraseña
          </NavLink>
        </div>
        <div className="flex w-full justify-center gap-3">
          <button className="py-2 px-6 rounded text-white btn bg-purple hover:bg-violet-700 ">
            INICIAR SESION
          </button>
          <NavLink to="/">
            <button className="py-2 px-6 rounded text-white btn bg-purple hover:bg-violet-700">
              CANCELAR
            </button>
          </NavLink>
        </div>
        <div className="text-sm flex">
          <p>Todavia no tenes cuenta ?</p>
          <NavLink
            className="font-bold text-purple underline"
            to="/auth/userType"
          >
            Crear una cuenta nueva
          </NavLink>
        </div>
      </div>
    </form>
  );
};
