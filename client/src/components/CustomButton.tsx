import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  extraClass?: string;
}

const CustomButton: FC<CustomButtonProps> = (props) => {
  const { text, extraClass, ...rest } = props;

  return (
    <button
      className={`btn text-white active:bg-active bg-custom-gradient transition-all duration-300 ease ${props.extraClass}`}
      {...rest}
    >
      {props.text}
    </button>
  )
}

export default CustomButton