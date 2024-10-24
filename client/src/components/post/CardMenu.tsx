"use client"
import useModal from "@/hooks/useModal"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC } from "react"



const CardMenu: FC<CardMenuProps> = (props) => {
  const { text, label, href, icon, alt } = props
  const { closeModal } = useModal()
  const router = useRouter()

  const handleClick = () => {
    closeModal()
    router.push(href)
  }

  return (
    <button onClick={handleClick}
      className="rounded-3xl shadow-xl text-gray p-3 bg-white hover:bg-primary hover:text-white flex flex-col items-center gap-2.5 transition-all ease duration-200 
    focus:bg-primary focus:text-white focus:scale-[0.98] focus:outline-white
     w-full"
    >

      <Image
        src={icon}
        alt={alt}
        height={59}
        width={69}
        className="object-contain"
      />

      <h3 className="text-left leading-5">
        {text}
      </h3>
      <p className="text-center text-small leading-4">
        {label}
      </p>
    </button>
  )
}

export default CardMenu