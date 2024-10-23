"use client"
import { FC, PropsWithChildren, useState } from "react"
import Form from "../shared/Form"
import CustomInput from "../shared/CustomInput"
import { useForm } from "react-hook-form"
import { emailValidation, passwordValidation, confirmPasswordValidation, namesValidation, defaultRequireValidation } from "@/validations/common"
import fetchRegister from "@/data/account/register"
import SuccesModal from "./SuccesModal"

const Register: FC<PropsWithChildren> = ({ children }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [message, setMessage] = useState<StateMessage>({ text: null, error: false })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>()

  const onSubmit = handleSubmit((data: RegisterFormValues) => {
    setMessage({ text: "Conectando...", error: false })
    fetchRegister(data)
      .then(() => setOpenModal(true))
      .catch((error: Error) => setMessage({ text: error.message, error: true }))
  })

  return (<>
    <Form extraChildren={children} onSubmit={onSubmit} textSubmit="Registrarme">
      <CustomInput
        id="name"
        error={errors.name?.message}
        type="text"
        placeholder="Nombre"
        extraClass={`w-full custom-rounded`}
        {...register("name", namesValidation)}
      />
      <CustomInput
        id="lastName"
        error={errors.lastName?.message}
        type="text"
        placeholder="Apellido"
        extraClass={`w-full custom-rounded`}
        {...register("lastName", namesValidation)}
      />

      <CustomInput
        id="email"
        error={errors.email?.message}
        type="text"
        placeholder="Correo electrónico"
        extraClass={`w-full custom-rounded`}
        {...register("email", emailValidation)}
      />
      <CustomInput
        id="password"
        error={errors.password?.message}
        type="password"
        placeholder="Contraseña"
        extraClass={`w-full custom-rounded`}
        {...register("password", passwordValidation)}
      />

      <CustomInput
        id="confirmPassword"
        error={errors.confirmPassword?.message}
        type="password"
        placeholder="Repetir contraseña"
        extraClass={`w-full custom-rounded`}
        {...register("confirmPassword", confirmPasswordValidation(watch))}
      />

      <label htmlFor="terms" className="text-center flex flex-col gap-1 cursor-pointer mx-auto mt-3 align-middle">
        <span className="text-light-gray">
          <input type="checkbox" className="mr-2" id="terms" {...register("terms", defaultRequireValidation)} />
          Acepto terminos y condiciones
        </span>
        <span className="text-red-500">
          {errors.terms && "Es necesario aceptar los terminos y condiciones"}
        </span>
      </label>
      {
        message.text &&
        <span className={`${message.error ? "text-red-500" : "text-secondary"} text-center text-[10pt] mt-1`}>
          {message.text}
        </span>
      }
    </Form>
    {openModal && <SuccesModal setOpenModal={setOpenModal} />}
  </>
  )
}

export default Register