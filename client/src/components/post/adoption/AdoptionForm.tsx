"use client"
import { useState } from "react"
import ImageUpload from "../form/ImageUpload"
import SexSelection from "../form/SexSelection"
import LocationInput from "../form/LocationInput"
import { Listbox } from "@headlessui/react"
import CustomInput from "@/components/shared/CustomInput"
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

      <form onSubmit={handleSubmit} className="space-y-4">
        <ImageUpload onImageUpload={setImage} />
        <div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-4">
            <CustomInput
              extraClass="rounded-xl"
              topLabel={"Nombre"} />

            <CustomInput
              extraClass=" rounded-xl"
              topLabel={"Edad"} />
            <CustomInput
              extraClass=" rounded-xl"
              topLabel={"Animal"} />

            <SexSelection onSexChange={setSex} />
            
            <LocationInput onLocationChange={setLocation} />
          </div>

          <label htmlFor="name" className="block text-sm font-medium text-purple-700">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-purple-700">Edad</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <label htmlFor="animal-type" className="block text-sm font-medium text-purple-700">Animal</label>
          <Listbox value={animalType} onChange={setAnimalType}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-purple-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 sm:text-sm">
                <span className="block truncate">{animalType}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  {/* <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                </span>
              </Listbox.Button>
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {animalTypes.map((type) => (
                  <Listbox.Option
                    key={type}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-purple-100 text-purple-900" : "text-gray-900"
                      }`
                    }
                    value={type}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {type}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          SIGUIENTE
        </button>
      </form >
    </div >
  )
}