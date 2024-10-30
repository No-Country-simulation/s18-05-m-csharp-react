type ResAdoptionRequest = {
  data: { adoptablePetId: number } | null,
  success: boolean,
  message?: string,
  validationErrors?: null
}

type ResGetAdoptionRequest = Omit<ResAdoptionRequest, "data"> & {
  data: AdoptionEntity[] | null
}



interface AdoptionEntity {
  id: number;
  name: string;
  gender: number;
  photoUrl: string;
  datePublished: Date;
  age: string;
  isAdopted: boolean;
  adoptable: {
    id: string;
    name: string;
    lastName: string;
    photoUrl: string | null;
  };
  owner: {
    id: string;
    name: string;
    lastName: string;
    photoUrl: string | null;
  };
  status: number;
  requestDate: Date;
}
