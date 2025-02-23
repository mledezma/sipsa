import { ReactNode } from 'react';
import { Barlow } from 'next/font/google'
import "./globals.css";

const barlow = Barlow({
  weight: ['700', '600', '500', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "SIPSA CR",
  description: "SIPSA Logistica Integral",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
