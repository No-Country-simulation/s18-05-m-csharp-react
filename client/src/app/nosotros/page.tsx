import Image from "next/image"

export default function SobreNosotros() {
  const impactData = [
    { number: "10,000+", text: "Animales adoptados" },
    { number: "5,000+", text: "Mascotas reunidas" },
    { number: "1,000+", text: "Voluntarios activos" },
    { number: "100+", text: "Eventos anuales" },
  ]

  return (
    <div className="tracking-wide text-foreground p-5">
      <h1 className="text-primary mb-8 text-center">Sobre Nosotros</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-secondary leading-none">Nuestra Misión</h2>
          <p className="text-body pl-3 leading-relaxed">
            En <span className="font-semibold text-secondary">AdoPet</span>, nos dedicamos a proporcionar hogares amorosos para todos los animales necesitados.
            Nuestro apasionado equipo trabaja incansablemente para rescatar, rehabilitar y reubicar mascotas,
            asegurando que reciban el cuidado y el afecto que merecen.
          </p>

          <h2 className="text-secondary leading-none">Nuestro Impacto</h2>
          <p className="text-body pl-3 leading-relaxed">
            Desde nuestra fundación en 2010, hemos logrado reubicar con éxito a más de 10,000 animales y reunir
            a innumerables mascotas perdidas con sus familias. Nuestra red de voluntarios y hogares de acogida
            nos permite brindar atención personalizada a cada animal en nuestro programa.
          </p>
        </div>

        <div className="space-y-6">
          <div className="">
            <Image
              alt="image_1"
              src={"https://img.freepik.com/foto-gratis/vista-perro-traje-gracioso_23-2151098370.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid"}
              width={350}
              height={180}
              className="mx-auto object-contain rounded-lg"
            />
          </div>

          <div className="">
            <Image
              alt="image_1"
              src={"https://img.freepik.com/foto-gratis/imagen-perro-labrador-retriever-generada-ai_23-2150644848.jpg?t=st=1729737526~exp=1729741126~hmac=de862dc53ba653bfa62fac5c16454733d6b2fd0a3dbca542f2a5c109a3cd167c&w=996"}
              width={350}
              height={180}
              className="mx-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {impactData.map((item, index) => (
          <div key={index} className="bg-custom-gradient text-white">
            <div className="p-6 text-center">
              <p className="text-4xl font-bold mb-2">{item.number}</p>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-custom-gradient-2 rounded-lg p-8 py-14 text-white">
        <h2 className="text-title-secondary font-bold mb-4 text-center">Únete a Nuestra Causa</h2>
        <p className="text-body text-center max-w-2xl mx-auto">
          Ya sea que estés buscando adoptar, ser voluntario o donar, hay muchas formas de apoyar
          nuestra misión. Juntos, podemos crear un mundo donde cada animal tenga un hogar amoroso.
        </p>
      </div>
    </div>
  )
}