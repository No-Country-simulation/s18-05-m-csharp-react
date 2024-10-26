"use client"
import React, { FormEvent, useState } from 'react';

const Probando = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event: any) => {
    console.log(event);

    setSelectedFile(event.target.files?.[0]);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      alert('Por favor, selecciona una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('media', selectedFile);
    console.log(formData);

    // try {
    //   const response = await fetch('https://adopet.somee.com/api/cloudinary/uploadphoto', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error('Error al subir la imagen');
    //   }

    //   const data = await response.json();
    //   console.log('Imagen subida con éxito:', data);
    // } catch (error) {
    //   console.error('Error al subir la imagen:', error);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Subir Imagen</button>
    </form>
  );
};

export default Probando;