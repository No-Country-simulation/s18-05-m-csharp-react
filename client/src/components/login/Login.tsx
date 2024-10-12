"use client"
import { FC, PropsWithChildren } from "react"
import Form from "../Form"
import CustomInput from "../CustomInput"
import { useForm } from "react-hook-form"
import { emailValidation, passwordValidation } from "@/validations/common"
import fetchLogin from "@/data/account/login"
import { useRouter } from "next/navigation"
import { setCookie } from 'cookies-next';
import useUser from "@/hooks/UseUser"

const Login: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const { logIn } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const onSubmit = handleSubmit(async (data: LoginFormValues) => {
    const login = await fetchLogin(data)
    if (login?.token) {
      setCookie('token', login.token, { maxAge: 60 * 60 * 24 * 7 }); // Expira en 7 día
      logIn()
      router.push("/")
    }
  })

  return (
    <Form extraChildren={children} onSubmit={onSubmit}>
      <CustomInput
        autoComplete="email"
        id="email"
        error={errors.email?.message}
        type="text"
        placeholder="Correo electrónico"
        extraClass={`w-full`}
        {...register("email", emailValidation)}
      />
      <CustomInput
        autoComplete="off"
        id="password"
        error={errors.password?.message}
        type="password"
        placeholder="Contraseña"
        extraClass={`w-full`}
        {...register("password", passwordValidation)}
      />
    </Form>
  )
}

export default Login