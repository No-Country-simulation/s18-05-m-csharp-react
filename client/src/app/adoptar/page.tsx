import PetsList from "@/components/pet/PetsList"
import AnimalSearch from "@/components/search/AnimalSearch"

const page = async () => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="px-5 text-primary">Adoptar</h1>
        <AnimalSearch />
      </div>

      <div className="container px-3 mx-auto mb-6 min-h-[50vh]">
        <PetsList />
      </div>
    </div>
  )
}

export default page