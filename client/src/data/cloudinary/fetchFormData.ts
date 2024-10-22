

const fetchFormData = async (path: string, formData: FormData, token?: string): Promise<any> => {
  try {
    const api_path = process.env.API_PATH;
    const fullUrl = `${api_path}${path}`;
    // Configurar los headers, pero sin Content-Type ya que lo maneja fetch cuando se envía FormData
    const headers: HeadersInit = { "Content-Type": "multipart/form-data" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const options: RequestInit = {
      method: "POST", // Suponemos que siempre será POST para subir un archivo
      headers,
      body: formData, // El body es el objeto FormData
    };

    const res = await fetch(fullUrl, options);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || error.error || "Error en la solicitud");
    }

    return await res.json(); // Asumimos que la respuesta es JSON

  } catch (error: Error | any) {
    if (process.env.MODE === "dev") console.error(error);
    error.name = "ERROR DURANTE EL FETCH FORM DATA";
    throw error;
  }
};

export default fetchFormData