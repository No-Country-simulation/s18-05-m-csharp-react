import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

interface Props extends ComponentPropsWithoutRef<typeof PopoverButton> {
  children: ReactNode,
  options: { label: string; href: string }[],
  specialContent?: ReactNode
}

const CustomPopover: FC<Props> = (props) => {
  const { children, options, specialContent, ...rest } = props
  return (
    <Popover className={"z-20"}>
      <PopoverButton {...rest}>
        {children}
      </PopoverButton>
      {/* <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
        Solutions
      </PopoverButton> */}
      <PopoverPanel
        transition
        anchor="bottom"
        className="rounded-xl text-body transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0 text-black divide-y-2 divide-opacity-5 divide-black bg-white shadow-lg min-w-44"
      >
        <div className="p-2">
          {
            options.map(({ label, href }, i) => (
              <Link key={label + "-" + i} className="rounded-lg text-small py-2 px-4 transition hover:bg-primary-light hover:text-white block" href={href}>
                {label}
              </Link>
            ))
          }
        </div>
        {specialContent
          && <div className="p-2">{specialContent}</div>
        }
      </PopoverPanel>
    </Popover>
  )
}


export default CustomPopover