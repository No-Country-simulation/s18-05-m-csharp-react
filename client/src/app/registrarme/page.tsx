import ImageWithContent from "@/components/shared/ImageWithContent"
import littleCat from "@/../public/assets/images/little-cat.png"
import LinkUnderline from "@/components/shared/LinkUnderline"
import Register from "@/components/register/Register"

const page = () => {
  return (
    <ImageWithContent src={littleCat} alt="litte-cat">
      <div>
        <div className="w-10/12 mb-[40px] mx-auto">
          <h1 className="text-primary uppercase">¡Hola!</h1>
          <p className="text-dark-gray font-semibold text-body">Ingresa tus datos personales</p>
        </div>
      </div>

      <Register>
        <div className="text-center text-small">
          <p className="mt-2">
            ¿Ya tienes cuenta?{' '}
            <LinkUnderline href={"/iniciar-sesion"}>
              Iniciar sesión
            </LinkUnderline>
          </p>
        </div>
      </Register>


    </ImageWithContent >
  )
}

export default page