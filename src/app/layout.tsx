import { Barlow } from 'next/font/google';
import "../globals.css";
import Header from '../components/header';
import Footer from '../components/footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

// Apply the font globally
const barlow = Barlow({
  subsets: ['latin'], // Choose subsets based on your needs
  weight: ['400', '700'], // Choose font weights
});

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <head>
        <meta name="description" content="SIPSA Logistica Integral" />
        <meta property="og:title" content="SIPSA CR" />
        <meta name="description" content="Servicios integrales de planificación y gestión de la cadena de suministro, optimizando rutas y tiempos de entrega."/>
        <meta property="og:description" content="Servicios integrales de planificación y gestión de la cadena de suministro, optimizando rutas y tiempos de entrega." />
        <meta property="og:image" content="https://www.sipsacr.com/truck-1.jpg" />
        <meta name="twitter:card" content="https://www.sipsacr.com/truck-1.jpg" />
        <title>SIPSA CR</title>

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={barlow.className}>
        <Header />
        <main className="pt-[134px]">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}