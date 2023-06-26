import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import { outfit } from './utils/fonts'

export const metadata = {
  title: 'GuitarLA - NextJS',
  description: 'Blog de musica, guitarras, tienda online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
