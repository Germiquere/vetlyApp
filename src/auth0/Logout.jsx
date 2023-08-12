import { auth } from "../services/AuthService";

export const Logout = () => {
  const onLogout = () => {
    auth.logout({
      returnTo: "http://127.0.0.1:5173/",
      clientID: "awolDJJB9jScDB56PN3UM4gPBeiZ807H",
    });
    localStorage.clear();
    console.log("me ejecute");
  };
  return <button onClick={onLogout}>Cerrar Sesion</button>;
};
