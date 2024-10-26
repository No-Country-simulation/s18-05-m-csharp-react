"use client"
import { FC, useEffect, useState } from "react";
import CustomButton from "../shared/form/CustomButton";
import Image from "next/image";
import LinkUnderline from "../shared/LinkUnderline";

type Props = {
  imageSrc?: string
};

const SuccessCard: FC<Props> = ({ imageSrc }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`my-10 w-4/5 max-w-md mx-auto transition-all duration-500 ease-out transform ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
    >
      <header className="flex flex-col gap-3 justify-center items-center text-center align-middle">
        <Image
          alt="Success image"
          src={imageSrc ?? "http://res.cloudinary.com/dqozzngu1/image/upload/v1729956949/b2txpcctkpoaawz2w5sy.jpg"}
          height={180}
          width={180}
          className="rounded-full border border-primary shadow-xl"
        />
        <h3 className="text-dark-gray">¡Publicado con éxito!</h3>
      </header>

      <footer className="gap-2.5 text-center mt-5 flex flex-col">
        <CustomButton extraClass="h-12 flex justify-center items-center text-center align-middle gap-4">
          <Image
            src={"/assets/icons/instagram.svg"}
            alt="instagram-icon"
            height={26}
            width={26}
          />
          Compartir en Instagram
        </CustomButton>

        <CustomButton extraClass="h-12 flex justify-center items-center text-center align-middle gap-4">
          <Image
            src={"/assets/icons/facebook.svg"}
            alt="facebook-icon"
            height={26}
            width={26}
          />
          Compartir en Facebook
        </CustomButton>

        <LinkUnderline
          className="mt-3 w-fit mx-auto"
          color={"text-primary"}
          href=" / ">
          Volver al inicio
        </LinkUnderline>
      </footer>
    </div>
  );
};

export default SuccessCard;
