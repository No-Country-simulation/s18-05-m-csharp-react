import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import Image from "next/image"

const animalTypes = [
  { label: "Perro", value: 0 },
  { label: "Gato", value: 1 },
  { label: "Hamster", value: 2 },
  { label: "Ave", value: 3 },
  { label: "Conejo", value: 4 },
]

interface PropsListBoxType {
  animalType: {
    state: { label: string, value: number },
    setState: (value: { label: string, value: number }) => void
  }
}





const ListBoxType = ({ animalType: { state, setState } }: PropsListBoxType) => {

  return (
    <div>
      <label htmlFor="animal-type" className="block text-subtitle text-dark-gray">Animal</label>
      <Listbox value={state} onChange={setState}>

        <div className="relative z-20">

          <ListboxButton className="input w-full relative rounded-xl text-left shadow-md">

            <span className="block truncate">{state.label}</span>
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

            {animalTypes.map((animal) => (
              <ListboxOption
                key={animal.label}
                className={({ active }) =>
                  `cursor-pointer relative select-none py-2 pl-10 pr-4 ${active ? "bg-custom-gradient-3 text-white" : "text-gray-900"
                  }`
                }
                value={animal}

              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {animal.label}
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