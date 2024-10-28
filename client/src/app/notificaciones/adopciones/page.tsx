import AdoptionRequests from "@/components/notifications/management/AdoptionRequest"

const page = () => {
  return (
    <div className="container mx-auto p-6 md:p-8 lg:p-12 bg-background rounded-lg shadow-lg mb-12 transition-all duration-300 ease-in-out">
      <h1 className="text-primary mb-8 text-center">Gestionar Solicitudes de Adopción</h1>
      <AdoptionRequests />
    </div>
  )
}

export default page