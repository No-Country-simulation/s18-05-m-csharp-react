"use client"
import { useState } from 'react'
import CustomTextArea from '../shared/form/CustomTextarea'
import CustomInput from '../shared/form/CustomInput'
import CustomButton from '../shared/form/CustomButton'

type UserProfile = {
  name: string
  email: string
  phone: string
  address: string
  bio: string
  favoriteAnimal: string
}

const FormProfile = () => {

  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    phone: '',
    address: '',
    bio: '',
    favoriteAnimal: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Perfil actualizado:', profile)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomInput
          name="name"
          value={profile.name}
          onChange={handleChange}
          topLabel="Nombre"
          placeholder="Tu nombre completo"
          extraClass="rounded-xl"
        />
        <CustomInput
          name="email"
          type="email"
          value={profile.email}
          onChange={handleChange}
          topLabel="Correo Electrónico"
          placeholder="tu@email.com"
          extraClass="rounded-xl"
        />
        <CustomInput
          name="phone"
          type="tel"
          value={profile.phone}
          onChange={handleChange}
          topLabel="Teléfono"
          placeholder="Tu número de teléfono"
          extraClass="rounded-xl"
        />
        <CustomInput
          name="address"
          value={profile.address}
          onChange={handleChange}
          topLabel="Dirección"
          placeholder="Tu dirección"
          extraClass="rounded-xl"
        />
        <CustomInput
          name="favoriteAnimal"
          value={profile.favoriteAnimal}
          onChange={handleChange}
          topLabel="Animal Favorito"
          placeholder="¿Cuál es tu animal favorito?"
          extraClass="rounded-xl"
        />
      </div>
      <CustomTextArea
        name="bio"
        value={profile.bio}
        onChange={handleChange}
        label="Biografía"
        placeholder="Cuéntanos sobre ti y tu amor por los animales..."
      />
      <div className="flex justify-center">
        <CustomButton
          type="submit"
          text="Guardar Cambios"
          extraClass=" text-lg hover:shadow-lg hover:scale-105"
        />
      </div>
    </form>)
}

export default FormProfile