import ImageWithContent from "@/components/ImageWithContent"
import litteDog from "@/../public/assets/images/little-dog.png"
import logo from "@/../public/assets/images/logo.png"
import Image from "next/image"
import LinkUnderline from "@/components/LinkUnderline"
import Form from "@/components/login/Form"

const page = () => {
  return (
    <ImageWithContent src={litteDog} alt="litte-black-dog">
      <div className="text-center">
        <Image
          alt="AdoPet Logo"
          src={logo}
          width={227}
          height={40}
          className="mx-auto"
        />
        <div className="my-[40px]">
          <h3 className="text-dark-gray">¡Hola de nuevo!</h3>
          <p className="text-dark-gray font-bold text-body">Tu compañero ideal te está esperando</p>
        </div>
      </div>

      <Form>
        <div className="text-center text-small">
          <p>
            ¿Olvidaste tu contraseña?{' '}
            <LinkUnderline href={"#"}>
              Haz clic aquí
            </LinkUnderline>
          </p>
          <p className="mt-2">
            ¿No tienes una cuenta?{' '}
            <LinkUnderline href={"#"}>
              Crear cuenta
            </LinkUnderline>
          </p>
        </div>
      </Form>


    </ImageWithContent >
  )
}

export default page