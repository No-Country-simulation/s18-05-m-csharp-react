import { FC, FormHTMLAttributes, ReactNode } from "react"
import CustomInput from "../CustomInput";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
  className?: string;
  downButonn?: boolean;
}

const Form: FC<Props> = ({ downButonn = false, className, children }) => {

  return (
    <form className={`w-10/12 m-auto ${className}`}>

      <div className="flex flex-col gap-3">
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

      {downButonn && children}

      <button className="w-full text-center text-dark-gray font-bold text-body h-[44px] border-primary-light hover:border-primary hover:bg-primary hover:text-white border-[1px] rounded-[22px] transition-all ease duration-300 focus:outline-primary focus:scale-95 my-[40px]">
        Iniciar sesión
      </button>

      {!downButonn && children}

    </form>
  )
}


export default Form