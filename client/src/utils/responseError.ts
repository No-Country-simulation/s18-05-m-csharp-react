
export default function responseError(error: any): ResponseError {
  console.error(error)
  return {
    success: false,
    message: error.message ?? error
  }
}