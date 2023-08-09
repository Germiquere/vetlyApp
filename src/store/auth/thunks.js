import { getUserProfileByEmail } from "../../api/getUserProfile";
import { userProfileStart, userProfileSuccess } from "./userProfileSlice";

export const startGettingUserProfileByEmail = (email) => {
  return async (dispatch, getState) => {
    dispatch(userProfileStart());
    // aqui deberia llamar a la siguiente funcion, que esta comentada porque no le puedo pegar a una api que este funcionando, de lo contrario se me va a romper el codigo
    //const data = await getUserProfileByEmail(email);
    // esta funcion me devuelve el siguiente objeto que lo voy a guardar en mi state.
    // DATA HARDCODEADA
    const data = {
      id: 1,
      email: "admin@vetly.com",
      tipo_usuario: "administrador",
      familias_asignadas: "seguridad",
      patentesIndividuales_Asignadas: null,
      patentesPorFamilia_Asignadas: "Backup,Restore,Usuarios,Permisos,Logs",
    };
    dispatch(userProfileSuccess(data));
  };
};
