import { FC, ReactNode, useState, useEffect, FormEvent } from "react"

interface Props {
  className?: string;
  textSubmit?: string
  children?: ReactNode;
  extraChildren?: ReactNode;
  onSubmit: (e: FormEvent) => void;
}

const Form: FC<Props> = (props) => {
  const { className, textSubmit, children, extraChildren, onSubmit } = props
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [])

  return (
    <form className={`w-10/12 m-auto ${className}`} onSubmit={onSubmit}>

      <div className={`flex flex-col gap-2 ${isMobile && "mb-[40px]"}  transition-all ease duration-300 `}>
        {children}
      </div>

      {isMobile && extraChildren}

      <button className={`w-full text-center text-dark-gray font-bold text-body h-[44px] border-primary-light hover:border-primary hover:bg-primary hover:text-white border-[1px] rounded-[22px] transition-all ease duration-300 focus:outline-primary focus:scale-95 ${isMobile ? "mt-[40px]" : "my-[40px]"}`}>
        {textSubmit ?? "Iniciar sesión"}
      </button>

      {!isMobile && extraChildren}

    </form>
  )
}


export default Form