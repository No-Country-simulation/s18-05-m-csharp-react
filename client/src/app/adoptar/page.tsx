import PetsList from "@/components/pet/PetsList"
import AnimalSearch from "@/components/search/AnimalSearch"

const page = async () => {

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="px-5 text-primary">Adoptar</h1>
        <AnimalSearch />
      </div>

      <div className="container lg:px-3 md:px-1 px-0 pt-5 xl:mx-0 mx-auto mb-6 min-h-[50vh]">
        <PetsList isForAdoptablePet />
      </div>
    </div>
  )
}

export default page