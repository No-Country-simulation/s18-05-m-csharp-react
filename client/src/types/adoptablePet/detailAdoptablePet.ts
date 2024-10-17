interface DetailAdoptablePet {
  name: string;
  gender: number;
  photoUrl: string;
  location: string;
  animalType: number;
  notes: string;
  datePublished: string;
  dateBirth: string;
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
  isAdopted: boolean;
}

type ResponseDetailAdoptablePet = {
  data: DetailAdoptablePet | null,
  success: boolean,
  message?: string,
  validationErrors?: string[] | string | null
}