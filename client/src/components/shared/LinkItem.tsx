import { Item } from "@/layout/components/navigation";
import Link from "next/link";
import { FC } from "react";

interface LinkItemProps {
  isActive?: boolean,
  item: Item,
  i?: number,
}

const LinkItem: FC<LinkItemProps> = ({ isActive, item, i }) => (
  <li className="capitalize text-body text-center h-7 w-28" key={i}
    onClick={item.handleClick}
  >
    <Link href={item.href} className={`p-1.5 hover:text-secondary-light transition-all duration-300 ease
 focus:font-bold focus:text-secondary-light
  ${isActive ? "font-bold text-secondary-light" : "text-white font-regular"}`}
    >
      {item.label}
    </Link>
  </li >
)

export default LinkItem