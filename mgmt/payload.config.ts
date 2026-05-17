import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { BlogPosts } from './collections/BlogPosts'
import { FAQs } from './collections/FAQs'
import { SiteSettings } from './globals/SiteSettings'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' — Management Pyme CMS',
    },
    avatar: {
      Component: '/components/admin/AdminAvatar#default',
    },
    components: {
      graphics: {
        Logo: '/components/admin/AdminLogo#default',
        Icon: '/components/admin/AdminIcon#default',
      },
      logout: {
        Button: '/components/admin/CustomLogoutButton#default',
      },
    },
  },
  collections: [Users, Media, BlogPosts, FAQs],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  sharp,
  secret: process.env.PAYLOAD_SECRET || 'mgmt-pyme-local-secret-change-in-prod',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: process.env.DATABASE_URI?.startsWith('postgres') || process.env.DATABASE_URI?.startsWith('postgresql')
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI,
        },
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./payload.db',
        },
      }),
  upload: {
    limits: {
      fileSize: 5_000_000, // 5MB
    },
  },
})
