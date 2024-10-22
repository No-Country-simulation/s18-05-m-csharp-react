import responseError from "@/utils/responseError"
import fetchFormData from "./fetchFormData"


const uploadPhoto = (formData: FormData): Promise<{ token: string }> => {
  return fetchFormData("cloudinary/uploadphoto", formData)
    .then((res) => {
      if (res.error) throw new Error(res.error)
      return res
    })
    .catch((error) => {
      console.error('Error al subir la imagen:', error)
      return { data: null, ...responseError(error) }
    })

}


export default uploadPhoto