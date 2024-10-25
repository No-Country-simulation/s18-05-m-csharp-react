"use client"
import { FC, ReactNode, useState } from "react"
import ImageUpload from "./form/ImageUpload"
import CustomButton from "../shared/form/CustomButton"
import ListBoxType from "./form/ListBoxType"
import SexSelection from "./form/select/SexSelection"
import LocationInput from "./form/LocationInput"
import CustomInput from "../shared/form/CustomInput"
import { UseFormRegister } from "react-hook-form"

interface Props {
  children?: ReactNode,
  handleSubmit?: (e: React.FormEvent) => void,
  hasNameAndAge?: boolean,
  hasMoreSteps?: boolean,
  register: UseFormRegister<AdoptionForm> | VoidFunction,
}

const CustomForm: FC<Props> = (props) => {
  const {
    handleSubmit = () => { },
    register = () => { },
    hasNameAndAge = false,
    hasMoreSteps = false,
    children
  } = props

  const [step, setStep] = useState<number>(1)
  const handleStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(step === 1 ? 2 : 1)
  }

  const [image, setImage] = useState<string | null>(null)
  const [sex, setSex] = useState<0 | 1 | 2>(0)
  const [location, setLocation] = useState("")


  return (
    <form onSubmit={(hasMoreSteps && step === 1) ? handleStep : handleSubmit}>
      {
        step === 1 && <ImageUpload onImageUpload={setImage} />
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
                  topLabel={"Nombre"}
                  placeholder={"Pepito"}
                  key={"name"}
                  {...register("name")}
                />
                <CustomInput
                  extraClass=" rounded-xl"
                  topLabel={"Edad"}
                  placeholder={"2 años (o edad estimada)"}
                  key={"dateBirth"}
                  {...register("dateBirth")}
                />
              </>)
            }

            <ListBoxType />

            <SexSelection onSexChange={setSex} />

            <div className="col-span-2">
              <LocationInput onLocationChange={setLocation} />
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
      // disabled={true}
      />
    </form>
  )
}

export default CustomForm