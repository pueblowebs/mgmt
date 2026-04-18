import type { Metadata } from 'next'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import React from 'react'

import config from '@payload-config'
import { importMap } from './importMap'
import '@payloadcms/next/css'

export const metadata: Metadata = {
  title: 'Management Pyme — CMS Admin',
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const serverFunction = async function (args: any) {
    'use server'
    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
