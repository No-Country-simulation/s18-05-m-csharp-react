import PetDetailCard from "@/components/pet/detail/PetDetailCard"
import LinkUnderline from "@/components/shared/LinkUnderline"
import { getAdoptablePetById } from "@/data/adoptablePet/get"
import { FC } from "react"

type Props = {
  params: {
    id: string
  }
}

const page: FC<Props> = async ({ params: { id } }) => {
  const { data: petData }: ResponseDetailAdoptablePet = await getAdoptablePetById(+id)

  if (petData === null) return <div className="m-auto p-6">
    <h1 className="text-center text-red-500">
      Publicación no encontrada
    </h1>
    <LinkUnderline href={"/"} className="text-center block my-5">
      Volver al inicio
    </LinkUnderline>
  </div>

  return (
    <div className="md:p-5 py-5 px-1.5">
      <PetDetailCard isForAdoptablePet petData={petData} petId={+id} />
    </div>
  )
}

export default page