import { fetchData } from "../fetchData"


const login = (data: LoginFormValues): Promise<{ token: string }> => {
  const props: fetchDataProps = { path: "account/login", body: data, method: "POST" }
  return fetchData(props)
    .then((res) => {
      if (res.error) throw new Error(res.error)
      return res
    })
}

export default login