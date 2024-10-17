import { getAdoptablePet } from "@/data/adoptablePet/get";

export const revalidate = 60 * 60 * 24


export default async function Home() {
  const data = await getAdoptablePet()
  return (
    <div className="w-11/12 mx-auto mt-3 flex flex-col gap-12">
      <div>
        <h3 className="text-primary">En adopción</h3>

        {data.success && data.data?.map((pet) => (
          <div key={pet.id}>
            {/* Render pet details here */}
            <p>{pet.name}</p>
          </div>
        ))
        }
      </div>
      <h3 className="text-primary">Encontrados</h3>

      <div>

      </div>
    </div>
  );
}
