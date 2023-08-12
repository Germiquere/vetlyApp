// import { postLoginProfilebyEmail } from "../../api/postLoginProfilebyEmail";
import { userProfileStart, userProfileSuccess } from "./userProfileSlice";

export const startLoginProfileByEmail = (email) => {
  return async (dispatch, getState) => {
    dispatch(userProfileStart());
    // aqui deberia llamar a la siguiente funcion, que esta comentada porque no le puedo pegar a una api que este funcionando, de lo contrario se me va a romper el codigo
    // const data = await postLoginProfilebyEmail(email);
    // esta funcion me devuelve el siguiente objeto que lo voy a guardar en mi state.
    // DATA HARDCODEADA
    const data = {
      id: 1,
      // Este email seria igual al email con el cual te logueas
      email,
      tipo_usuario: "CLIENTE",
      familias_asignadas: null,
      patentesIndividuales_Asignadas: null,
      patentesPorFamilia_Asignadas: null,
    };
    dispatch(userProfileSuccess(data));
  };
};
