import { Route, Routes } from "react-router-dom";
import { VetlyRoutes } from "../vetly";
import { AuthRoutes } from "../auth";
import { useEffect } from "react";
import { useUserProfileStore } from "../hooks/useUserProfileStore";

export const AppRouter = () => {
  const { handlestartGettingUserProfileByEmail } = useUserProfileStore();
  useEffect(() => {
    handlestartGettingUserProfileByEmail("admin@vetly.com");
  }, []);

  return (
    <Routes>
      {/* login y registro */}
      {/* ESTA PARTE LA COMENTO EN ESTE MOMENTO PORQUE NO SUPE COMO INTEGRAR ESTE LOGIN CON EL DE AUTH0 , PERO QUIERO MOSTRARLES QUE SE UTILIZAR EL AUTH0 */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* vetlyapp */}
      <Route path="/*" element={<VetlyRoutes />} />
    </Routes>
  );
};
