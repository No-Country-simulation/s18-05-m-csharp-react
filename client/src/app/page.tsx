import PetsList from "@/components/pet/PetsList";
import { fakeDataFoundsPets } from "./mascotas/encontradas/page";
import { fakeDataLostPets } from "./mascotas/perdidas/page";

export const revalidate = 60 * 60 * 24


export default async function Home() {
  return (
    <div className="mt-3 flex flex-col gap-12 mb-10">
      <div className="md:px-4 px-0">
        <h3 className="text-primary mb-4">Mascotas en adopción</h3>
        <PetsList showLoad={false} isNotClickable />
      </div>


      <div className="md:px-4 px-0">
        <h3 className="text-primary mb-4">Mascotas encontradas</h3>
        <PetsList fakeData={fakeDataFoundsPets} showLoad={false} chatIcon isNotClickable />
      </div>


      <div className="md:px-4 px-0">
        <h3 className="text-primary mb-4">Mascotas Perdidas</h3>
        <PetsList fakeData={fakeDataLostPets} showLoad={false} chatIcon isNotClickable />
      </div>
    </div>
  );
}
