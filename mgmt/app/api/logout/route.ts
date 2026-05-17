import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

/**
 * Ruta de logout server-side que borra la cookie de sesión directamente
 * desde el servidor de Next.js, sin depender del endpoint de Payload.
 * Esto evita que Payload regenere el token en el middleware.
 */
export async function GET(_req: NextRequest) {
  const cookieStore = await cookies()

  // Borrar todos los posibles nombres de cookie que Payload usa
  cookieStore.delete('payload-token')

  redirect('/admin/login')
}

export async function POST(_req: NextRequest) {
  const cookieStore = await cookies()

  cookieStore.delete('payload-token')

  redirect('/admin/login')
}
