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
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-purple-700 mb-2">
        Ubicación
      </label>
      <div className="relative">
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleChange}
          placeholder="Ingresa tu dirección"
          className="w-full pl-10 pr-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
        />
        <Image
          src="/assets/icons/location.svg"
          alt="Location Icon"
          width={21}
          height={21}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </div>
  )
}