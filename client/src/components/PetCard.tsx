"use client"
import Image from "next/image";


const options: Intl.DateTimeFormatOptions = {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric',
};

const PetCard = ({ pet }: { pet: AdoptablePet }) => {
  const { name, dateBirth, datePublished, isAdopted, photoUrl } = pet;

  return (
    <div className="w-[174px] text-gray flex flex-col items-center shadow-light-gray hover:shadow-lg transition-all ease duration-300" style={{ borderRadius: "70% 70% 14px 14px" }}>
      <header className="w-full h-[168px] flex align-middle justify-center items-end border-t-[1px] border-x-[1px] border-light-gray rounded-t-full">
        <Image
          src={photoUrl}
          alt={name}
          width={157}
          height={157}
          className="rounded-full object-contain"
        // onError={(e) => {
        //   e.currentTarget.src = "/assets/icons/icon.png"
        //   console.error(e.target)
        // }}
        />

      </header>


      <footer className="flex justify-between items-end w-full px-2 pb-2 border-light-gray border-x-[1px] border-b-[1px] rounded-b-xl">
        <div className="text-sm leading-4">
          <p className="font-bold">{name}</p>

          <p>
            {Math.floor(((new Date()).getTime() - new Date(dateBirth).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) + ' años'}
          </p>

          <p>
            Publicado {new Date(datePublished).toLocaleDateString("es-AR", options)}
          </p>

        </div>

        <div className="hover:bg-primary-light-500 p-2 cursor-pointer hover:scale-110 rounded-full transition-all ease duration-300">
          <Image
            src={`/assets/icons/${isAdopted ? "more" : "heart"}.svg`}
            alt={`${name}-${isAdopted ? "adoptado" : "publicado"}`}
            width={17}
            height={15}
          />
        </div>
      </footer>
    </div>
  )
}

export default PetCard