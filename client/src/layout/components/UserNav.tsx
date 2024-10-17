"use client"

import CustomPopover from "@/components/shared/CustomPopover";
import useUser from "@/hooks/UseUser";
import Image from "next/image";
import Link from "next/link"

const links: { href: string; label: string }[] = [
  { href: "/iniciar-sesion", label: "Iniciar sesión" },
  { href: "/registrarme", label: "Registrarme" },
]


const UserNav = () => {
  const { isLogged } = useUser();

  if (isLogged) return (
    <div className="flex items-center space-x-2">

      <CustomPopover aria-label="Messages" className="p-2 hover:bg-white-100 rounded-full transition-colors">
        <Image
          src={"/assets/icons/chat.svg"}
          alt={"chat-icon"}
          width={23}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </CustomPopover>

      <button aria-label="Messages" className="p-2 hover:bg-white-100 rounded-full transition-colors">
        <Image
          src={"/assets/icons/chat.svg"}
          alt={"chat-icon"}
          width={23}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </button>
      <button aria-label="Notifications" className="p-2 hover:bg-white-100 rounded-full transition-colors">
        <Image
          src={"/assets/icons/notification.svg"}
          alt={"notification-icon"}
          width={21}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </button>
      <button aria-label="Profile" className="p-2 hover:bg-white-100 rounded-full transition-colors">
        <Image
          src={"/assets/icons/user.svg"}
          alt={"user-icon"}
          width={22}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </button>
    </div>
  )

  return (
    <div className="flex gap-1">
      {
        links.map(({ href, label }, i) => (
          <Link href={href} key={i} className={`
          rounded-full py-1.5 px-4 text-small
          duration-300 text-white hover:text-secondary-light
          ${!(i % 2) && "bg-white-100"} transition-all ease  
          `}>
            {label}
          </Link>
        ))
      }
    </div>
  )
}

export default UserNav