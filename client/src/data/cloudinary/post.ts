import responseError from "@/utils/responseError";


const uploadPhoto = async (data: FileList) => {
  try {
    const formData = new FormData();
    formData.append('media', data[0])

    const response = await fetch('https://adopet.somee.com/api/cloudinary/uploadphoto', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al subir la imagen');
    }

    return await response.json();

  } catch (error) {
    return {
      data: null,
      ...responseError(error)
    }
  }
}

export default uploadPhoto