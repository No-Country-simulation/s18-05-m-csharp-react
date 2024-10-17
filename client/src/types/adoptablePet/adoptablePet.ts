type AdoptablePet = {
  id: number,
  name: string,
  photoUrl: string,
  datePublished: string,
  dateBirth: string,
  isAdopted: boolean
}

type UpdateAdoptablePet = Partial<DetailAdoptablePet> & { id: number }
type createAdoptablePEt = Omit<DetailAdoptablePet, "owner">

type ResponseAdoptablePet = {
  data: AdoptablePet[] | null,
  success: boolean,
  message?: string,
}