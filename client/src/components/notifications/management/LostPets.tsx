"use client"
import { useState } from 'react'

type LostPet = {
  id: string
  name: string
  type: string
  location: string
  date: string
  description: string
  status: 'active' | 'found'
}

const initialLostPets: LostPet[] = [
  {
    id: '1',
    name: 'Rocky',
    type: 'Perro',
    location: 'Parque Central, Ciudad de México',
    date: '2024-10-20',
    description: 'Labrador dorado, lleva collar rojo',
    status: 'active'
  },
  {
    id: '2',
    name: 'Mimi',
    type: 'Gato',
    location: 'Calle Principal, Guadalajara',
    date: '2024-10-22',
    description: 'Gato siamés, muy tímido',
    status: 'active'
  }
]

export default function LostPets() {
  const [lostPets, setLostPets] = useState<LostPet[]>(initialLostPets)
  const [expandedPet, setExpandedPet] = useState<string | null>(null)

  const handleExpand = (id: string) => {
    setExpandedPet(expandedPet === id ? null : id)
  }

  const handleStatusChange = (id: string, newStatus: 'active' | 'found') => {
    setLostPets(lostPets.map(pet =>
      pet.id === id ? { ...pet, status: newStatus } : pet
    ))
  }

  const handleDelete = (id: string) => {
    setLostPets(lostPets.filter(pet => pet.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Mascotas Perdidas</h1>
      <div className="space-y-4">
        {lostPets.map((pet) => (
          <div key={pet.id} className="border rounded-lg shadow-sm overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-50"
              onClick={() => handleExpand(pet.id)}
            >
              <div>
                <h2 className="text-lg font-semibold">{pet.name} ({pet.type})</h2>
                <p className="text-sm text-gray-600">Perdido en: {pet.location}</p>
              </div>
              <div className="flex items-center">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${pet.status === 'active' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                  }`}>
                  {pet.status === 'active' ? 'Perdido' : 'Encontrado'}
                </span>
              </div>
            </div>
            {expandedPet === pet.id && (
              <div className="p-4 border-t">
                <p className="text-sm mb-2"><strong>Fecha de pérdida:</strong> {pet.date}</p>
                <p className="text-sm mb-4"><strong>Descripción:</strong> {pet.description}</p>
                <div className="flex justify-end space-x-2">
                  {pet.status === 'active' ? (
                    <button
                      onClick={() => handleStatusChange(pet.id, 'found')}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      Marcar como Encontrado
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatusChange(pet.id, 'active')}
                      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                    >
                      Reactivar Búsqueda
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(pet.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}