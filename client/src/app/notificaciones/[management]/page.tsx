import AdoptionRequests from "@/components/notifications/management/AdoptionRequest"
import LostPets from "@/components/notifications/management/LostPets"
import FoundPets from "@/components/notifications/management/FoundPets"

type props = {
  params: { management: string }
}

const page = ({ params: { management } }: props) => {
  return (
    <div className="container mx-auto py-6 px-1 md:p-8 lg:p-12 bg-background rounded-lg shadow-lg mb-12 transition-all duration-300 ease-in-out">
      <h1 className="text-primary mb-8 text-center"> Gestionar</h1>
      {
        management === "adopciones"
          ? <AdoptionRequests />
          : management === "mascotas-perdidas"
            ? <LostPets />
            : management === "mascotas-encontradas"
              ? <FoundPets />
              : <h2 className="text-center my-24 text-primary">No se encontró la sección solicitada.</h2>
      }
    </div>
  )
}

export default page