import { FC } from "react"

type Props = {
  posted: string,
  genre: string,
  birthDate: string,
  notes: string
}

const PetCardContent: FC<Props> = (props) => {
  const { posted, genre, birthDate, notes } = props

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

      <p className="text-dark-gray text-body">
        <span className="font-semibold mr-2">Notas:</span>
        {notes}
      </p>
    </div>
  )
}

export default PetCardContent