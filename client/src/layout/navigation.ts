import { FC } from "react"
import { HomeIcon, PostIcon, HandIcon, FootprintIcon, SearchPetIcon } from "./Icons"


interface Item {
  href: string,
  label: string,
  Icon?: FC,
  isTop: boolean
}

const navigation: Item[] = [
  { isTop: true, Icon: HomeIcon, href: '/', label: 'inicio' },
  { isTop: true, Icon: SearchPetIcon, href: '/#perdidos', label: 'perdidos' },
  { isTop: true, Icon: PostIcon, href: '/#publicar', label: 'publicar' },
  { isTop: true, Icon: FootprintIcon, href: '/#adoptar', label: 'adoptar' },
  { isTop: true, Icon: HandIcon, href: '/#donar', label: 'donar' },
  { isTop: false, href: '/', label: 'inicio' },
  { isTop: false, href: '/#nosotros', label: 'nosotros' },
  { isTop: false, href: '/#contactanos', label: 'contactanos' },
  { isTop: false, href: '/#ayudanos', label: 'ayudanos' }
]

export default navigation