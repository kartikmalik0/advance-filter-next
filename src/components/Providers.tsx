"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
const Providers = ({ children }: PropsWithChildren<{}>) => {
  const client = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </div>
  )
}

export default Providers
