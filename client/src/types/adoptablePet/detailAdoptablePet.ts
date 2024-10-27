type DetailAdoptablePet = AdoptablePet & {
  gender: 0 | 1 | 2;
  location: string;
  animalType: number;
  notes: string;
  neutered: boolean;
  vaccines: boolean;
  sterilized: boolean;
  size: 0 | 1 | 2;
  userId: number;
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