import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  RedirectPage,
  RegisterPage,
  SelectUserTypePage,
} from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="userType" element={<SelectUserTypePage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="authenticate" element={<RedirectPage />} />

      {/* si se entra a mostrar el authroutes y no estoy en /login ,/userType,authenticate, /register lo redirijo al login */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
