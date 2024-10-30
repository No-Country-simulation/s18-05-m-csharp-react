"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../form/CustomForm"
import { useForm } from "react-hook-form"
import uploadPhoto from "@/data/cloudinary/post"
import { createOneAdoptablePet } from "@/data/adoptablePet/post"
import Loading from "@/components/shared/Loading"
import SuccessCard from "../SuccessCard"

type initialStateType = {
  isNeutered: boolean, hasVaccines: boolean, isSterilized: boolean, size: 0 | 1 | 2, gender: 0 | 1 | 2,
  animalType: { label: string, value: number },

}
const itemsCheckbox: { label: string, name: "isNeutered" | "hasVaccines" | "isSterilized" }[] = [{ label: "Esterilizado", name: "isNeutered" }, { label: "Vacunas al día", name: "hasVaccines" }, { label: "Castrado", name: "isSterilized" }]

const initialState: initialStateType = { isNeutered: false, hasVaccines: false, isSterilized: false, size: 1, gender: 1, animalType: { label: "Perro", value: 0 } }

export default function PetAdoptionForm() {
  const [isComplete, setIsComplete] = useState<boolean | { imageSrc?: string, namePet?: string }>(false)
  const [isLoading, setIsLoading] = useState(false)
  const [othersFields, setOthersFields] = useState<initialStateType>(initialState)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<AdoptionForm>()


  const onSubmit = handleSubmit(async (data: AdoptionForm) => {
    if (data.photoUrl.length < 1) {
      return
    };
    console.log("FORM_DATA: ", data);

    const { photoUrl } = await uploadPhoto(data.photoUrl);
    console.log("PHOTO_URL: ", photoUrl);
    // https://res.cloudinary.com/dqozzngu1/image/upload/v1729957092/ltdv1tqg8ucz0wr9mbc2.jpg PERRITO BLANCO
    // http://res.cloudinary.com/dqozzngu1/image/upload/v1729956949/b2txpcctkpoaawz2w5sy.jpg GATITO

    const fields = { ...data, ...othersFields, animalType: othersFields.animalType.value, photoUrl }
    console.log("TOTAL OBJECT: ", fields);

    setIsLoading(true)
    const res = await createOneAdoptablePet(fields)
    console.log("RESPUESTA: ", res);

    if (res.success) {
      setIsComplete({ imageSrc: res.data?.photoUrl, namePet: data?.name })
    } else {
      setIsComplete(true)
    }

    setIsLoading(false)

    // setTimeout(() => {
    //   setIsLoading(false)
    //   setIsComplete(true)
    // }, 2000)

  })

  if (isLoading) return <Loading />

  if (isComplete) {
    if (typeof isComplete === "boolean") return <SuccessCard />
    else return <SuccessCard imageSrc={isComplete.imageSrc} namePet={isComplete.namePet} />
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <CustomForm
        hasNameAndAge
        hasMoreSteps
        register={register}
        errors={errors}
        handleSubmit={onSubmit}
        canContinue={watch("photoUrl")?.length > 0}
        gender={{
          state: othersFields.gender,
          setState: (gender) => setOthersFields({ ...othersFields, gender })
        }}
        animalType={{
          state: othersFields.animalType,
          setState: (animalType) => setOthersFields({ ...othersFields, animalType })
        }}
      >
        {/* AL DARLE AL BOTON DE SIGUIENTE, ESTE SERÁ EL PROXIMO PASO A COMPLETAR */}
        <div className="space-y-5">
          <SizeSelection size={othersFields.size} onSizeChange={(size: 0 | 1 | 2) => setOthersFields({ ...othersFields, size })} />

          <CustomTextArea
            {...register("notes")}
            placeholder={"¿Qué información extra desea agregar?"}
            label="Notas"
          />

          <div className="flex md:justify-evenly justify-between md:flex-nowrap flex-wrap gap-y-2">
            {itemsCheckbox.map((item) => (
              <CustomCheckbox
                label={item.label}
                checked={othersFields[item.name]}
                setChecked={(value) => setOthersFields({ ...othersFields, [item.name]: value })}
                key={item.name} />
            ))}
          </div>

          <CustomTextArea
            {...register("healthIssues")}
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>
      </CustomForm>

    </div >
  )
}