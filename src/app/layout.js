import './globals.css'

import 'normalize.css/normalize.css';

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import { outfit } from '../../utils/fonts'


export const metadata = {
  title: 'GuitarLA - NextJS',
  description: 'Blog de musica, guitarras, tienda online',
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}



// To import normalize: npm i normalize.css and import it in the main layout import 'normalize.css/normalize.css'