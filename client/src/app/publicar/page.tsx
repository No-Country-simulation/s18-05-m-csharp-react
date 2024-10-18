import CardMenu from "@/components/post/CardMenu"
import ModalPost from "@/components/post/ModalPost"
// adoption / lost / found /.svg



const page = () => {
  return (
    <div>
      <h1>Publicar</h1>
      <ModalPost />
      {/* <div className="flex w-full flex-wrap justify-evenly gap-6 my-6">
        {menuItems.map((item) => (
          <CardMenu
            icon={item.icon}
            text={item.text}
            label={item.label}
            alt={item.alt}
            href={item.href}
            key={item.text}
          />
        ))}
      </div> */}

    </div>
  )
}

export default page