"use client"

import { FC } from "react"
import PetCardContent from "./PetCardContent"
import PetCardFooter from "./PetCardFooter"
import PetCardHeader from "./PetCardHeader"
import PetCardChecks from "./PetCardChecks"
import { useRouter } from "next/navigation"
type Props = {
  isForAdoptablePet?: boolean,
  isForLostPet?: boolean,
  petData?: Partial<DetailAdoptablePet>,
  petId?: number,
}

const PetDetailCard: FC<Props> = (props) => {
  const { isForAdoptablePet, isForLostPet, petData, petId } = props
  const router = useRouter()
  return (
    <>
      <button onClick={(e) => router.back()} className="px-3 text-dark-gray hover:underline">
        ‹ Volver
      </button>
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
            hasVaccines={petData.hasVaccines ?? false}
            isNeutered={petData.isNeutered ?? false}
            isSterilized={petData.isSterilized ?? false}
          />
        }

        <PetCardContent
          posted={
            petData?.datePublished
              ? new Date(petData.datePublished).toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "2-digit" })
              : "15/10/24"
          }
          genre={
            petData
              ? petData.gender === 0 ? "Macho" : petData.gender === 1 ? "Hembra"
                : "Desconocido"
              : "Macho"
          }
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
          petId={petId}
          isForAdoptablePet={isForAdoptablePet}
          alreadyAdopted={petData?.isAdopted}
          poster={
            petData?.owner
              ? `${petData.owner.name} ${petData.owner.lastName}`
              : "Franco Maidana"
          }
          text={isForAdoptablePet
            ? "¡Aplicar para adopción!"
            : isForLostPet
              ? "¡Lo encontre!"
              : "!Es mi mascota!"}
          postulateText={isForAdoptablePet
            ? petData?.isAdopted ? "Ya fue adoptado" : "¡Postulado exitosamente!"
            : isForLostPet
              ? "¡Aviso enviado!"
              : "!Solicitud enviada!"}
        />
      </div>
    </>
  )
}

export default PetDetailCard