import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center animate-pulse items-center h-[60vh] rounded-2xl flex-col gap-y-12" >
      <div className="w-16 h-16 border-4 border-primary-light rounded-full animate-spin border-t-primary">
      </div>

      <div className="rounded-2xl bg-custom-gradient py-2 px-16 text-white text-center font-semibold">
        Cargando...
      </div>
    </div >
  )
}

export default Loading