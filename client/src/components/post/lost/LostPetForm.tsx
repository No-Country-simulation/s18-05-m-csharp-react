"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../CustomForm"


export default function LostPetForm() {
  const [size, setSize] = useState<"Grande" | "Mediano" | "Chico" | null>(null)


  return (
    <div className="max-w-xl mx-auto p-6">
      <CustomForm hasNameAndAge hasMoreSteps>
        {/* AL DARLE AL BOTON DE SIGUIENTE, ESTE SERÁ EL PROXIMO PASO A COMPLETAR */}
        <div className="space-y-5">
          <SizeSelection onSizeChange={setSize} />

          <CustomTextArea
            placeholder={"¿Dónde se perdió? ¿Tiene collar? ¿Tiene alguna característica en especial que permita reconocerlo facilmente?"}
            label="Información extra"
          />

          <CustomTextArea
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>
      </CustomForm>

    </div >
  )
}