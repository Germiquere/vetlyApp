import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useForm, useUserTypeStore } from "../../hooks";
import { auth } from "../../services/AuthService";
import { postRegisterUser } from "../../api/postRegisterUser";

export const RegisterForm = () => {
  // SE USA EN LA FUNCION COMENTADA EN LA LINEA 34
  // const { userType } = useUserTypeStore();
  const dataForm = {
    email: "",
    password: "",
  };
  const { email, password, onInputChange } = useForm(dataForm);
  const onSubmit = (e) => {
    e.preventDefault();
    auth.signup(
      {
        connection: "Username-Password-Authentication",
        email: email,
        password: password,
      },
      function (err, result) {
        // TODO: MANEJAR DE UNA FORMA MAS LINDA EL ERROR
        if (err) return alert("Algo salio mal: " + err.message);
        if (result) {
          console.log(result);
          // TODO: mejorar esto para que se vea mas lindo
          alert("cuenta creada con exito");

          // HACER EL FETCHING REGISTRANDO EL USUARIO
          // ESTA FUNCION ESTA COMENTADA PORQUE AL NO TENER UNA API FUNCIONANDO, SI LA EJECUTO SE ROMPE LA COMPILACION DEL CODIGO.
          // -------------------------------------------------------------------------------------------------------
          // postRegisterUser(email, userType)
          //   .then((data) => {
          //     console.log(data);
          //   })
          //   .catch((err) => {
          //     console.log("Error en el registro del usuario:", error);
          //   });
          // -------------------------------------------------------------------------------------------------------
          // UNA VEZ QUE YA EL USUARIO ESTA REGISTRADO TANTOO EN AUTH0 Y EN MI BASE DE DATOS, LO REDIRIJO AL LOGIN.
          return (window.location.href = "/auth/login");
        }
      }
    );
  };
  return (
    <form className="my-8 p-2" onSubmit={onSubmit}>
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
          placeholder="Ingresa tu email aqui"
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
          placeholder="password"
        />
      </div>

      <div className="space-y-9 text-right">
        <div className="flex w-full justify-center gap-3">
          <button className="py-2 px-6 rounded text-white btn bg-purple hover:bg-violet-700 ">
            CREAR CUENTA
          </button>
          <NavLink to="/">
            <button className="py-2 px-6 rounded text-white btn bg-purple hover:bg-violet-700">
              CANCELAR
            </button>
          </NavLink>
        </div>
        <div className="text-sm flex">
          <p>Ya tenes unacuenta ?</p>
          <NavLink className="font-bold text-purple underline" to="/auth/login">
            Ingresar con una cuenta existente
          </NavLink>
        </div>
      </div>
    </form>
  );
};
