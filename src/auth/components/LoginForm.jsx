import React from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { auth } from "../../services/AuthService";

export const LoginForm = () => {
  const dataForm = {
    email: "",
    password: "",
  };
  const { email, password, onInputChange, formState } = useForm(dataForm);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    auth.login(
      {
        realm: "Username-Password-Authentication",
        username: email,
        password: password,
        redirectUri: "http://127.0.0.1:5173/auth/authenticate",
        responseType: "token",
      },
      function (err, result) {
        // TODO: MANEJAR DE UNA FORMA MAS LINDA EL ERROR
        if (err) return alert("Algo salio mal: " + err.message);
        // return alert("Login exitoso!");
        return console.log(result);
      }
    );
  };
  return (
    <form className="my-8 p-2 border-l-[2px]" onSubmit={onSubmit}>
      {/* email input */}
      <div className="relative mb-2">
        <input
          id="email"
          name="email"
          value={email}
          onChange={onInputChange}
          className="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-purple focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none"
          type="text"
          autoFocus
          placeholder="Ingresa tu email aquí"
        />
      </div>
      {/* password input */}
      <div className="relative mb-2">
        <input
          id="password"
          name="password"
          value={password}
          onChange={onInputChange}
          className="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-purple focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none"
          type="password"
          placeholder="Ingresa tu contraseña"
        />
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
