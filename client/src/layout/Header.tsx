import Nav from "./Nav"
import UserNav from "./UserNav"
import Image from "next/image"


const Header = () => {
  return (
    <header className="bg-custom-gradient h-[100px]">

      <div className="flex items-center h-[calc(100%-22px)] justify-between px-4">
        <Image
          priority
          width={40.74}
          height={30.67}
          alt="AdoPet-header-icon"
          src="/assets/icons/icon.png"
        />

        <Nav isTop />

        <UserNav />
      </div>

      <div className="h-[22px] bg-white w-full rounded-t-[22px]"></div>
    </header>
  )
}

export default Header