import { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { UserProvider } from '../context/UserContext'

import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>Welcome to bestla!</title>
      </Head>
      <main className="app">
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </main>
    </UserProvider>
  )
}

export default CustomApp
