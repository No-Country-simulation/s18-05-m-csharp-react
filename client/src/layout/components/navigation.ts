import { FC } from "react"
import { HomeIcon, PostIcon, HandIcon, FootprintIcon, SearchPetIcon } from "./Icons"


export interface Item {
  href: string,
  label: string,
  Icon?: FC,
  isTop: boolean,
  handleClick?: () => void
}

const navigation: Item[] = [
  { handleClick: undefined, isTop: true, Icon: HomeIcon, href: '/', label: 'inicio' },
  { handleClick: undefined, isTop: true, Icon: SearchPetIcon, href: '/#perdidos', label: 'perdidos' },
  { handleClick: undefined, isTop: true, Icon: PostIcon, href: '#', label: 'publicar' },
  { handleClick: undefined, isTop: true, Icon: FootprintIcon, href: '/adoptar', label: 'adoptar' },
  { handleClick: undefined, isTop: true, Icon: HandIcon, href: '/donar', label: 'donar' },
  { handleClick: undefined, isTop: false, href: '/', label: 'inicio' },
  { handleClick: undefined, isTop: false, href: '/nosotros', label: 'nosotros' },
  { handleClick: undefined, isTop: false, href: '/contactanos', label: 'contactanos' },
  { handleClick: undefined, isTop: false, href: '/ayudanos', label: 'ayudanos' }
]

export default navigation