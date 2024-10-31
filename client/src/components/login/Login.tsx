"use client"
import { FC, PropsWithChildren, useState } from "react"
import Form from "../shared/form/Form"
import CustomInput from "../shared/form/CustomInput"
import { useForm } from "react-hook-form"
import { emailValidation, passwordValidation } from "@/validations/common"
import fetchLogin from "@/data/account/login"
import { useRouter } from "next/navigation"
import { setCookie } from 'cookies-next';
import useUser from "@/hooks/useUser"

const Login: FC<PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = useState<StateMessage>({ text: null, error: false })
  const router = useRouter()
  const { logIn } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const onSubmit = handleSubmit((data: LoginFormValues) => {
    setMessage({ text: "Conectando...", error: false })    
    fetchLogin(data)
      .then(res => {
        if (res.token) {
          setCookie('token', res.token, { maxAge: Number(process.env.EXPIRATION_TIME) }); // Expira en 7 día
          logIn()
          router.push("/")
        }
      })
      .catch(err => setMessage({text: err.message, error: true}))
  })

  return (
    <Form extraChildren={children} onSubmit={onSubmit}>
      <CustomInput
        autoComplete="email"
        id="email"
        error={errors.email?.message}
        type="text"
        placeholder="Correo electrónico"
        extraClass={`w-full custom-rounded`}
        {...register("email", emailValidation)}
      />
      <CustomInput
        autoComplete="off"
        id="password"
        error={errors.password?.message}
        type="password"
        placeholder="Contraseña"
        extraClass={`w-full custom-rounded`}
        {...register("password", passwordValidation)}
      />

      {
        message.text &&
        <span className={`${message.error ? "text-red-500" : "text-secondary"} text-center text-[10pt] mt-1`}>
          {message.text}
        </span>
      }
    </Form>
  )
}

export default Login