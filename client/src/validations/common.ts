export const defaultRequireValidation = Object.freeze({
  required: {
    value: true,
    message: "Este campo es requerido."
  }
})

export const phoneValidation = Object.freeze({
  ...defaultRequireValidation,
  minLength: {
    value: 10,
    message: "Debe contener al menos 10 dígitos."
  },
  maxLength: {
    value: 15,
    message: "Debe contener como máximo 15 dígitos."
  },
})


export const passwordValidation: any = Object.freeze({
  ...defaultRequireValidation,
  minLength: {
    value: 8,
    message: "Debe contener al menos 8 caracteres."
  },
  validate: {
    noThreeConsecutiveChars: (value: string) =>
      /^(?!.*(.)\1{2}).*$/.test(value) || "No se permiten 3 caracteres iguales consecutivos.",
    hasLowercase: (value: string) =>
      /[a-z]/.test(value) || "Debe contener al menos una letra minúscula.",
    hasUppercase: (value: string) =>
      /[A-Z]/.test(value) || "Debe contener al menos una letra mayúscula.",
    hasNumber: (value: string) =>
      /[0-9]/.test(value) || "Debe contener al menos un número (0-9).",
    hasSpecialChar: (value: string) =>
      /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Debe contener al menos un carácter especial (!@#$%^&*(),.?\":{}|<>)."
  }
})

export const confirmPasswordValidation = (watch: any) => ({
  ...passwordValidation,
  validate: (value: string) => {
    if (watch("password") != value) return "Las contraseñas no coinciden"
  }
})

export const emailValidation = Object.freeze({
  ...defaultRequireValidation,
  minLength: {
    value: 6,
    message: "Debe contener al menos 6 caracteres."
  },
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?!mil$)([a-zA-Z]{2,4}|gob|edu|biz)$/,
    message: "Incluye un signo '@' y '.' en la dirección de correo electrónico. Ej: 'correo@dominio.com'."
  }
})

export const namesValidation = Object.freeze({
  ...defaultRequireValidation,
  maxLength: {
    value: 20,
    message: "Debe contener como máximo 20 caracteres."
  }, minLength: {
    value: 3,
    message: "Debe contener al menos 3 caracteres."
  },
  pattern: {
    value: /^[a-zA-ZÀ-žñÑ´¨' -]*$/,
    message: "Solo se permiten letras, espacios y los siguientes caracteres especiales: ´¨' - ñ Ñ."
  }
})