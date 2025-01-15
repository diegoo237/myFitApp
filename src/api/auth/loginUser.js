export async function loginUser(credentials) {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas ou erro na requisição.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na API de login:", error);
  }
}
