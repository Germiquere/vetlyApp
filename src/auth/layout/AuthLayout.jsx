import { TopHeader } from "../../vetly/components";

export const AuthLayout = ({ children }) => {
  return (
    <div>
      <TopHeader />
      {children}
    </div>
  );
};
