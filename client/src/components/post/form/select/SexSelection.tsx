import { RadioGroup, Label, Radio } from '@headlessui/react'
import sexOptions from './sex'

interface SexSelectionProps {
  gender: {
    state: 0 | 1 | 2,
    setState: (value: 0 | 1 | 2) => void
  }
}



export default function SexSelection({ gender: { state, setState } }: SexSelectionProps) {

  const handleChange = (value: 0 | 1 | 2) => {
    setState(value)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-dark-gray text-subtitle mb-2">Sexo</label>
      <RadioGroup value={state} onChange={handleChange} className="flex space-x-4">
        {sexOptions.map((option) => (
          <Radio
            key={option.label}
            value={option.value}
            className={({ focus, hover, checked }) =>
              `${hover ? ' ring-primary ' : 'ring-primary-light'}
              ${focus ? 'ring-primary ' : ''}
              ${checked ? 'bg-custom-gradient-3 text-white ring-0' : 'bg-white'}
              relative flex cursor-pointer rounded-lg w-full justify-center py-1.5 shadow-md focus:outline-none
              ring-1 ring-opacity-60 ring-offset-0
              `
            }
          >
            {({ checked }) => (
              <div className="flex flex-col items-center justify-evenly gap-0.5">
                <span>
                  <option.Icon />
                </span>
                <div className="text-sm">
                  <Label
                    as="p"
                    className={`${checked ? 'text-white' : 'text-gray-900'}`}
                  >
                    {option.label}
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