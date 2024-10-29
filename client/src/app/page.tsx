import PetsList from "@/components/pet/PetsList";
import foundsPets from "@/data/fakeData/FoundsPets";
import lostPets from "@/data/fakeData/LostPets";
import Link from "next/link";

export const revalidate = 60 * 60 * 24


export default async function Home() {
  return (
    <div className="mt-3 flex flex-col gap-12 mb-10">
      <div className="md:px-4 px-0">
        <Link href={"/adoptar"} className="text-title-secondary px-4 font-bold text-primary mb-6 block">Mascotas en adopción</Link>
        <PetsList showLoad={false} isNotClickable />
      </div>


      <div className="md:px-4 px-0">
        <Link href={"/mascotas/encontradas"} className="text-title-secondary px-4 font-bold text-primary mb-6 block">Mascotas encontradas</Link>
        <PetsList fakeData={foundsPets} showLoad={false} chatIcon isNotClickable />
      </div>


      <div className="md:px-4 px-0">
        <Link href={"/mascotas/perdidas"} className="text-title-secondary px-4 font-bold text-primary mb-6 block">Mascotas Perdidas</Link>
        <PetsList fakeData={lostPets} showLoad={false} chatIcon isNotClickable />
      </div>
    </div>
  );
}
