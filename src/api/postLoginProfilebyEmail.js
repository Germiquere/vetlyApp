export const postLoginProfilebyEmail = async (email) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  };
  try {
    const res = await fetch(
      `fakeapiurl/api/Usuario/LoginPerfilByEmail`,
      requestOptions
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
