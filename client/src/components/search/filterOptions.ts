const filterOptions: Record<string, FilterOption[]> = {
  'Tipo de animal': [
    { type: 'button', label: 'Perro' },
    { type: 'button', label: 'Gato' },
    { type: 'button', label: 'Hamster' },
    { type: 'button', label: 'Pájaro' },
    { type: 'button', label: 'Conejo' },
    { type: 'button', label: 'Otros' },
  ],
  'Tamaño': [
    { type: 'button', label: 'Grande' },
    { type: 'button', label: 'Mediano' },
    { type: 'button', label: 'Chico' },
  ],
  'Sexo': [
    { type: 'button', label: 'Macho' },
    { type: 'button', label: 'Hembra' },
  ],
  'Edad': [
    { type: 'button', label: 'Cachorro' },
    { type: 'button', label: 'Entre 1 a 3 años' },
    { type: 'button', label: 'Entre 3 a 5 años' },
    { type: 'button', label: 'Más de 5 años' },
  ],
  'Estado': [
    { type: 'checkbox', label: 'Esterilizado' },
    { type: 'checkbox', label: 'Vacunas al día' },
    { type: 'checkbox', label: 'Castrado' },
  ],
  'Ubicación': [
    { type: 'slider', label: 'Distancia', min: 10, max: 60, step: 10 },
  ],
}

export default filterOptions