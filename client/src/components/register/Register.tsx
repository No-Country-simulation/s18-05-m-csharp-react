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
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>()

  const onSubmit = handleSubmit((data: RegisterFormValues) => {
    console.log(errors);
    
    fetchRegister(data)
      .then((res) => setOpenModal(true))
      .catch((error: Error) => setErrorMessage(error.message))
  })

  return (<>
    <Form extraChildren={children} onSubmit={onSubmit} textSubmit="Registrarme">
      <CustomInput
        id="name"
        error={errors.name?.message}
        type="text"
        placeholder="Nombre"
        extraClass={`w-full`}
        {...register("name", namesValidation)}
      />
      <CustomInput
        id="lastName"
        error={errors.lastName?.message}
        type="text"
        placeholder="Apellido"
        extraClass={`w-full`}
        {...register("lastName", namesValidation)}
      />

      <CustomInput
        id="email"
        error={errors.email?.message}
        type="text"
        placeholder="Correo electrónico"
        extraClass={`w-full`}
        {...register("email", emailValidation)}
      />
      <CustomInput
        id="password"
        error={errors.password?.message}
        type="password"
        placeholder="Contraseña"
        extraClass={`w-full`}
        {...register("password", passwordValidation)}
      />

      <CustomInput
        id="confirmPassword"
        error={errors.confirmPassword?.message}
        type="password"
        placeholder="Repetir contraseña"
        extraClass={`w-full`}
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
        errorMessage &&
        <span className="text-red-500 text-center text-body mt-2">
          {errorMessage}
        </span>
      }
    </Form>
    {openModal && <SuccesModal setOpenModal={setOpenModal} />}
  </>
  )
}

export default Register