import PetCard from "@/components/PetCard";
import { getAdoptablePet } from "@/data/adoptablePet/get";

export const revalidate = 60 * 60 * 24


export default async function Home() {
  const data = await getAdoptablePet()
  return (
    <div className="w-11/12 mx-auto mt-3 mb-10 flex flex-col gap-12">
      <div>
        <h3 className="text-primary mb-4">En adopción</h3>

        {data.success && data.data?.map((pet) => (
          <PetCard pet={pet} />
        ))
        }
      </div>


      <div>
        <h3 className="text-primary mb-4">Encontrados</h3>
        {data.success && data.data?.map((pet) => (
          <PetCard pet={pet} />
        ))
        }
      </div>
    </div>
  );
}
