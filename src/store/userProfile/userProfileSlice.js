import { createSlice } from "@reduxjs/toolkit";
export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    loading: false,
    id: null,
    email: null,
    tipo_usuario: "INVITADO", //administrador,cliente,profesional,veterinario,invitado
    familias_asignadas: null,
    patentesIndividuales_Asignadas: null,
    patentesPorFamilia_Asignadas: null,
    errorMessage: null,
    // ejemplo
    //loading:false
    // id: adasdsd15,
    // email: admin@vetly.com,
    // tipoUsuario: "administrador",
    // familiasAsignadas: "SEGURIDAD",
    // patentesPorFamiliasAsignadas: "Backup,Restore,Usuarios,Permisos,Logs",
  },
  reducers: {
    userProfileStart: (state, { payload }) => {
      state.loading = true;
      state.errorMessage = null;
    },
    userProfileSuccess: (state, { payload }) => {
      state.loading = false;
      state.id = payload.id;
      state.email = payload.email;
      state.tipo_usuario = payload.tipo_usuario;
      state.familias_asignadas = payload.familias_asignadas;
      state.patentesIndividuales_Asignadas =
        payload.patentesIndividuales_Asignadas;
      state.patentesPorFamilia_Asignadas = payload.patentesPorFamilia_Asignadas;
      state.errorMessage = null;
    },
    userProfileFailure: (state, { payload }) => {
      state.loading = false;
      state.errorMessage = payload?.errorMessage;
    },
  },
});
export const { userProfileStart, userProfileSuccess } =
  userProfileSlice.actions;
