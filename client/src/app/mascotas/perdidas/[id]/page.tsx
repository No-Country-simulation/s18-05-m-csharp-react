import PetDetailCard from "@/components/pet/detail/PetDetailCard"

const page = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="md:p-5 py-5 px-1.5">
      <PetDetailCard />
    </div>
  )
}

export default page