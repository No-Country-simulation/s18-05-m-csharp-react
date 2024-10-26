

export const fetchData = async (props: fetchDataProps): Promise<any> => {
  try {
    const { path, method = "GET", body, token } = props
    const api_path = process.env.API_PATH;

    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    const options: RequestInit = { method, headers }

    if (body && method != "GET") {
      options.body = JSON.stringify(body)
    }

    const res = await fetch(`${api_path}/${path}`, options)
    if (process.env.MODE === "dev") console.log("FETCH DATA - RESPUESTA:", res);

    if (!res.ok) {
      const error = await res.json();
      if (process.env.MODE === "dev") console.log("FETCH DATA - RESPUESTA DE ERROR:", error);

      throw new Error(error.message || error.error || "Error en la solicitud");
    }

    return await res.json()

  } catch (error: Error | any) {
    if (process.env.MODE === "dev") console.error(error);
    error.name = "ERROR DURANTE EL FETCH"
    throw error

  }
}
