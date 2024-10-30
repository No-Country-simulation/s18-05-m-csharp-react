"use client"
import { getAdoptablePet } from '@/data/adoptablePet/get'
import { FC, useEffect, useState } from 'react'
import PetCard from './PetCard'
import Loading from '../shared/Loading'

type PropsPetsList = {
  isNotClickable?: boolean,
  showLoad?: boolean,
  fakeData?: Array<any> | false,
  chatIcon?: boolean
  isForAdoptablePet?: boolean
}

const PetsList: FC<PropsPetsList> = (props) => {
  const { isForAdoptablePet, isNotClickable = false, showLoad = true, fakeData = false, chatIcon = false } = props
  const [isLoading, setIsLoading] = useState<boolean>(showLoad)
  const [data, setData] = useState<Array<any>>([])

  useEffect(() => {
    if (fakeData) {
      setIsLoading(false)
      setData(fakeData)
      return
    }
    if (isForAdoptablePet) {
      getAdoptablePet()
        .then((data) => {
          setIsLoading(false)
          if (data.success) setData(data.data || [])
        })
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <div className="flex justify-start">
      <div className="flex flex-wrap gap-5 justify-evenly">
        {data.map((pet) => (
          <PetCard pet={pet} chatIcon={chatIcon} key={`${pet.id}-mascota`} isNotClickable={isNotClickable} />
        ))
        }
      </div>
    </div>
  )
}

export default PetsList