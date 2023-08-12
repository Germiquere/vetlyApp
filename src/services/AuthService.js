import auth0 from "auth0-js";
// INICIALIZAR UNA INSTANCIA DE AUTH0
export const auth = new auth0.WebAuth({
  domain: "dev-lqnhn2ygk2i1fzv8.us.auth0.com",
  clientID: "awolDJJB9jScDB56PN3UM4gPBeiZ807H",
  scope: "openid email profile",
});
