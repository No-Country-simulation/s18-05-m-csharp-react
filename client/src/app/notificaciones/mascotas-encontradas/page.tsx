import FoundPets from "@/components/notifications/management/FoundPets"

const page = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12 bg-background rounded-lg shadow-lg mb-12 transition-all duration-300 ease-in-out">
      <h1 className="text-primary mb-8 text-center">Mascotas Encontradas</h1>
      <FoundPets />
    </div>
  )
}

export default page