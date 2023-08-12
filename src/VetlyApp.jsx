import { useAuthStore } from "./hooks";
import { AppRouter } from "./router/AppRouter";

export const VetlyApp = () => {
  const { handleSetAuthState } = useAuthStore();

  handleSetAuthState();

  return (
    <>
      <AppRouter />
    </>
  );
};
