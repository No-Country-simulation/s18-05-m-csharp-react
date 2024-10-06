"use client"
import { FC, useEffect, useState } from "react"
import { HomeIcon, PostIcon, HandIcon, FootprintIcon, SearchPetIcon } from "./Icons"
import { useRouter, usePathname } from "next/navigation"

interface Item {
  Icon: FC,
  href: string,
  label: string,
}

const navigation: Item[] = [
  { Icon: HomeIcon, href: '/', label: 'inicio' },
  { Icon: SearchPetIcon, href: '/#perdidos', label: 'perdidos' },
  { Icon: PostIcon, href: '/#publicar', label: 'publicar' },
  { Icon: FootprintIcon, href: '/#adoptar', label: 'adoptar' },
  { Icon: HandIcon, href: '/#donar', label: 'donar' },
]

const BottomNav: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Aquí defines que sea "chico" si es <= 768px
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768)

    checkScreenSize() // Comprobar al montar el componente

    // Agregar listener para detectar cambios
    window.addEventListener("resize", checkScreenSize)
    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])


  if (!isMobile) return null

  return (
    <nav className="bg-custom-gradient h-[66px] flex items-center justify-evenly fixed bottom-0 left-0 right-0 z-50 rounded-t-lg">
      {navigation.map((item, i) => {
        const isActive = pathname.endsWith(item.href)
        return (
          <button key={i} type="button" className={`flex flex-col items-center justify-center gap-0.5 capitalize
              text-xs h-full px-3 w-14 transition-all duration-300 ease
              hover:text-secondary-light focus:font-bold focus:text-secondary-light
             ${isActive ? "font-bold text-secondary-light" : "text-white font-regular"}
              `}
            onClick={() => router.replace(item.href)}
          >
            <item.Icon />
            <span>
              {item.label}
            </span>
            <span className={`w-4 h-[2px] rounded-xl ${isActive && "bg-secondary-light"}`}> </span>
          </button>
        )
      })}

    </nav >
  )
}

export default BottomNav