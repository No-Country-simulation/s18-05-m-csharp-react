import PetsList from "@/components/pet/PetsList"
import foundsPets from "@/data/fakeData/FoundsPets"


const page = () => {
  return (
    <div>
      <div className="px-5 py-10">
        <h1 className="text-primary">Mascotas Encontradas</h1>
        <p className="text-dark-gray text-body px-2">
          ¡Ayúdanos a encontrar a sus dueños!
        </p>
        <p className="text-gray text-small px-2">
          Estas mascotas han sido encontradas y están esperando ser reunidas con sus familias. Si reconoces a alguna de ellas, por favor, comunícate con nosotros.
        </p>
      </div>

      <div className="container lg:px-3 md:px-1 px-0 pt-5 xl:mx-0 mx-auto mb-6 min-h-[50vh]">
        <PetsList fakeData={foundsPets} chatIcon />
      </div>
    </div>
  )
}

export default page