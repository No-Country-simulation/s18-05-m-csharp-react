import CustomInput, { CustomInputProps } from '@/components/shared/form/CustomInput'
import Image from 'next/image'
import { forwardRef } from 'react'


const LocationInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (props, ref) => {
    return (
      <CustomInput
        {...props}
        ref={ref}
        topLabel={"Ubicación*"}
        extraClass="rounded-xl pl-[35px!important]"
        placeholder="Ingresa tu dirección. Ej. Buenos Aires, Morón."
      >
        <Image
          src="/assets/icons/location.svg"
          alt="Location Icon"
          width={17}
          height={21}
          className="absolute left-3 top-[57px] transform -translate-y-1/2"
        />
      </CustomInput>
    )
  })

LocationInput.displayName = "LocationInput";


export default LocationInput