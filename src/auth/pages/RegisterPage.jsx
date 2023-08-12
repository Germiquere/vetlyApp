import { RegisterForm } from "../components";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center items-center h-screen ">
        <div className="flex-col justify-center gap-5 border border-black p-20 items-center text-center">
          {/* TODO: Aqui va el logo de la emprsa que me pasa la gente de design  */}
          <div>LOGO</div>

          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  );
};
