"use client"

import PetCardContent from "./PetCardContent"
import PetCardFooter from "./PetCardFooter"
import PetCardHeader from "./PetCardHeader"


const PetDetailCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md my-8 mx-auto">
      <PetCardHeader
        type="Perro"
        name="Cocker"
        photoUrl="https://images.unsplash.com/photo-1560807707-8cc77767d783"
        distance="0.8"
      />

      <PetCardContent
        posted="15/10/24"
        genre="Hembra"
        birthDate="5 años"
        notes="Encontré a esta perrita corriendo asustada por la Avenida Córdoba. Se nota que tiene dueño, tiene puesto un collar con su nombre."
      />

      <PetCardFooter
        poster="Franco Maidana"
        text="!Es mi mascota!"
      />
    </div>
  )
}

export default PetDetailCard