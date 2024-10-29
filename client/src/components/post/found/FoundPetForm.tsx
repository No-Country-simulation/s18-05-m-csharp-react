"use client"
import { useState } from "react"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../form/CustomForm"
import { useForm } from "react-hook-form"
// import uploadPhoto from "@/data/cloudinary/post"
import Loading from "@/components/shared/Loading"
import SuccessCard from "../SuccessCard"

type initialStateType = {
  size: 0 | 1 | 2, gender: 0 | 1 | 2,
  animalType: { label: string, value: number },

}

const initialState: initialStateType = { size: 1, gender: 1, animalType: { label: "Perro", value: 0 } }

export default function FoundPetForm() {
  const [isComplete, setIsComplete] = useState(false)
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

    // const photoUrl = await uploadPhoto(data.photoUrl);
    // console.log(photoUrl);

    const fields = { ...data, ...othersFields, animalType: othersFields.animalType.value, photoUrl: "", isAdopted: false }
    console.log(fields);

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsComplete(true)
    }, 2000)

  })

  if (isLoading) return <Loading />

  if (isComplete) return <SuccessCard />

  return (
    <div className="max-w-xl mx-auto p-6">
      <CustomForm
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
        <div className="col-span-2">
          <CustomTextArea
            {...register("notes")}
            placeholder={"¿Qué información extra desea agregar? Ej. Encontré este perrito en la plaza, parece ser un golden, tiene collar rojo, etc."}
            label="Notas"
          />
        </div>
      </CustomForm>

    </div >
  )
}