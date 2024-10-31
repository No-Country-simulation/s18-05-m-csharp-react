type LoginFormValues = {
  email: string
  password: string
}

interface RegisterFormValues extends LoginFormValues {
  name: string
  lastName: string
  confirmPassword: string
  terms: boolean
}
