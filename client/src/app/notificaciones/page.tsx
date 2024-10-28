import AdoptionRequests from "@/components/notifications/management/AdoptionRequest"
import LostPets from "@/components/notifications/management/LostPets"
import FoundPets from "@/components/notifications/management/FoundPets"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Image from "next/image"

const items = [
  { title: "Solicitudes de Adopción", component: <AdoptionRequests hiddenTitle /> },
  { title: "Mascotas Perdidas", component: <LostPets hiddenTitle /> },
  { title: "Mascotas Encontradas", component: <FoundPets hiddenTitle /> },
]

const page = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12 mb-12 transition-all duration-300 ease-in-out">
      <h1 className="text-primary mb-8 text-center">Gestionar Publicaciones</h1>
      <div className="space-y-10">
        {
          items.map((item, index) => (
            <Disclosure as="div" className="p-6 shadow-xl rounded-2xl" defaultOpen={index === 0} key={index}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <h2 className="text-secondary">
                  {item.title}
                </h2>

                <Image
                  alt="expandir"
                  width={24}
                  height={24}
                  src={`/assets/icons/arrow_down.svg`}
                  className="transition-transform duration-300 transform group-data-[open]:rotate-180"
                />
              </DisclosureButton>

              <DisclosurePanel className="mt-2">
                {item.component}
              </DisclosurePanel>
            </Disclosure>
          ))
        }
      </div>

    </div>
  )
}

export default page