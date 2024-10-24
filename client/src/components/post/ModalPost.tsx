"use client"
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import CardMenu from './CardMenu'
import menuItems from './menuItems'
import useModal from '@/hooks/useModal'
import useUser from '@/hooks/useUser'

export default function ModalPost() {
  const { isOpen, closeModal } = useModal()
  const { isLogged } = useUser()

  if (!isLogged) return null;

  return (
    <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={closeModal} >
      <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto bg-black/50">
        <div className="flex min-h-full items-center align-middle justify-center px-4">
          <DialogPanel
            transition
            className="w-full max-w-md md:max-w-xl rounded-2xl bg-custom-gradient overflow-y-auto md:max-h-[95vh] max-h-[80vh] duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 px-3 pt-2 pb-6"
          >
            <div className="relative">
              <button className={"absolute font-semibold top-2 right-2 text-white hover:bg-red-400 transition rounded-xl px-4 py-2"} onClick={closeModal} >
                Cerrar
              </button>
            </div>
            <DialogTitle as="h2" className="text-white pt-3 px-6">
              Publicar
            </DialogTitle>
            <h4 className="my-1 font-semibold text-body text-center text-white px-6">
              ¿Qué quieres publicar hoy?
            </h4>

            <div className="flex pt-2 md:px-6 px-1.5 flex-col justify-center items-center gap-4">
              {menuItems.map((item) => (
                <CardMenu
                  icon={item.icon}
                  text={item.text}
                  label={item.label}
                  alt={item.alt}
                  href={item.href}
                  key={item.text}
                />
              ))}
            </div>

          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
