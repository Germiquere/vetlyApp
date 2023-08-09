import { Navigate, Route, Routes } from "react-router-dom";
import {
  BackupPage,
  BitacorasPage,
  ComidaDeGatoPage,
  ComidaDePerroPage,
  ErroresDeUsuariosPage,
  JuguetesPage,
  PeluqueriaPage,
  PermisosDeUsuariosPage,
  TransportadorasPage,
  UsuariosPage,
  VacunasPage,
  VetlyPage,
} from "../pages";
import { useUserProfileStore } from "../../hooks/useUserProfileStore";

export const VetlyRoutes = () => {
  const { tipo_usuario } = useUserProfileStore();
  const tipoUsuarioAdministrador = tipo_usuario === "administrador";
  const tipoUsuarioInvitado = tipo_usuario === "invitado";
  return (
    <Routes>
      {/* invitado muestra literas */}
      {tipoUsuarioInvitado && <Route path="/" element={<VetlyPage />} />}
      {/* admin muestra los usuarios */}
      {tipoUsuarioAdministrador && (
        <Route path="/" element={<UsuariosPage />} />
      )}
      {/* si se entra a mostrar el veltypage y no estoy en /administrador, /profesional, /veterinaria o /cliente lo redirijo al / que seria el invitado */}
      {/* GUEST RUTES */}
      {tipoUsuarioInvitado && (
        <Route path="/comidaDePerro" element={<ComidaDePerroPage />} />
      )}
      {tipoUsuarioInvitado && (
        <Route path="/comidaDeGato" element={<ComidaDeGatoPage />} />
      )}
      {tipoUsuarioInvitado && (
        <Route path="/transportadoras" element={<TransportadorasPage />} />
      )}
      {tipoUsuarioInvitado && (
        <Route path="/juguetes" element={<JuguetesPage />} />
      )}
      {tipoUsuarioInvitado && (
        <Route path="/peluqueria" element={<PeluqueriaPage />} />
      )}
      {tipoUsuarioInvitado && (
        <Route path="/vacunas" element={<VacunasPage />} />
      )}
      {/* ADMIN ROUTES */}
      {tipoUsuarioAdministrador && (
        <Route path="/administrador/usuarios" element={<UsuariosPage />} />
      )}
      {tipoUsuarioAdministrador && (
        <Route path="/administrador/bitacoras" element={<BitacorasPage />} />
      )}
      {tipoUsuarioAdministrador && (
        <Route
          path="/administrador/erroresDeUsuarios"
          element={<ErroresDeUsuariosPage />}
        />
      )}
      {tipoUsuarioAdministrador && (
        <Route
          path="/administrador/permisosDeUsuarios"
          element={<PermisosDeUsuariosPage />}
        />
      )}
      {tipoUsuarioAdministrador && (
        <Route path="/administrador/backup" element={<BackupPage />} />
      )}
      {/*  */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
