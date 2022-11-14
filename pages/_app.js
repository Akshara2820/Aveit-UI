import '../styles/globals.css'

import { Quicksand} from '@next/font/google'
const ubuntu = Quicksand({ 
  weight: '400',
  variable: '--Quicksand-font'
})

function MyApp({ Component, pageProps }){
  return(
    <main className={ubuntu.className}>
    <Component {...pageProps} />
    </main>
  )
}
export default MyApp

