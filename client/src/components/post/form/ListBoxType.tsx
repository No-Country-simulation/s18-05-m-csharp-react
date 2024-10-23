import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import Image from "next/image"
import { useState } from "react"

const animalTypes = ["Perro", "Gato", "Otro"]


const ListBoxType = () => {
  const [animalType, setAnimalType] = useState(animalTypes[0])

  return (
    <div>
      <label htmlFor="animal-type" className="block text-subtitle text-dark-gray">Animal</label>
      <Listbox value={animalType} onChange={setAnimalType}>

        <div className="relative z-20">

          <ListboxButton className="input w-full relative rounded-xl text-left shadow-md">

            <span className="block truncate">{animalType}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <span>
                <Image
                  src={"/assets/icons/arrow_down.svg"}
                  alt="arrow down"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </span>

          </ListboxButton>

          <ListboxOptions className="absolute max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-small shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

            {animalTypes.map((type) => (
              <ListboxOption
                key={type}
                className={({ active }) =>
                  `cursor-pointer relative select-none py-2 pl-10 pr-4 ${active ? "bg-custom-gradient-3 text-white" : "text-gray-900"
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
              </ListboxOption>
            ))}

          </ListboxOptions>

        </div>

      </Listbox>
    </div>
  )
}

export default ListBoxType