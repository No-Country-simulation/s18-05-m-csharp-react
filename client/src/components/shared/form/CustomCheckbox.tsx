import { forwardRef, useState } from 'react'
import { Checkbox, Field, Label } from '@headlessui/react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  setChecked: (checked: boolean) => void
}

const CustomCheckbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, checked, setChecked } = props

  return (
    <Field className={`flex items-center gap-1.5 ${!!props.checked ? "opacity-55" : ""} text-dark-gray`}>
      <Checkbox
        ref={ref}
        checked={checked}
        onChange={(e) => setChecked(e)}
        className="group block size-5 p-[1px] rounded-full data-[checked]:border-primary border bg-white data-[checked]:bg-primary-light-500"
      >
        <svg className="stroke-primary p-[1px]  bg-white rounded-full opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Checkbox>
      <Label className={"md:text-small text-sm text-ellipsis text-nowrap whitespace-nowrap max-w-fit overflow-hidden"}>
        {label}
      </Label>
    </Field>
  )
})

CustomCheckbox.displayName = 'CustomCheckbox';

export default CustomCheckbox