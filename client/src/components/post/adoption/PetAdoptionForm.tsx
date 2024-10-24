"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../CustomForm"


export default function PetAdoptionForm() {
  const [size, setSize] = useState<"Grande" | "Mediano" | "Chico" | null>(null)


  return (
    <div className="max-w-xl mx-auto p-6">
      <CustomForm hasNameAndAge hasMoreSteps>
        {/* AL DARLE AL BOTON DE SIGUIENTE, ESTE SERÁ EL PROXIMO PASO A COMPLETAR */}
        <div className="space-y-5">
          <SizeSelection onSizeChange={setSize} />

          <CustomTextArea
            placeholder={"¿Qué información extra desea agregar?"}
            label="Notas"
          />

          <div className="flex md:justify-evenly justify-between md:flex-nowrap flex-wrap gap-y-2">
            {["Esterilizado", "Vacunas al día", "Castrado"].map(item => (
              <CustomCheckbox label={item} key={item} />
            ))}
          </div>

          <CustomTextArea
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>
      </CustomForm>

    </div >
  )
}