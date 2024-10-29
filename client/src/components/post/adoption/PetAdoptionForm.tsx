"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../form/CustomForm"
import { useForm } from "react-hook-form"
// import uploadPhoto from "@/data/cloudinary/post"
// import { createOneAdoptablePet } from "@/data/adoptablePet/post"
import Loading from "@/components/shared/Loading"
import SuccessCard from "../SuccessCard"

type initialStateType = {
  vaccines: boolean, sterilized: boolean, neutered: boolean, size: 0 | 1 | 2, gender: 0 | 1 | 2,
  animalType: { label: string, value: number },

}
const itemsCheckbox: { label: string, name: "vaccines" | "sterilized" | "neutered" }[] = [{ label: "Esterilizado", name: "neutered" }, { label: "Vacunas al día", name: "vaccines" }, { label: "Castrado", name: "sterilized" }]

const initialState: initialStateType = { vaccines: false, sterilized: false, neutered: false, size: 1, gender: 1, animalType: { label: "Perro", value: 0 } }

export default function PetAdoptionForm() {
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
    // https://res.cloudinary.com/dqozzngu1/image/upload/v1729957092/ltdv1tqg8ucz0wr9mbc2.jpg PERRITO BLANCO
    // http://res.cloudinary.com/dqozzngu1/image/upload/v1729956949/b2txpcctkpoaawz2w5sy.jpg GATITO

    const fields = { ...data, ...othersFields, animalType: othersFields.animalType.value, photoUrl: "http://res.cloudinary.com/dqozzngu1/image/upload/v1729956949/b2txpcctkpoaawz2w5sy.jpg", isAdopted: false }
    console.log(fields);

    // const res = await createOneAdoptablePet(fields)
    // console.log(res);

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
            {...register("diseases")}
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>
      </CustomForm>

    </div >
  )
}