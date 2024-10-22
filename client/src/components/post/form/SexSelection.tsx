import { useState } from 'react'
import { RadioGroup, Label, Radio } from '@headlessui/react'
import Image from 'next/image'
import sexOptions from './options/sex'

interface SexSelectionProps {
  onSexChange: (sex: 'Macho' | 'Hembra' | 'No sé') => void
}



export default function SexSelection({ onSexChange }: SexSelectionProps) {
  const [selected, setSelected] = useState<'Macho' | 'Hembra' | 'No sé'>('Macho')

  const handleChange = (value: 'Macho' | 'Hembra' | 'No sé') => {
    setSelected(value)
    onSexChange(value)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-purple-700 mb-2">Sexo</label>
      <RadioGroup value={selected} onChange={handleChange} className="flex space-x-4">
        {sexOptions.map((option) => (
          <Radio
            key={option.sex}
            value={option.sex}
            className={({ focus, hover, checked }) =>
              `${hover ? ' ring-primary ' : 'ring-primary-light'}
              ${focus ? 'ring-primary ' : ''}
              ${checked ? 'bg-primary text-white ring-0' : 'bg-white'}
              relative flex cursor-pointer rounded-lg px-5 py-2 shadow-md focus:outline-none
              ring-1 ring-opacity-60 ring-offset-0
              `
            }
          >
            {({ checked }) => (
              <div className="flex flex-col items-center justify-center gap-0.5">
                <span>
                  <option.Icon />
                </span>
                <div className="text-sm">
                  <Label
                    as="p"
                    className={`${checked ? 'text-white' : 'text-gray-900'}`}
                  >
                    {option.sex}
                  </Label>
                </div>
              </div>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  )
}