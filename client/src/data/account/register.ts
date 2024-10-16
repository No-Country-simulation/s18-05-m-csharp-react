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
    .then((res) => true)
}

export default register