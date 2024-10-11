

export const fetchData = async (props: fetchDataProps): Promise<any> => {
  try {
    const { path, method = "GET", body, token } = props
    const api_path = process.env.API_PATH;

    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    const options: RequestInit = { method, headers }

    body && method != "GET" && (options.body = JSON.stringify(body))

    const res = await fetch(`${api_path}/${path}`, options)

    return await res.json()
  } catch (error) {
    console.log(error);
    return { message: "ERROR DURANTE EL FETCH", error }

  }
}
