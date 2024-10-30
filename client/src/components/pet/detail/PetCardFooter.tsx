import CustomButton from "@/components/shared/form/CustomButton";
import Image from "next/image";
import { FC } from "react"

type PetCardFooterProps = {
  poster: string;
  text: string;
  isForAdoptablePet?: boolean
}


const PetCardFooter: FC<PetCardFooterProps> = (props) => {
  const { poster, text, isForAdoptablePet } = props

  return (
    <footer>

      <div className="flex justify-between items-center align-middle">
        <div className="flex gap-1.5 align-middle w-2/3">
          <Image
            src={"/assets/images/franco.jpg"}
            alt={poster}
            width={50}
            height={50}
            className="rounded-full text-sm"
          />
          <div>
            <h4 className="text-body text-primary font-bold">{poster}</h4>
            <p className="text-dark-gray text-small">Posteador/a</p>
          </div>

        </div>
        <div className={`w-1/3 flex ${isForAdoptablePet ? "justify-end" : "justify-evenly"}`}>
          {
            !isForAdoptablePet &&
            <div className="cursor-pointer p-2 hover:scale-105 hover:shadow-lg transition-all transform duration-200 border border-primary-light-500 rounded-full">
              <Image
                src={"/assets/icons/call-phone.svg"}
                alt={"call-icon"}
                width={28}
                height={26}
                className="text-sm"
              />
            </div>
          }

          <div className="cursor-pointer p-2 hover:scale-105 hover:shadow-lg transition-all transform duration-200 border border-primary-light-500 rounded-full">
            <Image
              src={"/assets/icons/chat-multiple.svg"}
              alt={"chat-icon"}
              width={26}
              height={26}
              className="text-sm"
            />
          </div>
        </div>
      </div>

      <CustomButton extraClass="w-full mt-7 h-12 uppercase tracking-wider">
        {text}
      </CustomButton>
    </footer>
  )
}

export default PetCardFooter