import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../src/components/Navbar/index';
import Transition from '../src/components/Transition';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </>
  )

}
