import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (
    (request.url.includes("publicar") || request.url.includes("notificaciones"))
    && !token) {
    return NextResponse.redirect(new URL('/iniciar-sesion', request.url))
  }

  if (token && (request.url.includes("iniciar-sesion") || request.url.includes("registrarme"))) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/iniciar-sesion", "/registrarme", "/publicar/(.*)", "/notificaciones", "/notificaciones/(.*)"],
}