'use client'

import { useState } from 'react'
// import { Search, Sliders } from 'lucide-react'
import Image from 'next/image'

type FilterOption = {
  type: 'button' | 'checkbox' | 'slider'
  label: string
  options?: string[]
  min?: number
  max?: number
  step?: number
}

const filterOptions: Record<string, FilterOption[]> = {
  'Tipo de animal': [
    { type: 'button', label: 'Perro' },
    { type: 'button', label: 'Gato' },
    { type: 'button', label: 'Hamster' },
    { type: 'button', label: 'Pájaro' },
    { type: 'button', label: 'Conejo' },
    { type: 'button', label: 'Otros' },
  ],
  'Tamaño': [
    { type: 'button', label: 'Grande' },
    { type: 'button', label: 'Mediano' },
    { type: 'button', label: 'Chico' },
  ],
  'Sexo': [
    { type: 'button', label: 'Macho' },
    { type: 'button', label: 'Hembra' },
  ],
  'Edad': [
    { type: 'button', label: 'Cachorro' },
    { type: 'button', label: 'Entre 1 a 3 años' },
    { type: 'button', label: 'Entre 3 a 5 años' },
    { type: 'button', label: 'Más de 5 años' },
  ],
  'Estado': [
    { type: 'checkbox', label: 'Esterilizado' },
    { type: 'checkbox', label: 'Vacunas al día' },
    { type: 'checkbox', label: 'Castrado' },
  ],
  'Ubicación': [
    { type: 'slider', label: 'Distancia', min: 10, max: 60, step: 10 },
  ],
}

export default function AnimalSearch() {
  const [showFilters, setShowFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [sliderValue, setSliderValue] = useState(10)

  const handleFilterClick = (category: string, option: string) => {
    setSelectedFilters(prev => {
      const updatedFilters = { ...prev }
      if (!updatedFilters[category]) {
        updatedFilters[category] = []
      }
      const index = updatedFilters[category].indexOf(option)
      if (index > -1) {
        updatedFilters[category].splice(index, 1)
      } else {
        updatedFilters[category].push(option)
      }
      return updatedFilters
    })
  }

  const handleCheckboxChange = (category: string, option: string) => {
    handleFilterClick(category, option)
  }

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
  }

  const clearFilters = () => {
    setSelectedFilters({})
    setSliderValue(10)
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="¿Qué animal te gustaría adoptar hoy?"
          className="w-full pl-10 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          src={"/assets/icons/search.svg"} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          width={20}
          height={20}
          alt="Search Icon"
        />

        {/* <Search /> */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <Image
            src={"/assets/icons/filter.svg"}
            width={20}
            height={20}
            alt="Filter Icon"
          />
          {/* <Sliders /> */}
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Filtros</h2>
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category} className="mb-4">
              <h3 className="font-medium mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => {
                  if (option.type === 'button') {
                    return (
                      <button
                        key={option.label}
                        onClick={() => handleFilterClick(category, option.label)}
                        className={`px-3 py-1 rounded-full text-sm ${selectedFilters[category]?.includes(option.label)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-200 text-gray-800'
                          }`}
                      >
                        {option.label}
                      </button>
                    )
                  } else if (option.type === 'checkbox') {
                    return (
                      <label key={option.label} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters[category]?.includes(option.label) || false}
                          onChange={() => handleCheckboxChange(category, option.label)}
                          className="mr-2"
                        />
                        {option.label}
                      </label>
                    )
                  } else if (option.type === 'slider') {
                    return (
                      <div key={option.label} className="w-full">
                        <input
                          type="range"
                          min={option.min}
                          max={option.max}
                          step={option.step}
                          value={sliderValue}
                          onChange={(e) => handleSliderChange(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>-{sliderValue}km</span>
                          <span>+60km</span>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <button onClick={clearFilters} className="text-gray-600 underline">
              Borrar todo
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
              Buscar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}