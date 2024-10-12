import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'

interface Props {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const SuccesModal: FC<Props> = ({ setOpenModal }) => {
  return (
    <div className="fixed bg-white rounded-2xl w-[360px] h-[260px] top-1/2 left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 shadow-2xl
    flex flex-col items-center gap-[25px] justify-evenly px-3 py-[61.69px]"
    >
      <Image
        width={50}
        height={50}
        src="/assets/icons/success.svg"
        alt="success-icon"
      />
      <p className="text-dark-gray font-semibold text-body text-center mt-auto">
        Tu cuenta ha sido creada con éxito
      </p>

      <div className="flex justify-evenly w-full text-small">
        <Link href={"/iniciar-sesion"} className="font-bold uppercase text-primary  px-4 py-2 border-2 rounded-xl border-transparent hover:border-primary transition-all ease duration-200">
          Iniciar sesión
        </Link>

        <button
          type="button"
          className="font-bold uppercase px-4 py-2 border-2 rounded-xl border-transparent hover:border-red-500 hover:text-red-500 transition-all ease duration-200"
          onClick={() => setOpenModal(false)}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default SuccesModal