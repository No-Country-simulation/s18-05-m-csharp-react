import CustomTextArea from '@/components/shared/form/CustomTextarea'
import CustomButton from '@/components/shared/form/CustomButton'
import CustomInput from '@/components/shared/form/CustomInput'

export default function Contactanos() {
  return (
    <div className="bg-white text-foreground p-5">
      <h1 className="text-title font-bold text-primary mb-8 text-center">Contáctanos</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-custom-gradient text-white">
          <div className="p-8">
            <h2 className="text-title-secondary font-bold mb-6">Ponte en Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                {/* <Mail className="w-6 h-6 mr-4" /> */}
                <span className="text-body">info@adopet.com</span>
              </div>
              <div className="flex items-center">
                {/* <Phone className="w-6 h-6 mr-4" /> */}
                <span className="text-body">+34 555 123 456</span>
              </div>
              <div className="flex items-center">
                {/* <MapPin className="w-6 h-6 mr-4" /> */}
                <span className="text-body">Calle Rescate 123, Ciudad Mascota, 28001</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray mb-2">Nombre</label>
                <CustomInput type="text" id="name" name="name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray mb-2">Correo Electrónico</label>
                <CustomInput type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray mb-2">Mensaje</label>
                <CustomTextArea id="message" name="message" rows={4} />
              </div>

              <CustomButton type="submit" className="w-full bg-primary text-white font-bold hover:bg-primary-light transition duration-300" text={"Enviar Mensaje"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}