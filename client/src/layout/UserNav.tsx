import Link from "next/link"

const links: { href: string; label: string }[] = [
  { href: "/iniciar-sesion", label: "Iniciar sesión" },
  { href: "/registrarme", label: "Registrarme" },
]


const UserNav = () => {
  return (
    <div className="flex gap-1">
      {
        links.map(({ href, label }, i) => (
          <Link href={href} key={i} className={`
          rounded-full py-1.5 px-4 text-small
          duration-300 text-white hover:text-secondary-light
          ${!(i % 2) && "bg-white-100"} transition-all ease  
          `}>
            {label}
          </Link>
        ))
      }
    </div>
  )
}

export default UserNav