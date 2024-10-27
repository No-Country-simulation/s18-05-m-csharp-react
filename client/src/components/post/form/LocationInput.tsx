import CustomInput, { CustomInputProps } from '@/components/shared/form/CustomInput'
import Image from 'next/image'
import { forwardRef } from 'react'

interface LocationInputProps extends CustomInputProps {
}

const LocationInput = forwardRef<HTMLInputElement, LocationInputProps>(
  (props, ref) => {
    return (
      <CustomInput
        {...props}
        ref={ref}
        topLabel={"Ubicación*"}
        extraClass="rounded-xl pl-[35px!important]"
        placeholder="Ingresa tu dirección"
      >
        <Image
          src="/assets/icons/location.svg"
          alt="Location Icon"
          width={21}
          height={21}
          className="absolute left-2 top-[57px] transform -translate-y-1/2"
        />
      </CustomInput>
    )
  })

LocationInput.displayName = "LocationInput";


export default LocationInput