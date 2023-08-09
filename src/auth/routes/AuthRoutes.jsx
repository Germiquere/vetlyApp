import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage, SelectUserTypePage } from "../pages";
import { SelectUserType } from "../components";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="userType" element={<SelectUserTypePage />} />
      <Route path="register" element={<RegisterPage />} />
      {/* si se entra a mostrar el authroutes y no estoy en /login o /registro lo redirijo al login */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
