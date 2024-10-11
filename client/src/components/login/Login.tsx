"use client"
import { FC, ReactNode } from "react"
import Form from "../Form"
import CustomInput from "../CustomInput"
import { useForm } from "react-hook-form"
import { emailValidation, passwordValidation } from "@/validations/common"

type Props = {
  children: ReactNode
}

const Login: FC<Props> = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>()

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
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