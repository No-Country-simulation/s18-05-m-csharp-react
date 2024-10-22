import AnimalAdoptionForm from "@/components/post/adoption/AdoptionForm"

type typeForm = "adopcion" | "perdido" | "encontrado"

const page = ({ params: { form } }: { params: { form: typeForm } }) => {
  return (
    <div className="z-10">
      <div className=" mt-[-85px] pt-[70px] bg-custom-gradient text-white">
        <div className="w-10/12 mx-auto pb-16">
          <h1 className="text-left">Publicar</h1>
          <h3 className="text-center">
            {
              form === "adopcion"
                ? "Animal en adopción"
                : form === "perdido"
                  ? "Animal perdido"
                  : "Animal encontrado"
            }
          </h3>
          <p className="text-center text-body">
            {
              form === "adopcion"
                ? "Esperemos tener suerte..."
                : form === "perdido"
                  ? "¿Se te perdió tu mascota? !Publicala!"
                  : "Busquemos a su dueño"
            }
          </p>
        </div>

        <div className="h-[22px] bg-white w-full rounded-t-[22px]"></div>
      </div>
      <AnimalAdoptionForm />

    </div>
  )
}

export default page