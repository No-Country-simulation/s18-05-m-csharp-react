import { fetchData } from "../fetchData"


const register = (data: RegisterFormValues): Promise<boolean> => {
  const props: fetchDataProps = {
    path: "account/register",
    body: {
      email: data.email,
      password: data.password,
      name: data.name,
      lastName: data.lastName
    },
    method: "POST"
  }
  return fetchData(props)
    .then((res) => {
      if (res.error) throw new Error(res.error)
      return true
    })
    // Esto es porque no devuelve nada que se pueda transformar en json
    .catch(e => true)
}

export default register