import Nav from "./components/Nav"
import UserNav from "./components/UserNav"
import Image from "next/image"


const Header = () => {
  return (
    <header className="bg-custom-gradient h-[85px]">

      <div className="flex items-center h-[calc(100%-22px)] justify-between px-4">
        <Image
          priority
          width={147}
          height={27}
          className="object-contain z-20"
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