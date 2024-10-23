import CustomInput from '@/components/shared/CustomInput'
import Image from 'next/image'
import { useState } from 'react'

interface LocationInputProps {
  onLocationChange: (location: string) => void
}

export default function LocationInput({ onLocationChange }: LocationInputProps) {
  const [location, setLocation] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
    onLocationChange(e.target.value)
  }

  return (
    <CustomInput
      topLabel={"Ubicación"}
      extraClass="rounded-xl pl-[35px!important]"
      placeholder="Ingresa tu dirección"
    >
      <Image
        src="/assets/icons/location.svg"
        alt="Location Icon"
        width={21}
        height={21}
        className="absolute left-2 top-2/3 transform -translate-y-1/2"
      />
    </CustomInput>
  )
}