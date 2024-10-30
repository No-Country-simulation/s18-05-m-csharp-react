'use client';
import ChatAndCallIcon from '@/components/pet/ChatAndCallIcon';
import Loading from '@/components/shared/Loading';
import { getAdoptionRequest } from '@/data/adoptionRequest/get';
import { updateOneAdoptionRequest } from '@/data/adoptionRequest/put';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function AdoptionManagement({ hiddenTitle }: { hiddenTitle?: boolean }) {
  const [requests, setRequests] = useState<AdoptionEntity[]>([]);
  const [isLoading, setIsLoading] = useState({ loading: false, message: '' });
  const [expandedRequest, setExpandedRequest] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    setExpandedRequest(expandedRequest === id ? null : id);
  };

  const handleStatusChange = async (id: number, newStatus: 'aprobada' | 'rechazada') => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: newStatus === 'aprobada' ? 1 : 2 } : request
    ));

    try {
      const data = await updateOneAdoptionRequest(id, newStatus === 'aprobada' ? 1 : 2)
      if (process.env.MODE === "dev") {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    setIsLoading({ loading: true, message: '' });
    getAdoptionRequest()
      .then(data => {
        if (data.success && data.data !== null) {
          setRequests(data.data);
          setIsLoading({ loading: false, message: '' });
        } else {
          setIsLoading({ loading: false, message: 'No tiene ninguna petición de adopción.' });
        }
      })
      .catch(() => setIsLoading({ loading: false, message: 'Error al cargar solicitudes de adopción.' }));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {!hiddenTitle && <h1 className="text-3xl font-bold mb-6">Solicitudes de Adopción</h1>}
      <div className="space-y-6 min-h-[40vh]">
        {isLoading.loading ? (
          <Loading />
        ) : requests.length > 0 ? (
          requests.map(request => (
            <div key={request.id} className={`border border-primary rounded-lg overflow-hidden transition-all ease-in-out duration-300 ${expandedRequest === request.id ? 'bg-custom-gradient text-white border-transparent' : 'bg-white'}`}>
              <div className="flex flex-wrap gap-y-2 items-center justify-between p-6 relative" onClick={() => handleExpand(request.id)}>
                <div>
                  <h3>{request.name} ({request.age})</h3>
                  <p className={expandedRequest === request.id ? 'text-white' : 'text-dark-gray'}>
                    Solicitado por: {request.adoptable.name} {request.adoptable.lastName}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <span className={`px-4 py-2 rounded-full text-small font-semibold transition-all duration-300 ${request.status === 0 ? 'bg-yellow-100 text-yellow-700' : request.status === 1 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {request.status === 0 ? 'Pendiente' : request.status === 1 ? 'Aprobada' : 'Rechazada'}
                  </span>
                  <Image
                    alt="expandir"
                    width={24}
                    height={24}
                    src="/assets/icons/arrow_down.svg"
                    className="transition-transform duration-300 transform md:relative absolute top-1/3 right-4"
                    style={{ transform: expandedRequest === request.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
              </div>
              {expandedRequest === request.id && (
                <div className="p-6 border-t border-secondary-light text-white">
                  <div className="flex justify-evenly flex-wrap gap-y-4">
                    <div className="">
                      <Image
                        src={request.photoUrl}
                        alt={request.name}
                        width={185}
                        height={185}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div className="space-y-3 mb-6">
                        <p className="text-body"><strong>Fecha de publicación:</strong> {new Date(request.datePublished).toLocaleString()}</p>
                        <p className="text-small text-gray-400">Solicitado el: {new Date(request.requestDate).toLocaleString()}</p>

                        <ChatAndCallIcon width="w-5/12 ml-auto" />
                      </div>

                      {request.status === 0 && (
                        <div className="flex justify-end space-x-3">
                          <button
                            onClick={() => {
                              handleStatusChange(request.id, 'aprobada')
                            }}
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
                  </div>

                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-primary">
            <p className="h-full text-body bg-black/5 px-3 py-8 rounded-xl font-semibold">
              {isLoading.message}
            </p>
          </div>
        )}
      </div>
    </div >
  );
}
