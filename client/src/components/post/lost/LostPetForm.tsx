"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../form/CustomForm"
import { useForm } from "react-hook-form"
// import uploadPhoto from "@/data/cloudinary/post"
import Loading from "@/components/shared/Loading"
import SuccessCard from "../SuccessCard"

type initialStateType = {
  vaccines: boolean, sterilized: boolean, neutered: boolean, size: 0 | 1 | 2, gender: 0 | 1 | 2,
  animalType: { label: string, value: number },

}

const initialState: initialStateType = { vaccines: false, sterilized: false, neutered: false, size: 1, gender: 1, animalType: { label: "Perro", value: 0 } }

export default function LostPetForm() {
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

    const fields = { ...data, ...othersFields, animalType: othersFields.animalType.value, photoUrl: "http://res.cloudinary.com/dqozzngu1/image/upload/v1729956949/b2txpcctkpoaawz2w5sy.jpg", isAdopted: false }
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
            placeholder={"¿Dónde se perdió? ¿Tiene collar? ¿Tiene alguna característica en especial que permita reconocerlo facilmente?"}
            label="Información extra"
          />

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