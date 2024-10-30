import PetDetailCard from "@/components/pet/detail/PetDetailCard"
import LinkUnderline from "@/components/shared/LinkUnderline"
import foundsPets from "@/data/fakeData/FoundsPets"

const page = ({ params: { id } }: { params: { id: string } }) => {

  const petData: (Partial<DetailAdoptablePet> | undefined) = foundsPets.find((pet) => pet.id === Number(id))

  if (!petData) return <div className="m-auto p-6">
    <h1 className="text-center text-red-500">
      Publicación no encontrada
    </h1>
    <LinkUnderline href={"/"} className="text-center block my-5">
      Volver al inicio
    </LinkUnderline>
  </div>

  return (
    <div className="md:p-5 py-5 px-1.5">
      <PetDetailCard petData={petData} />
    </div>
  )
}

export default page