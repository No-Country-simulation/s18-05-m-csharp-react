"use client"
import { FC, FormHTMLAttributes, ReactNode, useState, useEffect } from "react"
import CustomInput from "../CustomInput";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  className?: string;
}

const Form: FC<Props> = ({ className, children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [])

  return (
    <form className={`w-10/12 m-auto ${className}`}>

      <div className={`flex flex-col gap-3 ${isMobile && "mb-[40px]"}`}>
        <CustomInput
          type="email"
          name="email"
          placeholder="Correo electrónico"
          extraClass="w-full"
        />

        <CustomInput
          type="password"
          name="password"
          placeholder="Contraseña"
          extraClass="w-full"
        />
      </div>

      {isMobile && children}

      <button className={`w-full text-center text-dark-gray font-bold text-body h-[44px] border-primary-light hover:border-primary hover:bg-primary hover:text-white border-[1px] rounded-[22px] transition-all ease duration-300 focus:outline-primary focus:scale-95 ${isMobile ? "mt-[40px]" : "my-[40px]"}`}>
        Iniciar sesión
      </button>

      {!isMobile && children}

    </form>
  )
}


export default Form