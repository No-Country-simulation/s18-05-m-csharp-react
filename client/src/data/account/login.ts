import { fetchData } from "../fetchData"


const login = async (data: LoginFormValues): Promise<{ token: string }> => {
  const props: fetchDataProps = { path: "account/login", body: data, method: "POST" }
  return await fetchData(props)
}

export default login