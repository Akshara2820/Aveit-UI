// import '../styles/globals.css'

// // import { Quicksand} from '@next/font/google'
// // const ubuntu = Quicksand({ 
// //   weight: '400',
// //   variable: '--Quicksand-font'
// // })

// function MyApp({ Component, pageProps }){
//   return(
//     <main >
//     <Component {...pageProps} />
//     </main>
//   )
// }
// export default MyApp

// // className={ubuntu.className}




import "../styles/globals.css";
import Layout from "./component/layout";

import { ThemeProvider, DefaultTheme } from 'styled-components'
// import GlobalStyle from '../components/globalstyles'

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
      
        <Layout>
  
        <Component {...pageProps} /></Layout>
      </ThemeProvider>
    </>
  )
}