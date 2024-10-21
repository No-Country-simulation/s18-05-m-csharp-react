"use client"
import { FC, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import links, { Item } from "./navigation"
import LinkItem from "@/components/shared/LinkItem"
import useModal from "@/hooks/useModal"
import useUser from "@/hooks/useUser"

interface NavProps {
  isTop?: boolean
}

const BottomNav: FC<NavProps> = ({ isTop }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState<boolean>(true)
  const { openModal } = useModal()
  const { isLogged } = useUser()
  const navigation: Item[] = links.map((item) => {
    if (item.label === "publicar") {
      return { ...item, handleClick: openModal }
    } return item
  })

  useEffect(() => {
    // Aquí defines que sea "chico" si es <= 768px
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768)

    checkScreenSize() // Comprobar al montar el componente

    // Agregar listener para detectar cambios
    window.addEventListener("resize", checkScreenSize)
    // Limpiar el listener al desmontar el componente
    setLoading(false)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  if (loading) return null
  if (isMobile && isTop) return null;

  return (
    <nav className="h-full w-full md:w-6/12">
      <ul className="flex h-full w-full items-center justify-evenly">

        {


          navigation.map((item, i) => {
            const isActive = pathname.endsWith(item.href)

            if (isLogged && isMobile && !isTop && item.isTop) {
              return (
                <li className="w-auto" key={i}>
                  <button type="button" onClick={() => {
                    if (item.handleClick) {
                      item.handleClick();
                    } else {
                      router.replace(item.href);
                    }
                  }
                  }
                    className={`flex flex-col items-center justify-center gap-0.5 capitalize
                      text-xs h-full px-3 w-14 transition-all duration-300 ease
                      hover:text-secondary-light focus:font-bold focus:text-secondary-light
                    ${isActive ? "font-bold text-secondary-light" : "text-white font-regular"} `
                    }
                  >
                    {item.Icon && <item.Icon />}
                    <span>
                      {item.label}
                    </span>
                    <span className={`w-4 h-[2px] rounded-xl ${isActive && "bg-secondary-light"}`}> </span>
                  </button>
                </li>
              )
            }

            else if (isLogged && isTop && item.isTop) return <LinkItem isActive={isActive} item={item} i={i} key={i} />

            else if (!isTop && !item.isTop && !isMobile) return <LinkItem isActive={isActive} item={item} i={i} key={i} />
          })


        }
      </ul>
    </nav >
  )
}

export default BottomNav