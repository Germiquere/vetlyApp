import { useDispatch, useSelector } from "react-redux";
import { startLoginProfileByEmail } from "../store/userProfile/thunks";

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
  const handleStartLoginProfileByEmail = () => {
    const data = JSON.parse(localStorage.getItem("authUser"));
    if (data?.isAuthenticated) {
      console.log(data.isAuthenticated);
      dispatch(startLoginProfileByEmail(data.email));
    }
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
    handleStartLoginProfileByEmail,
  };
};
