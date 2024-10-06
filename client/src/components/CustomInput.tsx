import { FC, InputHTMLAttributes } from "react"

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
}

const CustomInput: FC<CustomInputProps> = (props) => {
  const { extraClass, ...rest } = props
  return (
    <input className={`input ${extraClass}`} {...rest} />
  )
}

export default CustomInput