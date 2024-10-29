import { Field, Label, Textarea, TextareaProps } from '@headlessui/react'
import clsx from 'clsx'
import { forwardRef } from 'react'

interface PropsCustomTextArea extends TextareaProps {
  label?: string
}

const CustomTextArea = forwardRef<HTMLTextAreaElement, PropsCustomTextArea>((props, ref) => {

  const { label } = props

  return (
    <div className="w-full">
      <Field>
        <Label className="text-subtitle text-dark-gray">{label}</Label>
        <Textarea
          ref={ref}
          {...props}
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
})
CustomTextArea.displayName = 'CustomTextArea';

export default CustomTextArea;