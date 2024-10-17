type AdoptablePet = {
  id: number,
  name: string,
  photoUrl: string,
  datePublished: string,
  dateBirth: string,
  isAdopted: boolean
}

type ResponseAdoptablePet = {
  data: AdoptablePet[] | null,
  success: boolean,
  message?: string,
}