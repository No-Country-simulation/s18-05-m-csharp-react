import CustomTextArea from '@/components/shared/form/CustomTextarea'
import CustomButton from '@/components/shared/form/CustomButton'
import CustomInput from '@/components/shared/form/CustomInput'

export default function Contactanos() {
  return (
    <div className="tracking-wide text-foreground p-5">
      <h1 className="text-primary mb-10 text-center">Contáctanos</h1>

      <div className="grid md:grid-cols-2 gap-12 my-5">
        <div className="bg-custom-gradient text-white">
          <div className="p-10">
            <h2 className="mb-6">Ponte en Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                {/* <Mail className="w-6 h-6 mr-4" /> */}
                <span className="text-body">info@adopet.com</span>
              </div>
              <div className="flex items-center">
                {/* <Phone className="w-6 h-6 mr-4" /> */}
                <span className="text-body">+54 911 123 456</span>
              </div>
              <div className="flex items-center">
                {/* <MapPin className="w-6 h-6 mr-4" /> */}
                <span className="text-body">Calle Rescate 123, Ciudad Mascota, 28001</span>
              </div>
            </div>
          </div>
        </div>


        <div className="px-4 max-w-lg mx-auto">
          <form className="space-y-5">
            <CustomInput type="text" id="name" name="name" topLabel="Nombre" extraClass="rounded-xl" placeholder="Raulito Perez" />
            <CustomInput type="email" id="email" name="email" topLabel="Correo Electrónico" extraClass="rounded-xl" placeholder="correo@electronico.com" />

            <CustomTextArea id="message" name="message" rows={4} label="Mensaje" placeholder="Me gusta mucho lo que hacen, quiero saber más..." />

            <CustomButton extraClass="h-10 w-full" text={"Enviar"} />
          </form>
        </div>

      </div >
    </div >
  )
}