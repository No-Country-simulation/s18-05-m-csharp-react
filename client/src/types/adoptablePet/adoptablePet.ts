type AdoptablePet = {
  id: number,
  name: string,
  photoUrl: string,
  datePublished: Date,
  dateBirth: Date,
  isAdopted: boolean
}

type ResponseAdoptablePet = {
  data: AdoptablePet[] | null,
  success: boolean,
  message?: string,
}