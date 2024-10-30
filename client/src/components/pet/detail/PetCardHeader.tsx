import Image from "next/image";
import { FC } from "react"

type PetCardHeaderProps = {
  name: string;
  type: string;
  photoUrl: string;
  distance: string
}


const PetCardHeader: FC<PetCardHeaderProps> = (props) => {
  const { name, type, photoUrl, distance } = props

  return (
    <header className="flex items-center align-middle justify-between mb-4">
      <div>
        <h3 className="text-primary">{type}</h3>
        <h2 className="text-primary leading-none">{name}</h2>
        <p className="text-dark-gray text-body align-middle mt-4">
          <Image
            src={"/assets/icons/location.svg"}
            alt="location icon"
            width={17}
            height={21}
            className="inline-block mr-1 align-middle"
          />
          {distance}
        </p>
      </div>
      <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden flex align-middle mt-[-60px]">
        <Image
          src={photoUrl}
          alt={`${name} photo`}
          width={180}
          height={180}
          className="object-cover object-bottom rounded-full"
        />
      </div>
    </header>
  )
}

export default PetCardHeader