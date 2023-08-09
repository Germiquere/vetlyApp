export const getUserProfileByEmail = async (email) => {
  try {
    const res = await fetch(
      `fakeapiurl/api/UsuarioPerfil/getUsuarioPerfilByEmail?pEmail=${email}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
