import 'tailwindcss/tailwind.css'
import AppLayout from '../src/components/layout/AppLayout'
import { ContextProvider } from '../src/context/Expenses'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ContextProvider>
  )
}

export default MyApp
