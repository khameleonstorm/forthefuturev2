import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext';
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"
import Script from 'next/script';

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {

  return (
          <AuthProvider>
                <Script src="//code.tidio.co/qmukhordfq8gyusczggkrbiieyzfpub1.js" async></Script>
              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/thefuture-b0f19.appspot.com/o/Forthefuture.png?alt=media&token=021d1a99-11d9-45fa-b640-977fe536ff11" />
              </Head>
              <Component {...pageProps} />
          </AuthProvider>
        )
}

export default MyApp