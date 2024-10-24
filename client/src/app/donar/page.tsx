import Image from 'next/image'
import CustomButton from '@/components/shared/form/CustomButton'
import CustomInput from '@/components/shared/form/CustomInput'

const donationImpact = [
  { amount: "25$", impact: "alimenta a un animal rescatado durante un mes" },
  { amount: "50$", impact: "proporciona vacunas para cinco animales" },
  { amount: "100$", impact: "cubre la cirugía de esterilización para un animal" },
  { amount: "250$", impact: "financia atención médica de emergencia" },
]

export default function Donar() {

  return (
    <div className="bg-white text-foreground p-5">
        <h1 className="text-title font-bold text-primary mb-8 text-center">Dona para Apoyar Nuestra Causa</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Image
              src="https://img.freepik.com/foto-gratis/imagen-perro-labrador-retriever-generada-ai_23-2150644716.jpg?t=st=1729735693~exp=1729739293~hmac=bda580ec1046c7b59d555321242ebfeec91fcf1c4460dd7600102946c69768d7&w=740"
              alt="Animales rescatados felices"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-title-secondary font-bold text-secondary">Tu Donación Marca la Diferencia</h2>
            <p className="text-body">
              Cada donación, grande o pequeña, nos ayuda a continuar nuestra misión de rescatar y
              reubicar animales necesitados. Tu apoyo proporciona alimento, refugio, atención médica
              y amor a innumerables animales que esperan sus hogares para siempre.
            </p>
            <div className="bg-custom-gradient-2 text-white">
              <div className="p-6">
                <h3 className="text-subtitle font-bold mb-2">Cómo Ayuda tu Donación</h3>
                <ul className="list-disc list-inside space-y-2">
                  {donationImpact.map((item, index) => (
                    <li key={index}>{item.amount} {item.impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white-100">
          <div className="p-8">
            <h2 className="text-title-secondary font-bold mb-6 text-center">Haz una Donación</h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray mb-2">Cantidad de Donación</label>
                <div className="flex space-x-4">
                  {['25$', '50$', '100$', '250$'].map((amount) => (
                    <CustomButton
                      key={amount} type="button"
                      className="flex-1"
                      text={amount}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray mb-2">Cantidad Personalizada</label>
                <CustomInput type="number" id="custom-amount" name="custom-amount" placeholder="Ingresa la cantidad" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray mb-2">Nombre</label>
                <CustomInput type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">Correo Electrónico</label>
                <CustomInput type="email" id="email" name="email" />
              </div>

              <CustomButton type="submit" className="w-full bg-primary text-white font-bold hover:bg-primary-light transition duration-300" text="Donar Ahora" />

            </form>

          </div>
        </div>
    </div>
  )
}