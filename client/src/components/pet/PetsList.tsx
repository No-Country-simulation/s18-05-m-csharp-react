"use client"
import { getAdoptablePet } from '@/data/adoptablePet/get'
import { useEffect, useState } from 'react'
import PetCard from './PetCard'
import Loading from '../shared/Loading'

const PetsList = ({ isNotClickable = false, showLoad = true, fakeData = false, chatIcon = false }: { isNotClickable?: boolean, showLoad?: boolean, fakeData?: Array<any> | false, chatIcon?: boolean }) => {
  const [isLoading, setIsLoading] = useState<boolean>(showLoad)
  const [data, setData] = useState<Array<any>>([])

  useEffect(() => {
    if (fakeData) {
      setIsLoading(false)
      setData(fakeData)
      return
    }
    getAdoptablePet()
      .then((data) => {
        setIsLoading(false)
        if (data.success) setData(data.data || [])
      })
  }, [])

  if (isLoading) return <Loading />

  return (
    <div className="flex flex-wrap gap-4 justify-evenly">
      {data.map((pet) => (
        <PetCard pet={pet} chatIcon={chatIcon} key={`${pet.id}-mascota`} isNotClickable={isNotClickable} />
      ))
      }
    </div>
  )
}

export default PetsList