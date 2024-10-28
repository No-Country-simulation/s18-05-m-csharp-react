"use client"

import PetCardFooter from "./PetCardFooter"
import PetCardHeader from "./PetCardHeader"


const PetDetailCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md my-8 mx-auto">
      <PetCardHeader
        type="Perro"
        name="Reina"
        photoUrl="https://images.unsplash.com/photo-1560807707-8cc77767d783"
        distance="0.8"
      />


      <PetCardFooter
        poster="Franco Maidana"
        text="!Es mi mascota!"
      />
    </div>
  )
}

export default PetDetailCard