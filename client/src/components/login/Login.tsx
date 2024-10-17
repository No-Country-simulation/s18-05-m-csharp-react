"use client"
import { FC, PropsWithChildren, useState } from "react"
import Form from "../Form"
import CustomInput from "../CustomInput"
import { useForm } from "react-hook-form"
import { emailValidation, passwordValidation } from "@/validations/common"
import fetchLogin from "@/data/account/login"
import { useRouter } from "next/navigation"
import { setCookie } from 'cookies-next';
import useUser from "@/hooks/UseUser"

const Login: FC<PropsWithChildren> = ({ children }) => {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { logIn } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const onSubmit = handleSubmit((data: LoginFormValues) => {
    fetchLogin(data)
      .then(res => {
        if (res.token) {
          setCookie('token', res.token, { maxAge: Number(process.env.EXPIRATION_TIME) }); // Expira en 7 día
          logIn()
          router.push("/")
        }
      })
      .catch(err => setError(err.message))
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

      {
        error &&
        <span className="text-red-500 text-center text-body mt-1">
          {error}
        </span>
      }
    </Form>
  )
}

export default Login