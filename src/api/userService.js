export async function registerUser(credentials) {
  return fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      throw error;
    });
}
