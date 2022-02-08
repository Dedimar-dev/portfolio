import '../styles/globals.css'
import { GlobalProvider } from '../Context/GlobalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
       <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
