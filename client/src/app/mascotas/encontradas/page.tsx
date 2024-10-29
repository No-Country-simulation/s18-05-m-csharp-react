import PetsList from "@/components/pet/PetsList"

export const fakeDataFoundsPets = [
  {
    "id": 1,
    "name": "Luna",
    "photoUrl": "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    "datePublished": "2024-10-18T09:30:12.93",
    "dateBirth": "2021-02-10T00:00:00",
    "isAdopted": false,
    "notes": "Encontrada cerca del parque, llevaba una bufanda roja y parecía estar muy asustada."
  },
  {
    "id": 2,
    "name": "Rocky",
    "photoUrl": "https://img.freepik.com/foto-gratis/perro-lindo-durmiendo-generado_23-2150651518.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid",
    "datePublished": "2024-10-18T14:45:50.01",
    "dateBirth": "2023-01-21T00:00:00",
    "isAdopted": true,
    "notes": "Lo encontramos en la estación de tren; tiene una cicatriz pequeña en la pata derecha."
  },
  {
    "id": 3,
    "name": "Lobo",
    "photoUrl": "https://img.freepik.com/foto-gratis/retrato-gato-hermoso-cerca_23-2149214422.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid",
    "datePublished": "2024-10-19T16:15:30.47",
    "dateBirth": "2022-08-05T00:00:00",
    "isAdopted": false,
    "notes": "Es muy jugueton, lo encontramos junto a un parque infantil."
  },
  {
    "id": 4,
    "name": "Coco",
    "photoUrl": "https://img.freepik.com/foto-gratis/nina-bonita-esta-jugando-conejo-mascota-concepto-mascotas_169016-60231.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid",
    "datePublished": "2024-10-20T08:20:11.63",
    "dateBirth": "2021-12-17T00:00:00",
    "isAdopted": true,
    "notes": "Parece estar bien cuidado; tiene un collar con el nombre 'Coco'."
  },
  {
    "id": 7,
    "name": "Milo",
    "photoUrl": "https://img.freepik.com/foto-gratis/disparo-vertical-lindo-gato-gris-mirando-arriba_181624-57613.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid",
    "datePublished": "2024-10-21T10:15:30.78",
    "dateBirth": "2020-03-11T00:00:00",
    "isAdopted": true,
    "notes": "Llevaba un suéter amarillo y tiene una pequeña campana en el collar."
  }
]


const page = () => {
  return (
    <div>
      <div className="px-5 py-10">
        <h1 className="text-primary">Mascotas Encontradas</h1>
        <p className="text-dark-gray text-body px-2">
          ¡Ayúdanos a encontrar a sus dueños!
        </p>
        <p className="text-gray text-small px-2">
          Estas mascotas han sido encontradas y están esperando ser reunidas con sus familias. Si reconoces a alguna de ellas, por favor, comunícate con nosotros.
        </p>
      </div>

      <div className="container md:px-3 px-0 pt-5 mx-auto mb-6 min-h-[50vh]">
        <PetsList fakeData={fakeDataFoundsPets} chatIcon />
      </div>
    </div>
  )
}

export default page