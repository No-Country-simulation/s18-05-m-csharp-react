import PetsList from "@/components/pet/PetsList"
import lostPets from "@/data/fakeData/LostPets"


const page = () => {
  return (
    <div>
      <div className="py-10 px-5">
        <h1 className="text-primary">Mascotas Perdidas</h1>
        <p className="text-dark-gray text-body px-2">
          ¡Ayúdanos a encontrar a nuestras mascotas perdidas!
        </p>
        <p className="text-gray text-small px-2">
          Si has visto a alguna de estas mascotas, por favor, comunícate con nosotros. Juntos podemos reunirlas con sus familias.
        </p>
      </div>

      <div className="container md:px-3 px-0 pt-5 mx-auto mb-6 min-h-[50vh]">
        <PetsList fakeData={lostPets} chatIcon />
      </div>
    </div>
  )
}

export default page