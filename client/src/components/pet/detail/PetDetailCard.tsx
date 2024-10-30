"use client"

import { FC } from "react"
import PetCardContent from "./PetCardContent"
import PetCardFooter from "./PetCardFooter"
import PetCardHeader from "./PetCardHeader"
import PetCardChecks from "./PetCardChecks"

type Props = {
  isForAdoptablePet?: boolean,
  petData?: DetailAdoptablePet
}

const PetDetailCard: FC<Props> = (props) => {
  const { isForAdoptablePet, petData } = props

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg my-8 mx-auto">
      <PetCardHeader
        type={  // type casero por apurado xd
          !(petData?.animalType)
            ? "Perro"
            : petData.animalType === 0 ? "Perro"
              : petData.animalType === 1 ? "Gato"
                : petData.animalType === 2 ? "Hamster"
                  : petData.animalType === 3 ? "Ave"
                    : petData.animalType === 4 ? "Conejo"
                      : "Otro"
        }
        name={petData?.name ?? "Cocker"}
        photoUrl={petData?.photoUrl ?? "https://images.unsplash.com/photo-1560807707-8cc77767d783"}
        distance={petData?.location ?? "0.8 km"}
      />

      {isForAdoptablePet
        && petData
        && <PetCardChecks
          hasVaccines={petData.hasVaccines}
          isNeutered={petData.isNeutered}
          isSterilized={petData.isSterilized}
        />
      }

      <PetCardContent
        posted={
          petData?.datePublished
            ? new Date(petData.datePublished).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" })
            : "15/10/24"
        }
        genre="Hembra"
        birthDate={petData?.age ?? "5 años"}
        notes={petData?.notes ?? "Encontré a esta perrita corriendo asustada por la Avenida Córdoba. Se nota que tiene dueño, tiene puesto un collar con su nombre."}
        isForAdoptablePet={isForAdoptablePet}
        size={
          petData
            ? petData.size === 0 ? "Grande" : petData.size === 1 ? "Mediano"
              : "Pequeño"
            : "Mediano"
        }
        healthIssues={petData?.healthIssues}
      />

      <PetCardFooter
        isForAdoptablePet={isForAdoptablePet}
        poster={
          petData?.owner
            ? `${petData.owner.name} ${petData.owner.lastName}`
            : "Franco Maidana"
        }
        text={isForAdoptablePet ? "¡Aplicar para adopción!" : "!Es mi mascota!"}
      />
    </div>
  )
}

export default PetDetailCard