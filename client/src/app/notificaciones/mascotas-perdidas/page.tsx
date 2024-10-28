import LostPets from "@/components/notifications/management/LostPets"

const page = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12 bg-background rounded-lg shadow-lg mb-12 transition-all duration-300 ease-in-out">
      <h1 className="text-primary mb-8 text-center">Mascotas Perdidas</h1>
      <LostPets />
    </div>
  )
}

export default page