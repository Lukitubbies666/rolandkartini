import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head'

function MyApp({Component, pageProps}) {
  return (
      <>
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
              <link href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@500&display=swap"
                    rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css2?family=Birthstone&display=swap" rel="stylesheet"/>
          </Head>
          <Component {...pageProps} />
      </>
  )
}

export default MyApp
