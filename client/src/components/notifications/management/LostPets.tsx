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

export default function LostPets({ hiddenTitle }: { hiddenTitle?: boolean }) {
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
      {
        !hiddenTitle && <h1 className="text-3xl font-bold mb-6">Mascotas Perdidas</h1>
      }

      <div className="space-y-6">
        {lostPets.map((pet) => (
          <div key={pet.id} className="border border-primary rounded-lg overflow-hidden transition-all ease-in-out duration-300 bg-white">
            <div
              className={`flex items-center justify-between p-6`}
              onClick={() => handleExpand(pet.id)}
            >
              <div>
                <h3>{pet.name} ({pet.type})</h3>
                <p>Perdido en: {pet.location}</p>
              </div>
              <div className="flex items-center">
                <span className={`px-4 py-2 rounded-full text-small font-semibold ${pet.status === 'active' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                  }`}>
                  {pet.status === 'active' ? 'Perdido' : 'Encontrado'}
                </span>
              </div>
            </div>
            {expandedPet === pet.id && (
              <div className="p-6 border-t border-primary">
                <p className="text-body mb-2"><strong>Fecha de pérdida:</strong> {pet.date}</p>
                <p className="text-body mb-4"><strong>Descripción:</strong> {pet.description}</p>
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