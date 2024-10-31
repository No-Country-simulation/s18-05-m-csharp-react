import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '@/components/shared/form/CustomButton'
import LinkUnderline from '@/components/shared/LinkUnderline'

export default function Ayudanos() {
  const helpOptions = [
    { title: "Voluntariado", description: "Únete a nuestro equipo de voluntarios dedicados y ayúdanos a cuidar de los animales necesitados. Desde pasear perros hasta socializar gatos, cada momento cuenta.", image: "https://img.freepik.com/foto-gratis/vista-lateral-mujer-sonriente-abrazando-perro_23-2149930290.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid", link: "#" },
    { title: "Hogar de Acogida", description: "Proporciona un hogar temporal para animales que esperan ser adoptados. Acoger salva vidas y ayuda a los animales a prepararse para sus hogares definitivos.", image: "https://img.freepik.com/foto-gratis/mujer-vista-frontal-perro-envuelto-manta_23-2148728065.jpg?ga=GA1.1.518896649.1729735689&semt=ais_hybrid", link: "#" },
    { title: "Donar", description: "Tu apoyo financiero nos ayuda a proporcionar atención médica, alimentos y refugio a los animales necesitados. Cada donación marca la diferencia.", image: "https://img.freepik.com/foto-gratis/vista-gatos-perros-mostrando-amistad_23-2151806288.jpg?t=st=1729736091~exp=1729739691~hmac=0057f41c44bfc869495f3598c8946f33d2a36d9ef48985f17e6cd0457551b08e&w=996", link: "#" },
  ]

  return (
    <div className="bg-white text-foreground tracking-wide">
      <h1 className="text-primary text-center p-5">Ayúdanos a Marcar la Diferencia</h1>

      <div className="grid md:grid-cols-3 gap-8 p-5 items-center">
        {helpOptions.map((option, index) => (
          <div key={index} className="bg-white-100">
            <div className="p-5 text-center shadow-lg rounded-lg border-2 border-primary-light-500">
              <Image
                src={option.image}
                alt={option.title}
                width={200}
                height={200}
                className="mx-auto mb-4 rounded-full"
              />
              <h2 className="text-title-secondary font-bold mb-4 text-secondary">{option.title}</h2>
              <p className="text-body mb-4">{option.description}</p>
              <LinkUnderline href={option.link} >
                Más Información
              </LinkUnderline>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-custom-gradient-3 text-white mt-8 mb-[-42px] pb-[22px]">
        <div className="py-16 px-8 text-center">
          <h2 className="mb-4">Juntos, Podemos Salvar Vidas</h2>
          <p className="text-body max-w-2xl  mx-auto mb-6">
            Ya sea que te ofrezcas como voluntario, acojas o dones, tu apoyo es crucial en nuestra
            misión de rescatar y reubicar a los animales necesitados. Únete a nosotros para marcar
            la diferencia hoy.
          </p>
          <CustomButton type="submit" extraClass="h-12" text="Involúcrate" />
        </div>
      </div>
    </div>
  )
}