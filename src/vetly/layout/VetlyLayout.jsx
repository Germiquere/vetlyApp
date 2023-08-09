import React from "react";
import { CategoryAdmin, CategoryGuest, Header } from "../components";
import { useUserProfileStore } from "../../hooks/useUserProfileStore";

export const VetlyLayout = ({ children }) => {
  const { tipo_usuario } = useUserProfileStore();
  const tipoUsuario = tipo_usuario === "administrador";
  return (
    <>
      <Header />
      <main className="pl-5 pr-10 mb-5 py-3 flex">
        {/* TODO:agregar mas tipos de usuarios segun el tipo de usuario logueado. En este caso solamente tengo el de guest(invitado) y el de admin(administrador) */}
        {tipoUsuario ? <CategoryAdmin /> : <CategoryGuest />}

        {children}
      </main>
    </>
  );
};
