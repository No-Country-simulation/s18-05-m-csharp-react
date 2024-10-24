import { useState, useRef } from 'react'

interface ImageUploadProps {
  onImageUpload: (imageUrl: string | null) => void
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
        onImageUpload(reader.result as string)
      }
      reader.readAsDataURL(file)
    } 
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      onClick={handleClick}
      className={`w-full h-48 ${previewUrl ? 'hover:h-80' : ''}
        transition-all ease duration-300 border-2 border-primary-light-500 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden bg-white mt-[-96px] mb-5`}
    >
      {previewUrl ? (
        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
      ) : (
        <div className="flex flex-col text-center text-light-gray">+ <span>Cargar foto</span></div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  )
}