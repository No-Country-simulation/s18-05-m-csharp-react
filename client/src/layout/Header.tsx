import Nav from "./Nav"

const Header = () => {
  return (
    <header className="bg-custom-gradient h-[100px]">

      <div className="flex items-center h-[calc(100%-22px)] justify-between px-4">
        <Nav isTop />
      </div>

      <div className="h-[22px] bg-white w-full rounded-t-[22px]"></div>
    </header>
  )
}

export default Header