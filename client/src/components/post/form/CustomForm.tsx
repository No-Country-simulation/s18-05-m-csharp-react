"use client"
import { FC, ReactNode, useState } from "react"
import ImageUpload from "./ImageUpload"
import CustomButton from "../../shared/form/CustomButton"
import ListBoxType from "./ListBoxType"
import SexSelection from "./select/SexSelection"
import LocationInput from "./LocationInput"
import CustomInput from "../../shared/form/CustomInput"
import { FieldErrors, UseFormRegister } from "react-hook-form"
import { defaultRequireValidation, namesValidation } from "@/validations/common"

interface Props {
  children?: ReactNode,
  handleSubmit?: (e: React.FormEvent) => void,
  hasNameAndAge?: boolean,
  hasMoreSteps?: boolean,
  register: UseFormRegister<AdoptionForm> | VoidFunction,
  errors: FieldErrors<AdoptionForm> | undefined,
  canContinue?: boolean,
  gender: { state: 0 | 1 | 2, setState: (value: 0 | 1 | 2) => void },
  animalType: { state: { label: string, value: number }, setState: (value: { label: string, value: number }) => void }
}

const CustomForm: FC<Props> = (props) => {
  const {
    handleSubmit = () => { },
    register = () => { },
    errors,
    hasNameAndAge = false,
    hasMoreSteps = false,
    canContinue,
    gender,
    animalType,
    children
  } = props

  const [step, setStep] = useState<number>(1)
  const handleStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step === 1 ? 2 : 1)
  }

  return (
    <form className="" onSubmit={(hasMoreSteps && step === 1) ? handleStep : handleSubmit}>
      {
        step === 1 && <ImageUpload {...register("photoUrl")} />
      }

      {
        hasMoreSteps && step === 2 && (
          <button onClick={handleStep} className="relative block mb-5 mt-[-30px] md:ml-[-20px] ml-0 hover:underline underline-offset-2 hover:text-secondary transition text-dark-gray">
            ‹ Volver
          </button>
        )

      }
      {
        hasMoreSteps && step === 2
          ? (<>
            {children}
          </>)

          : (<div className="sm:grid sm:grid-cols-2 gap-y-5 sm:gap-x-3 flex flex-col">
            {
              hasNameAndAge && (<>
                <CustomInput
                  extraClass="rounded-xl"
                  topLabel={"Nombre*"}
                  placeholder={"Pepito"}
                  key={"name"}
                  {...register("name", namesValidation)}
                  error={errors?.name?.message}
                />
                <CustomInput
                  extraClass=" rounded-xl"
                  topLabel={"Edad*"}
                  placeholder={"2 años, 2 meses (edad estimada)"}
                  key={"age"}
                  {...register("age", defaultRequireValidation)}
                  error={errors?.age?.message}
                />
              </>)
            }

            <ListBoxType animalType={animalType} />

            <SexSelection gender={gender} />

            <div className="col-span-2">
              <LocationInput
                {...register("location", defaultRequireValidation)}
                error={errors?.location?.message}
              />
            </div>

            {
              !hasMoreSteps && children
              && <>
                {children}
              </>
            }
          </div>)
      }


      <CustomButton
        text={(hasMoreSteps && step === 1) ? "siguiente" : "publicar"}
        extraClass="uppercase h-[48px] w-full mt-12 hover:ring-primary hover:ring-1 hover:ring-offset-2 focus:outline-none "
        disabled={hasMoreSteps && step === 1 ? !canContinue : false}
      />
    </form>
  )
}

export default CustomForm