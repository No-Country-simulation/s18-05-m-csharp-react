import PetsList from "@/components/pet/PetsList"

export const fakeDataLostPets = [
  {
    "id": 3,
    "name": "Doly",
    "photoUrl": "",
    "datePublished": "2024-10-19T16:15:30.47",
    "dateBirth": "2022-08-05T00:00:00",
    "isAdopted": false
  },
  {
    "id": 4,
    "name": "Aang",
    "photoUrl": "",
    "datePublished": "2024-10-20T08:20:11.63",
    "dateBirth": "2021-12-17T00:00:00",
    "isAdopted": true
  },
  {
    "id": 6,
    "name": "Frida",
    "photoUrl": "",
    "datePublished": "2024-10-21T17:31:27.19",
    "dateBirth": "2023-06-28T00:00:00",
    "isAdopted": false
  },
  {
    "id": 9,
    "name": "Merishein",
    "photoUrl": "",
    "datePublished": "2024-10-23T09:45:31.13",
    "dateBirth": "2021-04-29T00:00:00",
    "isAdopted": false
  },
  {
    "id": 10,
    "name": "Marco",
    "photoUrl": "",
    "datePublished": "2024-10-23T16:50:29.41",
    "dateBirth": "2020-08-12T00:00:00",
    "isAdopted": true
  }
]


const page = () => {
  return (
    <div>
      <div className="py-10 px-5">
        <h1 className="text-primary">Mascotas Perdidas</h1>
        <p className="text-dark-gray text-body px-2">
          ¡Ayúdanos a encontrar a nuestras mascotas perdidas!
        </p>
        <p className="text-gray text-small px-2">
          Si has visto a alguna de estas mascotas, por favor, comunícate con nosotros. Juntos podemos reunirlas con sus familias.
        </p>
      </div>

      <div className="container px-3 pt-5 mx-auto mb-6 min-h-[50vh]">
        <PetsList fakeData={fakeDataLostPets} chatIcon />
      </div>
    </div>
  )
}

export default page