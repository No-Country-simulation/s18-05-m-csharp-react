import { forwardRef, InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  error?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ extraClass, error, ...props }, ref) => (
    <div>
      <input
        ref={ref} autoComplete={props.autoComplete ?? "off"}
        className={`input shadow-sm ${extraClass} mb-1`}
        {...props}
      />
      <label about="text-error-helper" htmlFor={props.name} className={`${error && "text-red-600"} text-[10pt]`}>
        {error && error}
      </label>
    </div>
  )
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
