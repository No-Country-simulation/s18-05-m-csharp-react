import FormProfile from '@/components/my-profile/FormProfile'
import Image from 'next/image'

const images = [
  "https://img.freepik.com/foto-gratis/perro-pequeno-siendo-adorable-estudio_23-2149016884.jpg?t=st=1730039762~exp=1730043362~hmac=e56d7e449a19a225d711028451d3434756962329e6af8a44b085bfa3d9d62da6&w=120",
  "https://img.freepik.com/foto-gratis/adorable-gatito-britanico-pelo-corto-pared-monocromatica-detras-ella_23-2148955097.jpg?t=st=1730039830~exp=1730043430~hmac=922c1a989fd5d63810b1494943aa30aaeccf169950e4af292fc42764bfc1c56b&w=120",
  "https://img.freepik.com/foto-gratis/perro-feliz-divirtiendose-parque_23-2147997352.jpg?t=st=1730039753~exp=1730043353~hmac=2878f77c366df8290f3710794922bfb60a12be33db42e9c6d1f394816964d656&w=120",
  "https://img.freepik.com/foto-gratis/lindo-gato-sentado-silla_23-2148882589.jpg?t=st=1730039778~exp=1730043378~hmac=67ecc70164fcce19370f1094ce5ab906bbcdc28baece4788155b7187310ac2ad&w=120",
  "https://img.freepik.com/foto-gratis/retrato-lindo-conejo-gris-esponjoso-orejas-verde-natural_78492-3801.jpg?t=st=1730039818~exp=1730043418~hmac=34c16c2dd8e2f94a65a2d42b52a3c98ae165f71a893e64e27c058c2377d16061&w=120",

]

export default function page() {

  return (
    <div className="max-w-4xl my-3 mx-auto p-8 pt-5 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-2xl">
      <div className="flex items-center align-middle justify-evenly mb-2 flex-wrap-reverse">
        <h1 className="text-4xl font-bold text-center text-primary">Mi Perfil de Amante de Animales</h1>
        <Image
          src={"https://img.freepik.com/foto-gratis/lindo-perrito-haciendose-pasar-persona-negocios_23-2148985938.jpg?t=st=1730041157~exp=1730044757~hmac=3603f5e76f094c2876be1937a255ebc1a914f4b15e4c144fd99eb7a3dd2c7682&w=280"}
          alt="Pet Profile"
          width={200}
          height={136.25}
          className="rounded-full object-contain border-4 border-primary shadow-lg"
        />
      </div>
      <FormProfile />
      <div className="mt-12 flex flex-wrap justify-center space-x-5">
        {images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={`Animal-${i}`}
            width={100}
            height={100}
            className="md:w-28 w-20 md:h-28 h-20 object-cover rounded-full shadow-lg transition transform hover:scale-110 duration-300"
          />
        ))}
      </div>
    </div>
  )
}