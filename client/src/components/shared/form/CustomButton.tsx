import { ButtonHTMLAttributes, FC } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  extraClass?: string;
  children?: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const { text, extraClass, children, ...rest } = props;

  return (
    <button
      className={`btn text-white active:bg-active bg-custom-gradient transition-all duration-300 ease ${extraClass}`}
      {...rest}
    >
      {text ?? children}
    </button>
  )
}

export default CustomButton