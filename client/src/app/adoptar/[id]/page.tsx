import { FC } from "react"

const page: FC<{ params: { id: string } }> = ({ params: { id } }) => {
  return (
    <div>page</div>
  )
}

export default page