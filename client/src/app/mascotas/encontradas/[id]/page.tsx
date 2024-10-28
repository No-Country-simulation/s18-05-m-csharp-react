import PetDetailCard from "@/components/pet/detail/PetDetailCard"

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="p-5">
      <PetDetailCard />
    </div>
  )
}

export default page