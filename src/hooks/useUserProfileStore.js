import { useDispatch, useSelector } from "react-redux";
import { startGettingUserProfileByEmail } from "../store/userProfile/thunks";

export const useUserProfileStore = () => {
  const {
    loading,
    id,
    email,
    tipo_usuario,
    familias_asignadas,
    patentesIndividuales_Asignadas,
    patentesPorFamilia_Asignadas,
    errorMessage,
  } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  const handlestartGettingUserProfileByEmail = (email) => {
    dispatch(startGettingUserProfileByEmail());
  };
  return {
    // PROPIEDADES
    loading,
    id,
    email,
    tipo_usuario,
    familias_asignadas,
    patentesIndividuales_Asignadas,
    patentesPorFamilia_Asignadas,
    errorMessage,
    // METODOS
    handlestartGettingUserProfileByEmail,
  };
};
