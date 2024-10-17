type DetailAdoptablePet = AdoptablePet & {
  gender: number;
  location: string;
  animalType: number;
  notes: string;
  neutered: boolean;
  vaccines: boolean;
  sterilized: boolean;
  size: number;
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