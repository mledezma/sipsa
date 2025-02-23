import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Barlow } from 'next/font/google';
import "../globals.css";

// Apply the font globally
const barlow = Barlow({
  subsets: ['latin'], // Choose subsets based on your needs
  weight: ['400', '700'], // Choose font weights
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <meta name="description" content="SIPSA Logistica Integral" />
        <meta property="og:title" content="SIPSA CR" />

        <title>SIPSA CR</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={barlow.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}