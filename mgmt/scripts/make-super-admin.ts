/**
 * Asigna rol 'super-admin' al usuario especificado en la base de datos.
 * Usar: bun --env-file=.env scripts/make-super-admin.ts EMAIL
 *
 * Ejemplo: bun --env-file=.env scripts/make-super-admin.ts admin@ejemplo.com
 */
import { getPayload } from 'payload'
import config from '../payload.config'

const TARGET_EMAIL = process.argv[2]
if (!TARGET_EMAIL) {
  console.error('❌ Uso: bun --env-file=.env scripts/make-super-admin.ts EMAIL')
  process.exit(1)
}

async function main() {
  console.log(`Conectando a la base de datos (${process.env.DATABASE_URI?.split('@')[1]?.split('/')[0] ?? 'local'})...`)

  const payload = await getPayload({ config })

  // Buscar el usuario
  const { docs } = await payload.find({
    collection: 'users',
    where: { email: { equals: TARGET_EMAIL } },
    overrideAccess: true,
    limit: 1,
  })

  if (docs.length === 0) {
    console.error(`❌ No se encontró: ${TARGET_EMAIL}`)
    const all = await payload.find({ collection: 'users', overrideAccess: true })
    console.log('Usuarios en la DB:', all.docs.map((u: any) => u.email))
    process.exit(1)
  }

  const user = docs[0]!

  // Asignar rol super-admin
  const updated = await payload.update({
    collection: 'users',
    id: user.id,
    data: { role: 'super-admin' } as any,
    overrideAccess: true,
  })

  console.log(`✅ Usuario actualizado:`, { email: (updated as any).email, role: (updated as any).role })
  process.exit(0)
}

main().catch(err => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
