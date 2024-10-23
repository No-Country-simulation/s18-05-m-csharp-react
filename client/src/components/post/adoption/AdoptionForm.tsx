"use client"
import { useState } from "react"
import ImageUpload from "../form/ImageUpload"
import SexSelection from "../form/SexSelection"
import LocationInput from "../form/LocationInput"
import { Listbox } from "@headlessui/react"
import CustomInput from "@/components/shared/CustomInput"
import CustomButton from "@/components/shared/CustomButton"
import ListBoxType from "../form/ListBoxType"
// import { ChevronUpDownIcon } from "@heroicons/react/20/solid"

const animalTypes = ["Perro", "Gato", "Otro"]

export default function AnimalAdoptionForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [animalType, setAnimalType] = useState(animalTypes[0])
  const [image, setImage] = useState<string | null>(null)
  const [sex, setSex] = useState<"Macho" | "Hembra" | "No sé" | null>(null)
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
          {/* <CustomInput
              extraClass=" rounded-xl"
              topLabel={"Animal"}
              placeholder={"Seleccione el correspondiente"}
            /> */}

          <ListBoxType />

          <SexSelection onSexChange={setSex} />

          <div className="col-span-2">
            <LocationInput onLocationChange={setLocation} />
          </div>

        </div>

        <CustomButton
          text="siguiente"
          extraClass="uppercase h-[48px] w-full my-12 hover:ring-primary hover:ring-1 hover:ring-offset-2 focus:outline-none "
          disabled={true}
        />

      </form >
    </div >
  )
}