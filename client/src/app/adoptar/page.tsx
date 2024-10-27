import AnimalSearch from "@/components/search/AnimalSearch"

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="px-5 text-primary">Adoptar</h1>
        <AnimalSearch />
      </div>
    </div>
  )
}

export default page