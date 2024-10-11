import Image from "next/image"
import Nav from "./components/Nav"
import Link from "next/link"
import { InstaIcon, TwitterIcon, YoutubeIcon } from "./components/Icons"

const Footer = () => {
  return (
    <footer className="bg-custom-gradient w-full md:h-[90px] h-[66px] z-40
    md:flex md:items-center md:justify-between md:rounded-t-[22px] lg:relative
    fixed bottom-0 left-0 rounded-t-[11px]">
      <div className="md:block hidden w-3/12">
        <Image
          className="mx-auto object-contain"
          priority
          width={46.74}
          height={36.67}
          alt="AdoPet"
          src="/assets/icons/icon.png"
        />
      </div>

      <Nav />

      <div className="w-3/12 gap-[16px] md:flex md:justify-center hidden">
        {
          [InstaIcon, TwitterIcon, YoutubeIcon].map((Icon, i) => (
            <Link href={"#"} target="_blank" key={i} className="rounded-full h-[36px] w-[36px] flex items-center justify-center bg-white-100 hover:scale-[1.15] transition-all ease duration-[.35s] border-[1px] border-transparent hover:border-secondary-light text-white hover:text-secondary-light">
              <Icon />
            </Link>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer