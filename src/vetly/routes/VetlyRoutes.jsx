import { Navigate, Route, Routes } from "react-router-dom";
import {
  AgendaPage,
  BackupPage,
  BitacorasPage,
  ComidaDeGatoPage,
  ComidaDePerroPage,
  ErroresDeUsuariosPage,
  HistoriaClinicaPage,
  JuguetesPage,
  MascotasPage,
  PagosPage,
  PeluqueriaPage,
  PermisosDeUsuariosPage,
  TransportadorasPage,
  TurnoMedicoPage,
  UsuariosPage,
  VacunasPage,
  VetlyPage,
} from "../pages";
import { useUserProfileStore } from "../../hooks/useUserProfileStore";
import { useEffect } from "react";

export const VetlyRoutes = () => {
  const { handleStartLoginProfileByEmail } = useUserProfileStore();
  useEffect(() => {
    handleStartLoginProfileByEmail();
  }, []);
  const { tipo_usuario } = useUserProfileStore();
  const tipoUsuarioAdministrador = tipo_usuario === "ADMINISTRADOR";
  const tipoUsuarioInvitado = tipo_usuario === "INVITADO";
  const tipoUsuarioCliiente = tipo_usuario === "CLIENTE";

  return (
    <Routes>
      {/* invitado muestra literas */}
      {tipoUsuarioInvitado && <Route path="/" element={<VetlyPage />} />}
      {/* cliente muestra las mascotas */}
      {tipoUsuarioCliiente && <Route path="/" element={<MascotasPage />} />}
      {/* admin muestra usuarios */}
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
      {/* CLIENT ROUTES */}\
      {tipoUsuarioCliiente && (
        <Route path="/cliente/mascotas" element={<MascotasPage />} />
      )}
      {tipoUsuarioCliiente && (
        <Route path="/cliente/agenda" element={<AgendaPage />} />
      )}
      {tipoUsuarioCliiente && (
        <Route path="/cliente/turnoMedico" element={<TurnoMedicoPage />} />
      )}
      {tipoUsuarioCliiente && (
        <Route path="/cliente/pagos" element={<PagosPage />} />
      )}
      {tipoUsuarioCliiente && (
        <Route
          path="/cliente/historiaClinica"
          element={<HistoriaClinicaPage />}
        />
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
