export const postRegisterUser = async (email, id_tipo_usuario) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, id_tipo_usuario }),
  };
  try {
    const res = await fetch(
      `fakeapiurl/api/Usuario/RegistrarUsuario`,
      requestOptions
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
