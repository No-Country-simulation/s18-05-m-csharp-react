"use client"
import { useState } from 'react'

type FoundPet = {
  id: string
  type: string
  location: string
  date: string
  description: string
  status: 'active' | 'returned'
}

const initialFoundPets: FoundPet[] = [
  {
    id: '1',
    type: 'Perro',
    location: 'Avenida Principal, Monterrey',
    date: '2024-10-23',

    description: 'Chihuahua marrón, sin collar',
    status: 'active'
  },
  {
    id: '2',
    type: 'Gato',
    location: 'Plaza Central, Puebla',
    date: '2024-10-25',
    description: 'Gato atigrado, muy amigable',
    status: 'active'
  }
]

export default function FoundPets({ hiddenTitle }: { hiddenTitle?: boolean }) {
  const [foundPets, setFoundPets] = useState<FoundPet[]>(initialFoundPets)
  const [expandedPet, setExpandedPet] = useState<string | null>(null)

  const handleExpand = (id: string) => {
    setExpandedPet(expandedPet === id ? null : id)
  }

  const handleStatusChange = (id: string, newStatus: 'active' | 'returned') => {
    setFoundPets(foundPets.map(pet =>
      pet.id === id ? { ...pet, status: newStatus } : pet
    ))
  }

  const handleDelete = (id: string) => {
    setFoundPets(foundPets.filter(pet => pet.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {
        !hiddenTitle && <h1 className="text-3xl font-bold mb-6">Mascotas Encontradas</h1>
      }
      <div className="space-y-6">
        {foundPets.map((pet) => (
          <div key={pet.id} className="border border-primary rounded-lg shadow-sm transition-all ease-in-out duration-300  overflow-hidden bg-white">
            <div
              className={`flex items-center justify-between p-6`}
              onClick={() => handleExpand(pet.id)}
            >
              <div>
                <h3>Mascota Encontrada ({pet.type})</h3>
                <p>Encontrado en: {pet.location}</p>
              </div>
              <div className="flex items-center">
                <span className={`px-4 py-2 rounded-full text-small font-semibold ${pet.status === 'active' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'
                  }`}>
                  {pet.status === 'active' ? 'Buscando Dueño' : 'Devuelto'}
                </span>
              </div>
            </div>
            {expandedPet === pet.id && (
              <div className="p-6 border-t border-primary">
                <p className="text-body mb-2"><strong>Fecha de encuentro:</strong> {pet.date}</p>
                <p className="text-body mb-4"><strong>Descripción:</strong> {pet.description}</p>
                <div className="flex justify-end space-x-2">
                  {pet.status === 'active' ? (
                    <button
                      onClick={() => handleStatusChange(pet.id, 'returned')}
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      Marcar como Devuelto
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