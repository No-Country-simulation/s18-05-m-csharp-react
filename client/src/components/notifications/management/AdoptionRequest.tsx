'use client'
import Image from 'next/image'
import { useState } from 'react'

type AdoptionRequest = {
  id: string
  petName: string
  petType: string
  requesterName: string
  requesterEmail: string
  status: 'pendiente' | 'aprobada' | 'rechazada'
  message: string
  createdAt: string
}

const mockRequests: AdoptionRequest[] =
  [
    {
      id: '1',
      petName: 'Max',
      petType: 'Perro',
      requesterName: 'Juan Pérez',
      requesterEmail: 'juan@example.com',
      status: 'pendiente',
      message: 'Me encantaría adoptar a Max. Tengo un gran patio y mucho amor para dar.',
      createdAt: '2024-10-25T14:30:00Z'
    },
    {
      id: '2',
      petName: 'Luna',
      petType: 'Gato',
      requesterName: 'María García',
      requesterEmail: 'maria@example.com',
      status: 'pendiente',
      message: 'Luna parece adorable. Tengo experiencia con gatos y le daría un hogar amoroso.',
      createdAt: '2024-10-26T09:15:00Z'
    },
    {
      id: '3',
      petName: 'Buddy',
      petType: 'Perro',
      requesterName: 'José Suarez',
      requesterEmail: 'pepe@example.com',
      status: 'pendiente',
      message: "Buddy me viene excelente para correr con él por las mañanas!",
      createdAt: '2024-10-27T16:45:00Z'
    }
  ]

export default function AdoptionManagement({ hiddenTitle }: { hiddenTitle?: boolean }) {
  const [requests, setRequests] = useState<AdoptionRequest[]>(mockRequests)
  const [expandedRequest, setExpandedRequest] = useState<string | null>(null)

  const handleExpand = (id: string) => {
    setExpandedRequest(expandedRequest === id ? null : id)
  }

  const handleStatusChange = (id: string, newStatus: 'aprobada' | 'rechazada') => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: newStatus } : request
    ))
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {
        !hiddenTitle && <h1 className="text-3xl font-bold mb-6">Solicitudes de Adopción</h1>
      }
      <div className="space-y-6">
        {requests.map((request) => (
          <div key={request.id} className={`border border-primary rounded-lg overflow-hidden transition-all ease-in-out duration-300   ${expandedRequest === request.id ? "bg-custom-gradient text-white border-transparent" : "bg-white"}`}>
            <div
              className={`flex items-center justify-between p-6`}
              onClick={() => handleExpand(request.id)}
            >
              <div>
                <h3>{request.petName} ({request.petType})</h3>
                <p className={expandedRequest === request.id ? "text-white" : "text-dark-gray"}>
                  Solicitado por: {request.requesterName}
                </p>
              </div>
              <div className="flex items-center">
                <span className={`px-4 py-2 rounded-full text-small font-semibold mr-2 transition-all duration-300
                  ${request.status === 'pendiente' ? 'bg-yellow-100 text-yellow-700' :
                    request.status === 'aprobada' ? 'bg-green-100 text-green-700' :
                      'bg-red-100 text-red-700'}`}>
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
                <Image
                  alt="expandir"
                  width={24}
                  height={24}
                  src={`/assets/icons/arrow_down.svg`}
                  className="transition-transform duration-300 transform"
                  style={{ transform: expandedRequest === request.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
            </div>
            {expandedRequest === request.id && (
              <div className="p-6 border-t border-secondary-light text-white">
                <p className="text-body mb-3"><strong>Correo electrónico:</strong> {request.requesterEmail}</p>
                <p className="text-body mb-3"><strong>Mensaje:</strong> {request.message}</p>
                <p className="text-small text-gray-400 mb-6">Solicitado el: {new Date(request.createdAt).toLocaleString()}</p>
                {request.status === 'pendiente' && (
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => handleStatusChange(request.id, 'aprobada')}
                      className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
                    >
                      <Image
                        src="/assets/icons/checked.svg"
                        height={20} width={20} alt="aprobado" className="mr-2"
                      />
                      Aprobar
                    </button>
                    <button
                      onClick={() => handleStatusChange(request.id, 'rechazada')}
                      className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
                    >
                      <Image
                        src="/assets/icons/close.svg"
                        height={20} width={20} alt="rechazado" className="mr-2"
                      />
                      Rechazar
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
        }
      </div >
    </div>
  )
}