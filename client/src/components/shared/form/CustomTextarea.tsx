import { Description, Field, Label, Textarea, TextareaProps } from '@headlessui/react'
import clsx from 'clsx'
import { FC } from 'react'

interface PropsCustomTextArea extends TextareaProps {
  label?: string
}

const CustomTextArea: FC<PropsCustomTextArea> = (props) => {
  const { label } = props

  return (
    <div className="w-full">
      <Field>
        <Label className="text-subtitle text-dark-gray">{label}</Label>
        {/* <Description className="text-sm/6 text-white/50">This will be shown under the product title.</Description> */}
        <Textarea
          placeholder={props.placeholder}
          className={clsx(
            'input min-h-28 max-h-52 shadow-md',
            'block w-full resize-none rounded-xl p-3',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
          rows={3}
        />
      </Field>
    </div>
  )
}

export default CustomTextArea;