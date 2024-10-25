"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../CustomForm"
import { useForm } from "react-hook-form"

const itemsCheckbox: { label: string, name: "vaccines" | "sterilized" | "neutered" }[] = [{ label: "Esterilizado", name: "neutered" }, { label: "Vacunas al día", name: "vaccines" }, { label: "Castrado", name: "sterilized" }]
const checkboxItemsInitialState = { vaccines: false, sterilized: false, neutered: false }

export default function PetAdoptionForm() {
  const [checkboxItems, setCheckboxItems] =
    useState<{ vaccines: boolean, sterilized: boolean, neutered: boolean }>(checkboxItemsInitialState)

  const [size, setSize] = useState<0 | 1 | 2 | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdoptionForm>()

  const onSubmit = handleSubmit((data: AdoptionForm) => {
    console.log({ ...data, ...checkboxItems });

    // fetchLogin(data)
    //   .then((res: any) => {
    //   })
    //   .catch((err: any) => { })
  })
  return (
    <div className="max-w-xl mx-auto p-6">
      <CustomForm hasNameAndAge hasMoreSteps register={register} handleSubmit={onSubmit}>
        {/* AL DARLE AL BOTON DE SIGUIENTE, ESTE SERÁ EL PROXIMO PASO A COMPLETAR */}
        <div className="space-y-5">
          <SizeSelection onSizeChange={setSize} />

          <CustomTextArea
            {...register("notes")}
            placeholder={"¿Qué información extra desea agregar?"}
            label="Notas"
          />

          <div className="flex md:justify-evenly justify-between md:flex-nowrap flex-wrap gap-y-2">
            {itemsCheckbox.map((item) => (
              <CustomCheckbox
                label={item.label}
                checked={checkboxItems[item.name]}
                setChecked={(value) => setCheckboxItems({ ...checkboxItems, [item.name]: value })}
                key={item.name} />
            ))}
          </div>

          <CustomTextArea
            {...register("diseases")}
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>
      </CustomForm>

    </div >
  )
}