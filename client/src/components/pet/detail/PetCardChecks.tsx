import CustomCheckbox from "@/components/shared/form/CustomCheckbox"
import { FC } from "react"


const PetCardChecks: FC<DetailAdoptablePetCheck> = (props) => {
  const { hasVaccines, isNeutered, isSterilized } = props

  return (
    <div className="flex justify-between my-2">
      <CustomCheckbox label="Vacunas al día" checked={hasVaccines} />
      <CustomCheckbox label="Castrado" checked={isNeutered} />
      <CustomCheckbox label="Esterilizado" checked={isSterilized} />
    </div>
  )
}

export default PetCardChecks