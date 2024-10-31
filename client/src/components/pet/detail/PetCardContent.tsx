import { FC } from "react"

type Props = {
  posted: string,
  genre: string,
  birthDate: string,
  notes: string,
  isForAdoptablePet?: boolean,
  size: string,
  healthIssues?: string
}

const PetCardContent: FC<Props> = (props) => {
  const { posted, genre, birthDate, notes, isForAdoptablePet, size, healthIssues } = props

  return (
    <div className="mt-6 mb-8 space-y-2 tracking-wide">
      <p className="text-dark-gray text-body">
        <span className="font-semibold mr-2">Publicado:</span>
        {posted}
      </p>

      <p className="text-dark-gray text-body">
        <span className="font-semibold mr-2">Género:</span>
        {genre}
      </p>

      <p className="text-dark-gray text-body">
        <span className="font-semibold mr-2">Edad:</span>
        {birthDate}
      </p>

      {
        isForAdoptablePet &&
        <p className="text-dark-gray text-body">
          <span className="font-semibold mr-2">Tamaño:</span>
          {size}
        </p>
      }

      <p className="text-dark-gray text-body">
        <span className="font-semibold mr-2">Notas:</span>
        {notes}
      </p>

      {
        healthIssues &&
        <p className="text-dark-gray text-body">
          <span className="font-semibold mr-2">Enfermedades:</span>
          {healthIssues}
        </p>
      }
    </div>
  )
}

export default PetCardContent