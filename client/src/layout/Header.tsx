import Nav from "./components/Nav"
import UserNav from "./components/UserNav"
import Image from "next/image"


const Header = () => {
  return (
    <header className="bg-custom-gradient h-[100px]">

      <div className="flex items-center h-[calc(100%-22px)] justify-between px-4">
        <Image
          priority
          width={168}
          height={30}
          className="object-contain"
          alt="AdoPet-logo"
          src="/assets/icons/adoPet-logo.png"
        />

        <Nav isTop />

        <UserNav />
      </div>

      <div className="h-[22px] bg-white w-full rounded-t-[22px]"></div>
    </header>
  )
}

export default Header