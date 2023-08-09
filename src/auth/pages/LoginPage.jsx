import { NavLink } from "react-router-dom";
import { LoginForm } from "../components";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center items-center h-screen ">
        <div className="flex justify-center gap-5 border border-black p-20">
          <div className="flex-col justify-center">
            {/* TODo: Aqui va el logo de la emprsa que me pasa la gente de design  */}
            <div>LOGO</div>
            <div className="p-0 m-0 flex justify-end">
              <div className="w-10"></div>
              <div>
                <h3>Estás a 1 paso!</h3>
                <h2 className="text-[2rem] text-purple">
                  Inicia sesión o crea una <br />
                  nueva cuenta para poder <br /> iniciar tu consulta
                </h2>
              </div>
            </div>
          </div>
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
};
