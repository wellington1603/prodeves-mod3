import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from  '../components/footer'
import { CartProvider } from '../context/CartContext'

import overrideDefault from '../helpers/overrides'
overrideDefault()

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <CartProvider>
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  </div>
  )
}

export default MyApp
