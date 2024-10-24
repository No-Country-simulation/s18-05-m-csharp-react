"use client"
import { useState } from "react"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../CustomForm"


export default function FoundPetForm() {
  const [size, setSize] = useState<"Grande" | "Mediano" | "Chico" | null>(null)


  return (
    <div className="max-w-xl mx-auto p-6">
      <CustomForm >
        {/* AL DARLE AL BOTON DE SIGUIENTE, ESTE SERÁ EL PROXIMO PASO A COMPLETAR */}
        <div className="col-span-2">
          <CustomTextArea
            placeholder={"¿Qué información extra desea agregar? Ej. Encontré este perrito en la plaza, parece ser un golden, tiene collar rojo, etc."}
            label="Notas"
          />
        </div>

      </CustomForm>

    </div >
  )
}