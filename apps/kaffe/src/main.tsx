import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import App from './App'
import { theme } from './theme'
import { store } from './app/store'
import { UserProvider } from './context/UserContext'

// fonts
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import './styles.css'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <Toaster position="top-center" reverseOrder={false} />
            <App />
          </ChakraProvider>
        </Provider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
)
