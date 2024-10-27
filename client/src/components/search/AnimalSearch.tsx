'use client'
import { useState } from 'react'
import Image from 'next/image'
import filterOptions from './filterOptions'
import CustomCheckbox from '../shared/form/CustomCheckbox'
import CustomButton from '../shared/form/CustomButton'

export default function AnimalSearch() {
  const [showFilters, setShowFilters] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [sliderValue, setSliderValue] = useState(10)

  const handleFilterClick = (category: string, option: string) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev }
      if (!updatedFilters[category]) {
        updatedFilters[category] = []
      }

      // Toggle the option in the selected filters for the specified category
      if (updatedFilters[category].includes(option)) {
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== option)
      } else {
        updatedFilters[category] = [...updatedFilters[category], option]
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
          className="w-full pl-10 pr-10 py-2 border border-light-gray rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          src={"/assets/icons/search.svg"}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          width={20}
          height={20}
          alt="Search Icon"
        />

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
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all duration-300 ease-in-out ${showFilters ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
      >
        <div className="bg-white p-5 border border-primary-light shadow-xl rounded-md max-h-[80vh] overflow-y-auto w-full max-w-lg mx-2">
          <div className="text-primary flex justify-between mb-2 align-middle items-center">
            <h2>Filtros</h2>
            <span
              className="text-subtitle cursor-pointer p-2 pr-0"
              onClick={() => setShowFilters(false)}
            >
              X
            </span>
          </div>
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category} className="mb-4">
              <h3 className="font-medium mb-2 text-dark-gray">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {options.map((option) => {
                  if (option.type === 'button') {
                    return (
                      <button
                        key={option.label}
                        onClick={() => handleFilterClick(category, option.label)}
                        className={`px-3 py-2 rounded-full text-sm ${selectedFilters[category]?.includes(option.label)
                          ? 'bg-custom-gradient text-white'
                          : 'bg-gray-200 text-gray-800'
                          }`}
                      >
                        {option.label}
                      </button>
                    )
                  } else if (option.type === 'checkbox') {
                    return (
                      <CustomCheckbox
                        key={option.label}
                        label={option.label}
                        checked={selectedFilters[category]?.includes(option.label) || false}
                        setChecked={() => handleCheckboxChange(category, option.label)}
                        extraClassName="mx-4"
                      />
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
                          <span>{sliderValue}km</span>
                          <span>+60km</span>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <button onClick={clearFilters} className="text-gray underline hover:text-secondary">
              Borrar todo
            </button>
            <CustomButton onClick={() => setShowFilters(false)} extraClass="h-11"      >
              Buscar
            </CustomButton>
          </div>
        </div>
      </div>
    </div >
  )
}
