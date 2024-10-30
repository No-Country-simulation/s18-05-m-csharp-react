import Image from 'next/image'
import { FC } from 'react'

const ChatAndCallIcon: FC<{ width?: string, isForAdoptablePet?: boolean }> = ({ width, isForAdoptablePet }) => {
  return (
    <div className={`${width ?? "w-1/3"} flex ${isForAdoptablePet ? "justify-end" : "justify-evenly"}`}>
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
  )
}

export default ChatAndCallIcon