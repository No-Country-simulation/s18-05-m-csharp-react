"use client"
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import CardMenu from './CardMenu'
import menuItems from './menuItems'

export default function ModalPost() {
  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto bg-black/50">
          <div className="flex min-h-full items-center justify-center md:px-4 px-2">
            <DialogPanel
              transition
              className="w-full max-w-md md:max-w-xl rounded-2xl bg-custom-gradient overflow-y-auto md:h-[95vh] h-[85vh]  duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="relative">
                <button className={"absolute font-semibold top-2 right-2 text-white hover:bg-red-400 transition rounded-xl px-4 py-2"} onClick={close} >
                  Cerrar
                </button>
              </div>
              <DialogTitle as="h2" className="text-white pt-3 px-6">
                Publicar
              </DialogTitle>
              <h4 className="my-1 font-semibold text-body text-center text-white px-6">
                ¿Qué quieres publicar hoy?
              </h4>

              <div className="flex py-2 md:px-6 px-3 flex-col justify-center items-center gap-3">
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
    </>
  )
}
