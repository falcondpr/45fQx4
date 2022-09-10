import { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from '../context/UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './styles.css'

const queryClient = new QueryClient()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Welcome to bestla!</title>
        </Head>
        <main className="app">
          <Toaster position="top-center" reverseOrder={false} />
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </UserProvider>
  )
}

export default CustomApp
