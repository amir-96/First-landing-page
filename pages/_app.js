import Navbar from '@/components/Navbar/Navbar'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='font-iranYekan' dir='rtl'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
