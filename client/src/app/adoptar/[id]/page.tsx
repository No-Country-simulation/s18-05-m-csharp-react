import PetDetailCard from "@/components/pet/detail/PetDetailCard"
import { FC } from "react"

const page: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <div className="md:p-5 py-5 px-1.5">
      <PetDetailCard />
    </div>
  )
}

export default page