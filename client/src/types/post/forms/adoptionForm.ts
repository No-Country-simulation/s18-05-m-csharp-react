
type AdoptionForm = {
  name: string,
  location: string,
  notes: string,
  photoUrl: FileList,
  gender: 0 | 1 | 2,
  animalType: 0 | 1 | 2 | 3 | 4 | 5,
  size: 0 | 1 | 2,
  isNeutered: boolean,
  hasVaccines: boolean,
  isSterilized: boolean,
  isAdopted?: boolean,
  age: string,
  healthIssues: string
}