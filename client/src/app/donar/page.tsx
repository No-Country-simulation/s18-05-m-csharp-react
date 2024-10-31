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
    <div className="text-foreground p-5 tracking-wide">
      <h1 className="text-primary mb-8 text-center">Dona para Apoyar Nuestra Causa</h1>

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
              <label htmlFor={"amount"}
                className="text-dark-gray text-subtitle mb-2">
                Cantidad de Donación
                <div className="flex space-x-4">
                  {['25 $', '50 $', '100 $', '250 $'].map((amount) => (
                    <CustomButton
                      key={amount} type="button"
                      extraClass="flex-1 h-11"
                      text={amount}
                    />
                  ))}
                </div>
              </label>
            </div>
            <div>
              <CustomInput topLabel="Cantidad Personalizada" placeholder="777" type="number" id="custom-amount" name="custom-amount" />
            </div>

            <CustomInput topLabel="Nombre Completo" placeholder="Cosme Fulanito" type="text" id="name" name="name" />

            <CustomInput topLabel="Correo Electrónico" placeholder="ejemplo@correo.com" type="email" id="email" name="email" />

            <CustomButton type="submit" extraClass="w-full h-12" text="Donar Ahora" disabled title="La funcionalidad no se encuentra activada"/>

          </form>

        </div>
      </div>
    </div>
  )
}