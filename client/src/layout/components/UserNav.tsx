"use client"

import CustomPopover from "@/components/shared/form/CustomPopover";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link"

const links: { href: string; label: string }[] = [
  { href: "/iniciar-sesion", label: "Iniciar sesión" },
  { href: "/registrarme", label: "Registrarme" },
]


const UserNav = () => {
  const { isLogged, logOut } = useUser();

  if (isLogged) return (
    <div className="flex items-center space-x-2 z-20">

      <CustomPopover
        aria-label="Messages"
        className="p-2 hover:bg-white-100 rounded-full transition-colors focus:outline-primary-light-500"
        options={[
          { href: "/#", label: "Ver mensajes", isDisabled: true },
          { href: "/#", label: "Nuevo mensaje", isDisabled: true }
        ]}
      >
        <Image
          src={"/assets/icons/chat.svg"}
          alt={"chat-icon"}
          width={23}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </CustomPopover>


      <CustomPopover
        aria-label="Notifications"
        className="p-2 hover:bg-white-100 rounded-full transition-colors focus:outline-primary-light-500"
        options={[
          { href: "/notificaciones", label: "Gestionar Publicaciones" },
          { href: "/notificaciones/adopciones", label: "Adopciones" },
          { href: "/notificaciones/mascotas-perdidas", label: "Mascotas Perdidas" },
          { href: "/notificaciones/mascotas-encontradas", label: "Mascotas Encontradas" },
        ]}
      >
        <Image
          src={"/assets/icons/notification.svg"}
          alt={"notification-icon"}
          width={21}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </CustomPopover>


      <CustomPopover
        aria-label="Profile"
        className="p-2 hover:bg-white-100 rounded-full transition-colors focus:outline-primary-light-500"
        options={[
          { href: "/mi-perfil", label: "Ver perfil" },
          { href: "/#", label: "Ajustes", isDisabled: true }
        ]}
        specialContent={
          <button className="rounded-lg py-2 px-4 transition hover:bg-red-400 block hover:text-white w-full text-left text-small" onClick={logOut} >
            Cerrar sesión
          </button>
        }
      >
        <Image
          src={"/assets/icons/user.svg"}
          alt={"user-icon"}
          width={22}
          height={22}
          className="w-6 h-6 object-contain"
        />
      </CustomPopover>

    </div>
  )

  return (
    <div className="flex gap-1 z-20">
      {
        links.map(({ href, label }, i) => (
          <Link href={href} key={i} className={`
          rounded-full py-1.5 md:px-4 px-2.5 text-small
          duration-300 text-white hover:text-secondary-light
          ${!(i % 2) && "bg-white-100"} transition-all ease text-nowrap text-ellipsis overflow-hidden whitespace-nowrap md:max-w-none max-w-[100px]
          `}>
            {label}
          </Link>
        ))
      }
    </div>
  )
}

export default UserNav