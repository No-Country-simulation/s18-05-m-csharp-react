"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const options: Intl.DateTimeFormatOptions = {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric',
};

const PetCard = ({ pet, isNotClickable, chatIcon }: { isNotClickable?: boolean, pet: AdoptablePet, chatIcon?: boolean }) => {
  const { name, age, datePublished, isAdopted, photoUrl } = pet;
  const router = useRouter()
  const path = usePathname()

  return (
    <div className="w-[174px] text-gray flex flex-col items-center shadow-light-gray hover:shadow-lg hover:scale-105 transition-all ease duration-300" style={{ borderRadius: "70% 70% 14px 14px" }} onClick={() => {
      if (!isNotClickable) {
        router.push(`${path}/${pet.id}`)
      }
    }}>
      <header className="w-full h-[168px] flex align-middle justify-center items-end border-t-[1px] border-x-[1px] border-light-gray rounded-t-full overflow-hidden">
        <Image
          src={photoUrl}
          alt={name}
          width={173}
          height={157}
          className="rounded-t-full object-contain text-center"
        // onError={(e) => {
        //   e.currentTarget.src = "/assets/icons/icon.png"
        //   console.error(e.target)
        // }}
        />

      </header>


      <footer className="flex justify-between items-end w-full px-2 py-2 border-light-gray border-x-[1px] border-b-[1px] rounded-b-xl">
        <div className="text-sm leading-4">
          <p className="font-bold">{name}</p>

          <p>
            {
              isAdopted ? "Finalizada" : age ?? "2 años"
            }
          </p>

          <p>
            Publicado {new Date(datePublished).toLocaleDateString("es-AR", options)}
          </p>

        </div>

        <div className="hover:bg-primary-light-500 p-2 cursor-pointer hover:scale-110 rounded-full transition-all ease duration-300">
          <Image
            src={`/assets/icons/${isAdopted ? (chatIcon ? "chat-icon" : "more") : "heart"}.svg`}
            alt={`${name}-${isAdopted ? (chatIcon ? "chat-icon" : "adoptado") : "publicado"}`}
            width={17}
            height={15}
          />
        </div>
      </footer>
    </div>
  )
}

export default PetCard