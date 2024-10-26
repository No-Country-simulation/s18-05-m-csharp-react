import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

export interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  extraClass?: string;
  containClass?: string;
  error?: string;
  topLabel?: string;
  children?: ReactNode
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ extraClass, error, topLabel, containClass, children, ...props }, ref) => (
    <div className={`relative flex flex-col ${containClass ?? ""}`}>
      {topLabel && (
        <label htmlFor={props.name}
          className="text-dark-gray text-subtitle">
          {topLabel}
        </label>
      )}
      <input
        ref={ref} autoComplete={props.autoComplete ?? "off"}
        className={`input shadow-md ${extraClass} mb-1`}
        {...props}
      />
      {children}
      <label about="text-error-helper" htmlFor={props.name} className={`${error && "text-red-600"} text-[10pt]`}>
        {error && error}
      </label>
    </div>
  )
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
