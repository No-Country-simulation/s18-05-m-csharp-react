"use client"
import { useState } from "react"
import ImageUpload from "../form/ImageUpload"
import SexSelection from "../form/select/SexSelection"
import LocationInput from "../form/LocationInput"
import CustomInput from "@/components/shared/form/CustomInput"
import CustomButton from "@/components/shared/form/CustomButton"
import ListBoxType from "../form/ListBoxType"
import SizeSelection from "../form/select/SizeSelection"
import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import CustomTextArea from "@/components/shared/form/CustomTextarea"

const animalTypes = ["Perro", "Gato", "Otro"]

export default function AnimalAdoptionForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [animalType, setAnimalType] = useState(animalTypes[0])
  const [image, setImage] = useState<string | null>(null)
  const [sex, setSex] = useState<"Macho" | "Hembra" | "No sé" | null>(null)
  const [size, setSize] = useState<"Grande" | "Mediano" | "Chico" | null>(null)
  const [location, setLocation] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ name, age, animalType, image, sex, location })
  }

  return (
    <div className="max-w-xl mx-auto p-6">

      <form onSubmit={handleSubmit} className="">
        <ImageUpload onImageUpload={setImage} />

        <div className="sm:grid sm:grid-cols-2 sm:gap-3 flex flex-col gap-4">
          <CustomInput
            extraClass="rounded-xl"
            topLabel={"Nombre"}
            placeholder={"Pepito"}
          />

          <CustomInput
            extraClass=" rounded-xl"
            topLabel={"Edad"}
            placeholder={"2 años (o edad estimada)"}
          />

          <ListBoxType />

          <SexSelection onSexChange={setSex} />

          <div className="col-span-2">
            <LocationInput onLocationChange={setLocation} />
          </div>

        </div>

        <hr className="my-6" />

        <div className="my-5 space-y-5">
          <SizeSelection onSizeChange={setSize} />

          <CustomTextArea
            placeholder={"¿Qué información extra desea agregar?"}
            label="Notas"
          />

          <div className="flex justify-evenly">
            {["Esterilizado", "Vacunas al día", "Castrado"].map(item => (
              <CustomCheckbox label={item} key={item} />
            ))}
          </div>

          <CustomTextArea
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>

        <hr className="my-6" />

        <CustomButton
          text="siguiente"
          extraClass="uppercase h-[48px] w-full my-12 hover:ring-primary hover:ring-1 hover:ring-offset-2 focus:outline-none "
          disabled={true}
        />

      </form >
    </div >
  )
}