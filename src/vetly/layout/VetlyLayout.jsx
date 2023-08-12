import {
  CategoryAdmin,
  CategoryClient,
  CategoryGuest,
  Header,
} from "../components";
import { useUserProfileStore } from "../../hooks/useUserProfileStore";

export const VetlyLayout = ({ children }) => {
  const { tipo_usuario } = useUserProfileStore();
  const tipoUsuarioAdministrador = tipo_usuario === "ADMINISTRADOR";
  const tipoUsuarioInvitado = tipo_usuario === "INVITADO";
  const tipoUsuarioCliiente = tipo_usuario === "CLIENTE";

  return (
    <>
      <Header />
      <main className="pl-5 pr-10 mb-5 py-3 flex">
        {/* TODO:agregar mas tipos de usuarios segun el tipo de usuario logueado. En este caso solamente tengo el de guest(invitado) , el de admin(administrador) y el de client(cliente)*/}
        <div>
          {tipoUsuarioInvitado && <CategoryGuest />}
          {tipoUsuarioCliiente && <CategoryClient />}
          {tipoUsuarioAdministrador && <CategoryAdmin />}
        </div>
        <div className="flex flex-col items-center  flex-1 w-full">
          {children}
        </div>
      </main>
    </>
  );
};
