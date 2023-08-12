import React, { useEffect } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { useLocation } from "react-router-dom";
import { auth } from "../../services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated } from "../../store/auth/authSlice";
import { PreLoader } from "../../vetly/components";

export const RedirectPage = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const parseHash = (hash) => {
    auth.parseHash(
      {
        hash,
      },
      function (err, result) {
        // TODO: MANEJAR DE UNA FORMA MAS LINDA EL ERROR
        if (err)
          return console.log("Algo salio mal con el hash: " + err.message);
        if (result) {
          const { accessToken } = result;
          // TODO: guardar en el local storage el token
          localStorage.setItem("accessToken", accessToken);
          if (accessToken) {
            auth.client.userInfo(accessToken, function (err, result) {
              if (err) {
                return alert("Algo salio mal con el token: " + err.message);
              }

              //   hago el redireccionamiento a la pagina principal luego de conseguir los datos
              const userWithAuth = { ...result, isAuthenticated: true };
              localStorage.setItem("authUser", JSON.stringify(userWithAuth));

              //   REDIRIGIR A OTRA PAGINA
              dispatch(setIsAuthenticated());
              window.location.href = "/";
            });
          }
        }
      }
    );
  };
  useEffect(() => {
    // obtener el hash
    if (location.hash) {
      parseHash(location.hash);
    } else {
      console.log("no");
    }
  }, [location]);

  return (
    <AuthLayout>
      <PreLoader />
    </AuthLayout>
  );
};
