
type DetailAdoptablePetCheck = {
  isNeutered: boolean;
  hasVaccines: boolean;
  isSterilized: boolean;
}

type DetailAdoptablePet = AdoptablePet & DetailAdoptablePetCheck & {
  gender: 0 | 1 | 2;
  location: string;
  animalType: number;
  notes: string;
  size: 0 | 1 | 2;
  userId: number;
  healthIssues: string;
  owner: {
    name: string;
    lastName: string;
    photoUrl: string | null;
  };
}

type ResponseDetailAdoptablePet = {
  data: DetailAdoptablePet | null,
  success: boolean,
  message?: string,
  validationErrors?: string[] | string | null
}