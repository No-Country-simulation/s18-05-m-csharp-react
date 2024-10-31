import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  src: StaticImageData | string,
  alt: string
}

const ImageWithContent: FC<Props> = ({ src, alt, children }) => {
  return (
    <div className="absolute top-0 min-h-screen flex bg-white w-full z-50">
      <aside className="w-1/2 md:block hidden">
        <Image
          src={src}
          alt={alt}
          width={859}
          height={970}
          className="object-cover w-full h-full"
        />
      </aside>

      <div className="w-full md:w-1/2 flex justify-center items-center py-12 md:py-3">
        <div className="max-w-md w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageWithContent;
