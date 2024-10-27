type FilterOption = {
  type: 'button' | 'checkbox' | 'slider'
  label: string
  options?: string[]
  min?: number
  max?: number
  step?: number
  value?: string | number | boolean | string[] | number[] | boolean[]
}