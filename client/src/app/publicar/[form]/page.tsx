import PetAdoptionForm from "@/components/post/adoption/PetAdoptionForm"
import FoundPetForm from "@/components/post/found/FoundPetForm"
import LostPetForm from "@/components/post/lost/LostPetForm"

type typeForm = "adopcion" | "perdido" | "encontrado"

const page = ({ params: { form } }: { params: { form: typeForm } }) => {
  return (
    <div className="">
      <div className="z-10 mt-[-85px] pt-[70px] bg-custom-gradient text-white">
        <div className="w-10/12 mx-auto pb-14">
          <h1 className="text-left text-title-secondary">Publicar</h1>
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

        <div className="h-[24px] bg-white w-full rounded-t-[24px]"></div>
      </div>
      {
        form === "adopcion"
          ? <PetAdoptionForm />
          : form === "perdido"
            ? <LostPetForm />
            : <FoundPetForm />
      }


    </div>
  )
}

export default page