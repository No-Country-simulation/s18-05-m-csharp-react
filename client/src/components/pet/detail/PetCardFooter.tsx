import CustomButton from "@/components/shared/form/CustomButton";
import { createAdoptionRequest } from "@/data/adoptionRequest/post";
import Image from "next/image";
import { FC, useState } from "react"

type PetCardFooterProps = {
  poster: string;
  postulateText: string;
  text: string;
  isForAdoptablePet?: boolean;
  petId?: number;
}


const PetCardFooter: FC<PetCardFooterProps> = (props) => {
  const { poster, text, postulateText, isForAdoptablePet, petId } = props
  const [postulate, setPostulate] = useState<boolean>(false)
  const [isFirstClick, setisFirstClick] = useState<boolean>(true)


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

      <CustomButton
        extraClass="w-full mt-7 h-12 uppercase tracking-wider"
        type="button"
        disabled={postulate}
        onClick={async (e) => {
          e.preventDefault()
          if (isForAdoptablePet && petId && isFirstClick) {
            const res = await createAdoptionRequest(petId)
            if (res.success) {
              setPostulate(true)
              setisFirstClick(false)
            }
          } else {
            setPostulate(true)
          }
        }}
      >
        {
          postulate
            ? postulateText
            : text
        }
      </CustomButton>
      {
        postulate && <button className="block mx-auto mb-3 mt-6 text-center text-secondary font-semibold hover:underline" type="button" onClick={(e) => {

          setPostulate(false)
        }}>
          Cancelar postulación
        </button>
      }
    </footer>
  )
}

export default PetCardFooter