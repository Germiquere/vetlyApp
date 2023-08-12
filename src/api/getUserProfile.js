// esta consulta a la api no la termine usando al hacer el refactor del codigo, la remplaze por la del postLoginProfilebyEmail, por el simple hecho de que ambas me reotrnaban lo mismo en base a un email
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
