"use client"
import { useState } from "react"
import SizeSelection from "../form/select/SizeSelection"
import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import CustomTextArea from "@/components/shared/form/CustomTextarea"
import CustomForm from "../CustomForm"


export default function AnimalAdoptionForm() {
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

          <div className="flex justify-evenly">
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
      {/* <form onSubmit={handleSubmit} className="">
        <ImageUpload onImageUpload={setImage} />

        <div className="sm:grid sm:grid-cols-2 sm:gap-3 flex flex-col gap-4">
          <CustomInput
            extraClass="rounded-xl"
            topLabel={"Nombre"}
            placeholder={"Pepito"}
          />

          <CustomInput
            extraClass=" rounded-xl"
            topLabel={"Edad"}
            placeholder={"2 años (o edad estimada)"}
          />

          <ListBoxType />

          <SexSelection onSexChange={setSex} />

          <div className="col-span-2">
            <LocationInput onLocationChange={setLocation} />
          </div>

        </div>

        <hr className="my-6" />

        <div className="my-5 space-y-5">
          <SizeSelection onSizeChange={setSize} />

          <CustomTextArea
            placeholder={"¿Qué información extra desea agregar?"}
            label="Notas"
          />

          <div className="flex justify-evenly">
            {["Esterilizado", "Vacunas al día", "Castrado"].map(item => (
              <CustomCheckbox label={item} key={item} />
            ))}
          </div>

          <CustomTextArea
            placeholder={"¿Tiene alguna enfermedad relevante? ¿Toma alguna medicación?"}
            label="Enfermedades"
          />

        </div>

        <hr className="my-6" />

        <CustomButton
          text="siguiente"
          extraClass="uppercase h-[48px] w-full my-12 hover:ring-primary hover:ring-1 hover:ring-offset-2 focus:outline-none "
          disabled={true}
        />

      </form > */}
    </div >
  )
}