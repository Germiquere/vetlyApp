import { NavLink } from "react-router-dom";
import { useUserTypeStore } from "../../hooks";

export const SelectUserType = () => {
  const { handleSetUserType } = useUserTypeStore();
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex-col  border border-black p-5 ">
        <div className="flex gap-3 items-center mb-4">
          <div>LOGO</div>
          <div>
            <p>Registracion</p>
            <p>Seleccione el tipo de usuario</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <NavLink
            to="/auth/register"
            className="text-center"
            onClick={() => {
              handleSetUserType(1);
            }}
          >
            <div>LOGO</div>
            <p>Cliente</p>
          </NavLink>
          <NavLink
            className="text-center"
            to="/auth/register"
            onClick={() => {
              handleSetUserType(2);
            }}
          >
            <div>LOGO</div>
            <p>Profesional</p>
          </NavLink>
          <NavLink
            className="text-center"
            to="/auth/register"
            onClick={() => {
              handleSetUserType(3);
            }}
          >
            <div>LOGO</div>
            <p>Veterinario</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
